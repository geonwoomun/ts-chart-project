import * as React from 'react';
import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Chart = {
    id: number;
    columnName: string;
    value: number;
    color: string;
}

type ChartsState = Chart[];

const ChartsStateContext = createContext<ChartsState | undefined>(undefined);

type Action = 
    | { type: 'CREATE';
        payload : { columnName: string; value: number; color: string }}
    | {type: 'DELETE'; 
       payload: {id: number}};

type ChartsDispatch = Dispatch<Action>;
const ChartsDispatchContext = createContext<ChartsDispatch | undefined>(undefined);


function chartsReducer(state: ChartsState, action: Action): ChartsState {
    switch (action.type) {
        case 'CREATE':
            const nextID = Math.max(...state.map(todo => todo.id)) + 1;
            const {columnName, value, color} = action.payload;
            return [
                ...state,
                {
                    id: nextID,
                    columnName,
                    value,
                    color
                }
            ]
        case 'DELETE':
            return state.filter(col => col.id !== action.payload.id);
        default: 
            throw new Error('Unhandeld action');
    }
}

export function ChartsContextProvider({children}: {children: React.ReactNode}) {
    const [charts, dispatch] = useReducer(chartsReducer, [
        {
            id: 1,
            columnName: '좋아요',
            value : 4,
            color: 'red'
        },
        {
            id: 2,
            columnName: '싫어요',
            value: 5,
            color: 'blue'
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