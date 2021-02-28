import { useState,useEffect } from 'react';
import axios from 'axios';
const count=1;
//Zxbf99L-adI_fc0i0FYi4j2hXDUWcyDxE81JUfovaCE
function LoadImage() {
    const [state,setState]= useState([])
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos/?client_id=Zxbf99L-adI_fc0i0FYi4j2hXDUWcyDxE81JUfovaCE")
        .then((data)=>{
            setState(data.data);
        })

    },[count])
   
    return state;
    
}
function SearchImage(query) {
    const [state,setState]= useState([])
    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=Zxbf99L-adI_fc0i0FYi4j2hXDUWcyDxE81JUfovaCE")
        .then((data)=>{
            setState(data.data.results);
        })

    },[query])
   
    return state;
    
}

export {LoadImage,SearchImage}