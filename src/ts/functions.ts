import { dom } from './dom'
import { countDownDate } from './constants';


export const calcDate = setInterval(function () {
    const now: number = new Date().getTime();
    const distance: number = countDownDate - now;
    const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    dom.date.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    if ((days + hours + minutes + seconds) <= 0) {
        dom.container.classList.add('none');
        dom.snow.src = 'https://i.pinimg.com/originals/25/00/e1/2500e1c6f88beb56924ab9ab24a948e1.gif';
        clearInterval(calcDate);
    }
}, 1000);