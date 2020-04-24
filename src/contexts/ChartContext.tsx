import * as React from 'react';
import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Chart = {
    id: number;
    columnName: string;
    value: number;
    color: string;
}

export type ChartsState = Chart[];

export type TotalState = {
    title: string,
    chartsState: ChartsState
}
const ChartsStateContext = createContext<TotalState | undefined>(undefined);

type Action = 
    | {type: 'TITLE/UPDATE';
       payload: { title: string }}
    | { type: 'COLUMN/CREATE';
        payload : { columnName: string; value: number; color: string }}
    | {type: 'COLUMN/DELETE'; 
       payload: {id: number}};

type ChartsDispatch = Dispatch<Action>;
const ChartsDispatchContext = createContext<ChartsDispatch | undefined>(undefined);


function chartsReducer(state: TotalState, action: Action): TotalState {
    switch (action.type) {
      case 'TITLE/UPDATE':
          const {title} = action.payload;
          return {
              ...state,
              title,
          }
      case 'COLUMN/CREATE':
        const { chartsState } = state;
        const nextID = chartsState.length !== 0 ? Math.max(...chartsState.map((todo) => todo.id)) + 1 : 1;
        const { columnName, value, color } = action.payload;
        return {
          ...state,
          chartsState: [
            ...chartsState,
            {
              id: nextID,
              columnName,
              value,
              color,
            },
          ],
        };
      case 'COLUMN/DELETE':
        return {
            ...state,
            chartsState: state.chartsState.filter((col) => col.id !== action.payload.id)
        }
      default:
        throw new Error('Unhandeld action');
    }
}

export function ChartsContextProvider({children}: {children: React.ReactNode}) {
    const [charts, dispatch] = useReducer(chartsReducer, {
        title: '나만의 차트',
        chartsState:[
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
        ]
    });
    
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