
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reload, addValue, selectCount } from "./store/counterSlice";
import { useState } from "react";
import { addNotes, selectNotes} from './store/noteSlice';


function App() {
  const [value, setValue] = useState('');
  const [note, setNote] = useState('');
  const count = useSelector(selectCount);
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  return (
    <>
      {count}
      <br />
      <button onClick={inc}>Increment +</button>
      <button onClick={dec}>Decrement -</button>
      <button onClick={() => dispatch(reload())}>Reset</button>
      <br />
      <button onClick={() => dispatch(addValue(value))}>Add Value</button>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <br />
      <button onClick={() => dispatch(addNotes(note))}>Add notes</button>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
      <ul>
        {notes.map((el, index) => (
          <li key={index}>
            {el}
            </li>
        ))}
      </ul>
    </>
  )
}

export default App
