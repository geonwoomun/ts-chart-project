import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import { useChartsState } from '../contexts/ChartContext';
import { useChartData } from '../hooks/useChartData';



const PieChart = () => {
    const state = useChartsState();
    const { ref, data, imageUrl, clickDownload } = useChartData(state);
    return (
        <div style={{width : '800px', height: '800px'}}>
            도넛
            <Pie
                ref={ref}
                width={100}
                height={50}
                data={data}
                options={{
                         maintainAspectRatio: true,
                         title : {
                            display: true,
                            text: 'Custom Chart Title'
                         },
                         legend: {
                             labels: {
                                 fontColor: 'black',
                                 fontSize : 20,
                                 fontStyle : 'bold'
                             }
                         }
                    } }
            />
            <a href={imageUrl} download="myChart.png" onClick={clickDownload} >download</a>
        </div>
    );
};

export default PieChart;