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

const VerticalBar2 = (props) => {

  const [chartData, setchartData] = useState();

  let youngerAge = 0;
  let middleAge = 0;
  let olderAge = 0;

const chartConfig = () => {
 
  props.data.map( user => {
    if( 12 < user.userAge && user.userAge <=18  ){
      youngerAge += user.userGuest + 1;
    } else if( 18 < user.userAge && user.userAge <=25 ) {
      middleAge += user.userGuest + 1;
    } else {
      olderAge += user.userGuest + 1;
    }
    return false;
  })


  setchartData( {
    labels: ['13-18', '18-25', '25+'],
    datasets: [
      
      {
        label: 'different age group People',
        data: [youngerAge, middleAge, olderAge],
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
      <h4 className='title'>Number of people in a given age range</h4>
    </div>
    
    <Bar data={chartData} options={options} />
  </>
)
};

export default VerticalBar2;