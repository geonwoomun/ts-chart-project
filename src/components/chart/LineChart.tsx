import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { useChartsState } from '../../contexts/ChartContext';
import { useChartData } from '../../hooks/useChartData';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
  
const LineChart = () => {
  const {chartsState} = useChartsState();
  const { ref, imageUrl, clickDownload } = useChartData(chartsState);
    return (
        <div>
            <Line ref={ref} data={data} />
            <a href={imageUrl} download="myChart.png" onClick={clickDownload} >download</a>
        </div>
    );
};

export default LineChart;