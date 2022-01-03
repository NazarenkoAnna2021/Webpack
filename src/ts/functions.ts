import { dom } from './dom';
import Chart from '../../node_modules/chart.js/auto/auto.esm';
import { URL } from './constants/url';
import { data, COLOR } from './constants/constants';
import { TStatistic } from './types';
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');

let myChart: Chart = new Chart(dom.grafic, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false
    }
});

const getData = async <T>(url: string, pathname: string): Promise<T> => {
    const resp: T = await axios.get(url.concat(pathname));
    return resp;
}

const remakeDataToUsage = async (): Promise<void> => {
    const statistic: TStatistic = await getData<TStatistic>(URL, dom.where.value);
    data.labels = Object.keys(statistic.data.month);
    data.datasets[0].data = Object.values(statistic.data.month);
    data.datasets[0].borderColor = COLOR.RED;
    data.datasets[0].backgroundColor = COLOR.RED;
    data.datasets[0].borderWidth = 1;
}

const loadRequest = async (): Promise<void> => {
    dom.grafic.style.zIndex = '-1';
    await remakeDataToUsage();
    dom.grafic.style.zIndex = '2';
    myChart.destroy();
}

export const createChart = async (): Promise<void> => {
    await loadRequest();
    myChart = new Chart(dom.grafic, {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false
        }
    });
}