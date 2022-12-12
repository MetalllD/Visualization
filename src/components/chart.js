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

ChartJS.defaults.backgroundColor = '#FF9380';
ChartJS.defaults.borderColor = 'rgba(255, 247, 243, 0.3)';
ChartJS.defaults.color = 'rgb(255, 247, 243)';
ChartJS.defaults.font.size = 14;

export const options = {
  indexAxis: 'x',
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      font:{
        size:20
      },
      
    }
}};

// const labels = ['Calcium, Ca', 'Iron, Fe', 'Sodium, Na', 'Vitamin C', 'Cholesterol', 'Protein', 'Potassium'];

export default function Chart(props) {

  const {info} = props;
  const [data_g, setData_g] = useState({labels: [], datasets: []});
  const [data_mg, setData_mg] = useState({labels: [], datasets: []});

  const adaptInfo_g = useCallback(() => {

    let dummy = info.filter((item) => item.nutrientName!=="Energy");

    let labels = dummy.filter((item) => item.unitName!=="MG").map((item)=> item.nutrientName)
    
    let data = info.filter((item) => item.unitName!=="MG").map((item)=> item.nutrientNumber)

    setData_g({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs Grams',
        data
      }]
    })
  }, [info, setData_g])

  const adaptInfo_mg = useCallback(() => {

    let dummy = info.filter((item) => item.nutrientName!=="Energy");

    let labels = dummy.filter((item) => item.unitName!=="G").map((item)=> item.nutrientName)

    let data = info.filter((item) => item.unitName!=="G").map((item)=> item.nutrientNumber)

    setData_mg({
      labels,
      datasets: [{
        id: 1,
        label: 'Nutrient Name vs MilliGrams',
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
      <div className="charts">
         <Bar options={options} data={data_g}/>
      </div>
      <Bar options={options} data={data_mg}/>
    </div>
  )
}