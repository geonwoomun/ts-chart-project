import * as React from 'react';
import { Pie, Line, Radar, Bar } from 'react-chartjs-2';
import { useState, useCallback, useRef, useEffect } from 'react';
import { ChartsState } from '../contexts/ChartContext';

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

type ChartType = Pie | Radar | Bar | Line;

export function useChartData(state:ChartsState ) {
   
    const [imageUrl, setImageUrl] = useState<string | undefined>('');
    const ref = useRef<ChartType | null>(null);
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
    
    const clickDownload = useCallback(() => {
        ref.current?.chartInstance.resize();
        const imageUrl = ref.current?.chartInstance.toBase64Image();
        setImageUrl(imageUrl);
    }, []);

    return {
        ref,
        data,
        imageUrl,
        clickDownload
    }
}