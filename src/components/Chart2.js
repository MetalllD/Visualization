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
      text: 'Nutrients in your food item in MG(miligrams)',
    },
  },
};

// const labels = ['Calcium, Ca', 'Iron, Fe', 'Sodium, Na', 'Vitamin C', 'Cholesterol', 'Protein', 'Potassium'];

export default function Chart2(props) {

  const {info} = props;

  const [data, setData] = useState({labels: [], datasets: []});

  const adaptInfo = useCallback(() => {

    const dummy = info.filter((item) => item.nutrientName!=="Energy");

    const labels = dummy.filter((item) => item.unitName!=="G").map((item)=> item.nutrientName)

    console.log(labels)
    
    const data = info.filter((item) => item.unitName!=="G").map((item)=> item.nutrientNumber)

    setData({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs Grams',
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