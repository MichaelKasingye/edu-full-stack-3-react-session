import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/counterReducer'

export default function ReduxPage() {
  // const count = useSelector((state) => state.counter.count)
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>increament</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>increament by 50</button>

    </div>
  )
}
