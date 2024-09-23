import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const Chart = ({ dataSelection }) => {
    const chartData = {
        labels: ['07-02', '07-04', '07-06', '07-08', '07-10', '07-12', '07-14', '07-16'], 
        datasets: [
            {
                label: 'Aggrégat',
                data: dataSelection.aggregat ? [50000, 60000, 70000, 80000, 0, -20000, -40000, -60000] : [], 
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Trésorerie',
                data: dataSelection.tresorerie ? [40000, 50000, 60000, 70000, 80000, 70000, 60000, 50000] : [],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
            },
            {
                label: 'Immobilisations',
                data: dataSelection.immobilisations ? [20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000] : [],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
            {
                label: 'Obligations',
                data: dataSelection.obligations ? [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000] : [],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Montant',
                },
                min: -80000,
                max: 100000,
                ticks: {
                    stepSize: 20000,
                    callback: (value) => `${value.toLocaleString()}`, 
                },
            },
        },
    };

    return (
        <Line data={chartData} options={options} />
    );
};

export default Chart;
