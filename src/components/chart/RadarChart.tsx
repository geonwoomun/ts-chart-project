import * as React from 'react';
import { Radar } from 'react-chartjs-2';
import { useChartsState } from '../../contexts/ChartContext';
import { useChartData } from '../../hooks/useChartData';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','july','agust'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor:'red',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 50,50,50]
      }
    ]
  };

const RadarChart = () => {
  const {chartsState} = useChartsState();
  const { ref, data, imageUrl, clickDownload } = useChartData(chartsState);
    return (
        <div>
            <Radar ref={ref} data={data} />
            <a href={imageUrl} download="myChart.png" onClick={clickDownload} >download</a>
        </div>
    );
};

export default RadarChart;