import '../css/style.css'
import { dom } from './dom';
import { createChart } from './functions';

createChart();

dom.where.addEventListener('change', createChart);