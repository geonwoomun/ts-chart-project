import * as React from 'react';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useChartsState } from '../contexts/ChartContext';

const expData = {
    labels: ["긍정", "부정적", " 보통"],
    datasets: [
        {
            label : '첫번째 데이터셋',
            data: [60,13,27],
            borderWidth: 2,
            hoverBorderWidth: 3,
            backgroundColor: [
                "rgba(238,102,121,1)",
                "rgba(98,181,229,1)",
                "rgba(225,198, 0, 1)"
            ],
            fill: true
        }
    ]
};
const PieChart = () => {
    const state = useChartsState();
    const [data, setData] = useState('');
    return (
        <div>
            도넛
            <Pie
                data={expData}
            />
        </div>
    );
};

export default PieChart;