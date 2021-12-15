import { dom } from './dom'
const { TWwther } = require('./types.ts');

async function setP<T>(url: string): Promise<T> {
    const data = await fetch(url);
    return data.json();
}

export async function main() {
    const res = await setP<typeof TWwther>('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0cca118932f4b46601283406a6138a09');
    dom.out.innerHTML = res.main.temp_min;
}