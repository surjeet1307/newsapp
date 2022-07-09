import React, { useState } from 'react'
import Newscard from './Newscard'

let page=[]
function News() {
  let [val, setval] = useState(0)
  let [pageno,setpageno]=useState(1)
  console.log(pageno);
  let addpage=()=>{
    setpageno(pageno+1);
    page.push(pageno)
  }
  let deletepage=()=>{
    if(page.length>1){
       setpageno(pageno-1)
       page.pop()
    }
  }
  console.log(page);
  return (
    <div className='' style={{ width: '100%' }}>
      <h1 className='text-center mb-5'>Top Headlines</h1>
      <div className='d-flex justify-content-center mb-3'>
        <button type="button" className="btn btn-dark m-3" onClick={() => { setval(1) }}>Business</button>
        <button type="button" className="btn btn-dark m-3" onClick={() => { setval(2) }}>Sports</button>

      </div>
      <div className=''>
        <Newscard val={val} pageno={pageno}/>

      </div>
      <div className='d-flex justify-content-center mt-3'>
        <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={()=>deletepage()}>Previous</a></li>
            
            {
              page.map((e)=>(
                <li class="page-item"><a class="page-link" >{e}</a></li>

                
              ))
            }
            <li className="page-item"><a className="page-link" onClick={()=>addpage()}>Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default News