import * as React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June','july','agust'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor:['red','blue','green'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 50,50,50]
    }
  ]
};

const BarChart = () => {
    return (
        <div>
          <Bar
            data={data}
            width={600}
            height={500}
            options={{
              maintainAspectRatio: false,
              scales:{
                  xAxes : [{
                    stacked: true
                  }],
                  yAxes :[{
                    stacked: true
                  }]
              }
            }}
          />
        </div>
    );
};

export default BarChart;