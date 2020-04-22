import * as React from 'react';
import {useCallback, useState} from 'react';

export function useColumn() {
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

    const resetColumn = useCallback(() => {
        setColumn({
            columnName: '',
            color : '',
            value: 0
        })
    }, []);

    return {
        column,
        onChangeColumn,
        resetColumn
    }
}