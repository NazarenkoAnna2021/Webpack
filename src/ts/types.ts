import { type } from "os"

export type TUsers = {
    avatar_url: string,
    events_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string
    gravatar_id: string,
    html_url: string,
    id: number,
    login: string,
    node_id: string,
    organizations_url: string,
    received_events_url: string,
    repos_url: string,
    site_admin: boolean,
    starred_url: string,
    subscriptions_url: string,
    type: string,
    url: string
}
export type TOrganizations = {
    "login": string,
    "id": number,
    "node_id": string,
    "url": string,
    "repos_url": string
    "events_url": string,
    "hooks_url": string,
    "issues_url": string,
    "members_url": string,
    "public_members_url": string,
    "avatar_url": string,
    "description": string
}