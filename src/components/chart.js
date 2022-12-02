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

  const [data_g, setData_g] = useState({labels: [], datasets: []});
  const [data_mg, setData_mg] = useState({labels: [], datasets: []});

  const adaptInfo_g = useCallback(() => {

    let dummy = info.filter((item) => item.nutrientName!=="Energy");

    let labels = dummy.filter((item) => item.unitName!=="MG").map((item)=> item.nutrientName)

    console.log(labels)
    
    let data = info.filter((item) => item.unitName!=="MG").map((item)=> item.nutrientNumber)

    setData_g({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs Grams',
        backgroundColor: 'rgba(209, 188, 227, 1)',
        data
      }]
    })
  }, [info, setData_g])

  const adaptInfo_mg = useCallback(() => {

    let dummy = info.filter((item) => item.nutrientName!=="Energy");

    let labels = dummy.filter((item) => item.unitName!=="G").map((item)=> item.nutrientName)

    console.log(labels)
    
    let data = info.filter((item) => item.unitName!=="G").map((item)=> item.nutrientNumber)

    setData_mg({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs Grams',
        backgroundColor: 'rgba(209, 188, 227, 1)',
        data
      }]
    })
  }, [info, setData_mg])

  useEffect(() => {
    if(info) adaptInfo_g()
  }, [info, adaptInfo_g])

  useEffect(() => {
    if(info) adaptInfo_mg()
  }, [info, adaptInfo_mg])

  if(!info)
    return <>loading...</>

  return (
    <div>
      <Bar options={options} data={data_g}/>
      <Bar options={options} data={data_mg}/>
    </div>
  )
}