import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = (props) => {

  const [chartData, setchartData] = useState();


  let southZone = 0;
  let eastZone = 0;
  let WestZone = 0;
  let NorthZone = 0;

const chartConfig = () => {
 
  props.data.map( user => {
   if(user.userLocality === "East Zone"){
      eastZone += user.userGuest + 1;
   } else if(user.userLocality === "West Zone") {
      WestZone += user.userGuest + 1;
   } else if(user.userLocality === "North Zone") {
      NorthZone += user.userGuest + 1;
   } else if (user.userLocality === "South Zone") {
      southZone += user.userGuest + 1;
   } else {
     console.log("not a valid zone");
   }
   return false;
  })

  setchartData( {
    labels: ["South Zone", "North Zone", "East Zone", "West Zone"],
    datasets: [
      
      {
        label: 'count as per locality',
        data: [southZone, NorthZone, eastZone, WestZone ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          
        ],
        borderWidth: 1,
      }


      
    ],
  })
  
} 

  useEffect( () => {
    chartConfig();
}, [])


return(
  <>
    <div className='header'>
      <h4 className='title'>People count as per locality</h4>
    </div>
    
    <Bar data={chartData} options={options} />
  </>
)
};

export default VerticalBar;