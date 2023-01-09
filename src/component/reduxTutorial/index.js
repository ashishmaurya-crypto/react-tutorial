import React from 'react'
import { useState, useEffect } from 'react';
import './reduxtutorial.css'
import { useSelector, useDispatch } from 'react-redux'
import { decNumber, incNumber, addName } from '../../Redux/actions';

export default function Increment() {

  const myState = useSelector((state) => state.changeTheNumber);
  const myArray = useSelector((state) => state.changeName);
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const onChangeName = () => {
    dispatch(addName(name))
  }



  return (
    <>
      <div>
        <h1>increment/decrement</h1>
        <h4>using react and redux</h4>
      </div>
      <div>
        <a onClick={() => dispatch(decNumber())} className='border p-1' title='Decrement'><span>-</span></a>
        <input type='text' value={myState} name='quantity' />
        <a onClick={() => dispatch(incNumber(10))} className='border p-1' title='Increment'><span>+</span></a>
      </div>
      <div>
        <input value={name} type='text' onChange={(event) => setName( name => {
          const modifiedValue= event.target.value;
          console.log(modifiedValue);
          return modifiedValue;
        }   
        )} />
        <button onClick={onChangeName}>send</button>
      </div>
      <div>
        {myArray.map((data) =>
          <p className='border'>{data}</p>
        )}
      </div>

    </>
  )
}
