import * as React from 'react';
import {useState, useCallback} from 'react';
import { useChartsDispatch } from '../contexts/ChartContext';

export function useTitle() {
    const dispatch = useChartsDispatch();
    const [title, setTitle] = useState('');
    
    const titleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    const titleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type:"TITLE/UPDATE",
            payload: {
                title
            }
        });
    }, [title]);

    return {
        title,
        titleChange,
        titleSubmit
    }
}