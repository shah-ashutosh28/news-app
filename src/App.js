
// import './App.css';
import React, { Component } from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

export default function App()  {
  const pageSize = 9;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0);
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    

  }
 
    return (
      <div>
      <HashRouter>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path="/" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country="in" category='general'/>}/>
        <Route exact path="/business" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}   key='business'pageSize={pageSize} country="in" category='business'/>}/>
        <Route exact path="/entertainment" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country="in" category='entertainment'/>}/>
        <Route exact path="/general" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country="in" category='general'/>}/>
        <Route exact path="/sports" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={pageSize} country="in" category='sports'/>}/>
        <Route exact path="/science" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='science' pageSize={pageSize} country="in" category='science'/>}/>
        <Route exact path="/technology" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={pageSize} country="in" category='technology'/>}/>
        <Route exact path="/health" element={<News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey}   key='health'pageSize={pageSize} country="in" category='health'/>}/>
        </Routes>
        </HashRouter>
        
      </div>
    )
  
}
