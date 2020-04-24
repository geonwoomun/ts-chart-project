import * as React from 'react';
import {useCallback, useState} from 'react';
import { useChartsDispatch } from '../contexts/ChartContext';

export function useColumn() {
    const dispatch = useChartsDispatch();

    const [column, setColumn] = useState({
        columnName: '',
        color: '',
        value : 0
    });

    const onChangeColumn = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setColumn(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const onChangeColor = useCallback((color) => {
        setColumn(prev => ({
            ...prev,
            color: color.hex
        }))
    }, []);

    const resetColumn = useCallback(() => {
        setColumn({
            columnName: '',
            color : '',
            value: 0
        })
    }, []);

    const addColumn = useCallback(() => {
        dispatch({
          type: 'COLUMN/CREATE',
          payload: {
            columnName: column.columnName,
            value: Number(column.value),
            color: column.color,
          },
        });
        resetColumn();
      }, [column.columnName, column.color, column.value]);

    return {
        column,
        onChangeColumn,
        onChangeColor,
        resetColumn,
        addColumn
    }
}