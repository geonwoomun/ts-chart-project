import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Pie } from 'react-chartjs-2';
import { useChartsState } from '../contexts/ChartContext';

interface dataType {
    labels: string[];
    datasets: [
        {
            label: string;
            data: number[],
            borderWidth: number,
            hoverBorderWidth: number;
            backgroundColor: string[],
            fill: boolean
        }
    ] 
}

const PieChart = () => {
    const state = useChartsState();
    const ref = useRef<Pie | null>(null);
    const [imageUrl, setImageUrl] = useState<string | undefined>('');

    const [data, setData] = useState<dataType>({
        labels: [],
        datasets: [
            {
                label : '',
                data: [],
                borderWidth: 2,
                hoverBorderWidth: 3,
                backgroundColor: [

                ],
                fill: true
            }
        ]
    });
    useEffect(() => {
        let labels: string[] = [];
        let values: number[] = [];
        let colors: string[] = [];
        state.forEach(column => {
            labels.push(column.columnName);
            values.push(column.value);
            colors.push(column.color);
        })
        // const labels = state.map(column => column.columnName);
        // const values = state.map(column => column.value);
        // const colors = state.map(column => column.color);
        setData(prev => ({
            labels,
            datasets : [
                {
                    ...prev.datasets[0],
                    data : values,
                    backgroundColor : colors,
                }
            ]
        }));
        const imageUrl = ref.current?.chartInstance.toBase64Image();
        setImageUrl(imageUrl);
    }, [state]);
    
    const dataUrl = useCallback(() => {
        ref.current?.chartInstance.resize();
        const imageUrl = ref.current?.chartInstance.toBase64Image();
        setImageUrl(imageUrl);
    }, []);

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
            <a href={imageUrl} download="myChart.png" onClick={dataUrl} >download</a>
        </div>
    );
};

export default PieChart;