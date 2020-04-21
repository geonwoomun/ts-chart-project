import * as React from 'react';
import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Chart = {
    id: number;
    columnName: string;
    value: number;
}

type ChartsState = Chart[];

const ChartsStateContext = createContext<ChartsState | undefined>(undefined);

type Action = 
    | { type: 'CREATE'; columnName: string; value: number}
    | {type: 'UPDATE'; id: number, columnName: string; value: number}
    | {type: 'DELETE'; id: number};

type ChartsDispatch = Dispatch<Action>;
const ChartsDispatchContext = createContext<ChartsDispatch | undefined>(undefined);


function chartsReducer(state: ChartsState, action: Action): ChartsState {
    switch (action.type) {
        case 'CREATE':
            const nextID = Math.max(...state.map(todo => todo.id)) + 1;
            return [
                ...state,
                {
                    id: nextID,
                    columnName: action.columnName,
                    value: action.value
                }
            ]
        case 'UPDATE':
            return state.map(col => col.id === action.id ? {...col, columnName : action.columnName, value: action.value,} : col);
        case 'DELETE':
            return state.filter(col => col.id !== action.id);
        default: 
            throw new Error('Unhandeld action');
    }
}

export function ChartsContextProvider({children}: {children: React.ReactNode}) {
    const [charts, dispatch] = useReducer(chartsReducer, [
        {
            id: 1,
            columnName: '좋아요',
            value : 4
        },
        {
            id: 2,
            columnName: '싫어요',
            value: 5
        }
    ]);
    
    return (
        <ChartsDispatchContext.Provider value={dispatch}>
          <ChartsStateContext.Provider value={charts}>
             {children}
          </ChartsStateContext.Provider>
        </ChartsDispatchContext.Provider>
    )
};

export function useChartsState() {
    const state = useContext(ChartsStateContext);
    if (!state) throw new Error('ChartsProvider not found');
    return state;
}

export function useChartsDispatch() {
    const dispatch = useContext(ChartsDispatchContext);
    if (!dispatch) throw new Error('ChartsProvider not found');
    return dispatch;
}