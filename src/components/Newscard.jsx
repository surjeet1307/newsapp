import React from 'react'
import sample from './sample.json'
function Newscard() {
    let arr = sample.articles
    return (
        <div className='d-flex flex-wrap justify-content-evenly '>
            {arr.map((sam) => (
                
                <div className="card m-1 p-2" style={{ width: 600, height: 350}}>
                    <img src={sam.urlToImage} className="card-img-top mx-auto" alt="Loading" style={{width:150,height:150}} />
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