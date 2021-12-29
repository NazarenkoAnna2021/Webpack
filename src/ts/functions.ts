import { dom } from './dom'
import { countDownDate } from './constants';


export const calcDate = setInterval(function() {

  const now = new Date().getTime();
  const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dom.date.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}, 1000);