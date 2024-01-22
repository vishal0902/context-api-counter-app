import {createContext, useContext} from 'react'

export const CounterContext = createContext({count:Number, setCount: function(){}})
