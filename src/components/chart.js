import React, {useCallback, useEffect} from 'react';
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

// const labels = ['Calcium, Ca', 'Iron, Fe', 'Sodium, Na', 'Vitamin C', 'Cholesterol', 'Protein', 'Potassium'];

export default function Chart(props) {

  const {info} = props;

  const [data, setData] = useState({labels: [], datasets: []});

  const adaptInfo = useCallback(() => {
    const labels = info.map((item) => item.nutrientName)
    const data = info.map((item) => item.nutrientNumber)
    setData({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs Number',
        backgroundColor: 'rgba(209, 188, 227, 1)',
        data
      }]
    })
  }, [info, setData])

  useEffect(() => {
    if(info) adaptInfo()
  }, [info, adaptInfo])

  if(!info)
    return <>loading...</>

  return <Bar options={options} data={data}/>

}