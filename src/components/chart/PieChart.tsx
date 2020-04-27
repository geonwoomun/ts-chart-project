import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import { useChartsState } from '../../contexts/ChartContext';
import { useChartData } from '../../hooks/useChartData';
import styled from 'styled-components';

const CanvasStyle = styled.div`
    width : 800px;
    height : 800px;
    & canvas {
        background : 'white';
        display: none;
    }
`;
const PieChart = () => {
    const { chartsState, title } = useChartsState();
    const { ref, data, imageUrl, clickDownload } = useChartData(chartsState);
    
    return (
        <CanvasStyle >
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
                            text: title
                         },
                         legend: {
                             labels: {
                                 fontColor: 'black',
                                 fontSize : 20,
                                 fontStyle : 'bold'
                             }
                         }
                    } }
                plugins={[{
                    beforeDraw: function(chartInstance:any) {
                        let ctx = chartInstance.chart.ctx;
                        ctx.fillStyle = "white";
                        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
                      }
                }]}
            />
            <a href={imageUrl} download="myChart.png" onClick={clickDownload} >download</a>
        </CanvasStyle>
    );
};

export default PieChart;