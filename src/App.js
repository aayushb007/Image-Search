import { useState,useEffect } from 'react';
import {LoadImage,SearchImage} from './components/api'; 
import './App.css';
import Image from './components/image';

function App() {
  const [query,setQuery]= useState([])
  const [searchQ,setSearch]= useState([])
  const data1 = LoadImage();
  
  //console.log(SearchImage(searchQ));
  const search=()=>{
    setSearch(query)
    }
  const searchData = SearchImage(query);
  console.log(searchData)
  return (
  
  
  <div className="App">
    
     <div className="searching">
       <input type="text" class="defaultTextBox advancedSearchTextBox" onChange={(event) => setQuery(event.target.value)}/>
        <intput type="hidden" onClick={search}/>     </div>
     <div className="contain"> 
     
       {searchQ ?searchData.map((img,key) =>(
         <Image src={img.urls.thumb} key={key} />
      )): data1.map((img,key) =>(
         <Image src={img.urls.thumb} key={key} />
      ))}
      </div>
    </div>
  
  );
}

export default App;
