import {useState} from 'react';
import FilmsList from './components/filmsList';


export default function App(props) {

const [list, setList] = useState(["ready", "set", "go"]);
const [text, setText] = useState([""]);


function onSubmit(event){
  event.preventDefault();
  setList([...list, text]);
}

  
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={onSubmit}>
        <label>Enter text</label>
        <input value={text} onChange={(event)=> 
        setText(event.target.value)} ></input>
        <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item , index) => {
          return <li key= {item + index}>{item}</li>
          })}
          </ul>
          <FilmsList/>
      </div>
    );
  }



