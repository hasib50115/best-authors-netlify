import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Author from './components/author/author';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Author></Author>    

    </div>
  );
}



export default App;
