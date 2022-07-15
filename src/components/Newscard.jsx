import React, { useContext, useEffect, useState } from 'react';

function Newscard(props) {
    let [arr,setarr]=useState([])
    
    let [cat,setcat]=useState('')
    function valset(){
        if(props.val==2){
            setcat('business')
        }else{
            setcat('sports')
        }
    }
     console.log(props.val);
 useEffect(()=>{
    async function fetchdata(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=93fd33ad8f1a4f859fedd0ed8b49c7f1&page=${props.pageno}&pagesize=${props.postno}`
        let data= await fetch(url)
        let parsedata= await data.json()
        setarr(parsedata.articles)
       
    }
    fetchdata()
    valset()
 },[props.val,props.pageno,props.postno])
    return (
        <div className='d-flex flex-wrap justify-content-evenly '>
            {arr.map((sam) => (
                
                <div className="card m-1 p-2" style={{ width: 600, height: 350}}>
                    <img src={sam.urlToImage} className="card-img-top mx-auto" alt="not available" style={{width:150,height:150}} />
                    <div className="card-body">
                        <h5 className="card-title">{sam.title}</h5>
                        <p className="card-text">{sam.description}</p>
                        <a href={sam.url} target="_blank" className="btn btn-primary mx-auto">Read More</a>
                    </div>
                </div>
               
            ))}


        </div>
    )
}

export default Newscard
