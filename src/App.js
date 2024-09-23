// SOurces
// [1]: https://dev.to/collegewap/how-to-render-array-of-components-in-react-fma

import { useState } from "react";

import logo from './logo.svg';
import './App.css';


import {
  MdOutlinePhone,
  MdOutlineFavorite,
  MdOutlineContactPhone,
} from "react-icons/md"

const menu = [
  {
    name: "Recents",
    icon: MdOutlinePhone,
  },
  {
    name: "Favorites",
    icon: MdOutlineFavorite,
  },
  {
    name: "Contacts",
    icon: MdOutlineContactPhone,
  },
]

const formField = []


function OldApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Item = ({ value }) => {
  return <li>{value}</li>
}

const SimpleListApp = () => {
  const items = Array.from({ length: 10 }).map((_, index) => (
    <Item key={index} value={index + 1} />
    ))
    return <ul>{items}</ul>
}  


function ListMeApp()
{
  return menu.map(item => {
    return (
      <li key={item.name}>
        <item.icon /> {item.name}
      </li>
    )
  })
}


const theMenu = [
  {
    name: "Recents",
    icon: MdOutlinePhone,
  },
  {
    name: "Favorites",
    icon: MdOutlineFavorite,
  },
  {
    name: "Contacts",
    icon: MdOutlineContactPhone,
  },
];

function AddComponentsToList()
{
  // [1]
  const [count, setCount] = useState(0);
  const [formArea, setFormArea] = useState(theMenu);

  let myMenu = [
    {
      name: "Recents",
      icon: MdOutlinePhone,
    },
    {
      name: "Favorites",
      icon: MdOutlineFavorite,
    },
    {
      name: "Contacts",
      icon: MdOutlineContactPhone,
    },
  ];


  let listIndex = Math.floor(Math.random()*10) % 3;

  return (
    <>
    <>
    <div><button className='formbuttons' onClick={() => setCount((count) => count + 1)}>count is {count}</button></div>
    <br/>
     </>
     {/* <button className='formbuttons' onClick={() => 
      setFormArea((formArea) => formArea.concat( {
        name: "Recents",
        icon: MdOutlinePhone,
      }))}>
        Multiple Choice
        </button> */}
     <button className='formbuttons' onClick={() => 
      // setFormArea((formArea) => formArea.concat( theMenu[1] ))}>
              setFormArea((formArea) => formArea.concat( theMenu[listIndex] ))}>
        Add menu option to list {listIndex }
        </button>
     <>{
    formArea.map(item => {
       return (
        <li key={item.name}>
          <item.icon /> {item.name}
          </li>
          )
        })}
      </>
    </>
  )
}


function App()
{
  return <AddComponentsToList/>
  // return <ListMeApp/>
  // return <SimpleListApp/>
  // return <OldApp/>
}


export default App;
