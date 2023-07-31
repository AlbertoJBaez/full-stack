import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

//1) Llamada a weather api para obtener temperaturas exteriores

//2) Inventar temperaturas interiores


var indoorTemperatures = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var outsideTemperatures = [20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 0, 56];
var days = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var data = {
    labels: days,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Indoor temperatures',
            data: indoorTemperatures,
            tension: 0.3,
            fill : true,
            borderColor: 'rgb(61, 105, 216)',
            backgroundColor: 'rgba(39, 159, 228, 0.5)',
            pointRadius: 3,
            pointBorderColor: 'rgba(61, 105, 216)',
            pointBackgroundColor: 'rgba(39, 159, 228)',
        },
        {
          label: 'Outside temperatures',
          data: outsideTemperatures,
          tension: 0.3,
          fill : true,
          borderColor: 'rgb(223, 78, 34)',
          backgroundColor: 'rgba(223, 78, 34, 0.5)',
          pointRadius: 3,
          pointBorderColor: 'rgba(223, 78, 34)',
          pointBackgroundColor: 'rgba(223, 78, 34)',
      }
    ],
};

var options = {
    scales: {
        /* y : {
            min : 0
        }, */
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    },
    plugins: {
        legend: {
            display: true
        }
    }
};

export default function LinesChart() {
    return <Line data={data} options={options}/>
}