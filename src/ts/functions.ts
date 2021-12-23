import { dom } from './dom'
import { TUsers, TOrganizations } from './types'
const { URL } = require('./URL');
const axios = require('axios');

let data: Array<TUsers> = [];

const getRequest = async <T>(URL: string) => {
    const res = await axios.get(URL);
    const users: Array<T> = res.data;
    return users;
}

export const writeList = async () => {
    data = await getRequest(URL);
    data.forEach(user => {
        dom.mainArea.innerHTML += createCards(user);
    });
}

const createCards = ({ id, avatar_url, login }): string => {
    const templateCardHtml: string = dom.templateCard
        .replace('{{id}}', id)
        .replace('{{text}}', login)
        .replace('{{url}}', avatar_url);
    return templateCardHtml;
}

const createInfo = async (user: TUsers): Promise<string> => {
    const organizations: string = await getOrganizations(user);
    const followers: string = await getFollowers(user);
    const templateCardHtml: string = dom.templateInfo
        .replace('{{url}}', user.avatar_url)
        .replace('{{login}}', user.login)
        .replace('{{organizations_url}}', organizations)
        .replace('{{followers_url}}', followers);
    return templateCardHtml;
}

const getOrganizations = async (user: TUsers): Promise<string> => {
    let information: Array<TOrganizations>;
    information = await getRequest<TOrganizations>(user.organizations_url);
    return information.reduce((acc, value) => (acc.concat(value.login, value.description ? ': '.concat(value.description) : ': no description', '<br/>')), String());
}

const getFollowers = async (user: TUsers): Promise<string> => {
    let information: Array<TUsers>;
    information = await getRequest<TUsers>(user.organizations_url);
    return information.reduce((acc, value) => (acc.concat(value.login, ', ')), String()).slice(0, -2);
}

export const openUser = async (event) => {
    const userId: string = event.target.getAttribute('ID');
    const userInfo: TUsers = findUser(userId);
    dom.userInfo.innerHTML = await createInfo(userInfo);
    dom.userInfo.classList.toggle('none');
}

const findUser = (userId: string): TUsers => {
    let user: TUsers;
    data.forEach(element => {
        if (Number(userId) === element.id) user = element;
    })
    return user;
}

export const closeInfo = (event) => { if (event.target.getAttribute('class') === 'close') dom.userInfo.classList.add('none') };