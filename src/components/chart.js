import React from 'react';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Nutrients in your food item in G(grams)',
    },
  },
};

const labels = ['Calcium, Ca', 'Iron, Fe', 'Sodium, Na', 'Vitamin C', 'Cholesterol', 'Protein', 'Potassium'];


export default function Chart(props) {

  const [data,setData] = useState({
    labels,
    datasets: [
      {
        label: 'Nutrients',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(209, 188, 227, 1)',
      }
    ],
  });

  console.log(props.info);

  return (
  <Bar options={options} data={data}/>
  );
}
