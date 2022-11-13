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
  indexAxis: 'x',
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

  const dataSet = []; 


/*  for (const val of props.info) {
    dataSet.push(val.id);
}*/

  const [data,setData] = useState({
    labels,
    datasets: [
      {
        label: 'Nutrients',
        data: dataSet,
        backgroundColor: 'rgba(209, 188, 227, 1)',
      }
    ],
  });

  console.log(props.info);


  return (
  <Bar options={options} data={data}/>
  );
}
