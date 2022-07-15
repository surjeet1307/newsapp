import React, { useState } from 'react'
import Newscard from './Newscard'

let page = []
function News() {
  let [val, setval] = useState(0)
  let [pageno, setpageno] = useState(1)
  let [postno,setpostno]=useState(10)
  console.log(pageno);
  let addpage = () => {
    setpageno(pageno + 1);
    page.push(pageno)
  }
  let deletepage = () => {
    if (page.length > 1) {
      setpageno(pageno - 1)
      page.pop()
    }
  }
  console.log(postno);
  return (
    <div className='' style={{ width: '100%' }}>
      <h1 className='text-center mb-5'>Top Headlines</h1>
      <div className='w-50 m-auto'>
        <h3 className='text-center'>News Per Page</h3>
        <input type="range" className="form-range" min="1" max="10" value={postno} onChange={(e)=>{setpostno(e.target.value)}} id="customRange2"/>
      </div>
      <div className='d-flex justify-content-center mb-3'>
        <button type="button" className="btn btn-dark m-3" onClick={() => { setval(1) }}>Business</button>
        <button type="button" className="btn btn-dark m-3" onClick={() => { setval(2) }}>Sports</button>

      </div>
      <div className=''>
        <Newscard val={val} pageno={pageno} postno={postno}/>

      </div>
      <div className='d-flex justify-content-center mt-3'>
        <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={() => deletepage()}>Previous</a></li>

            {
              page.map((e) => (
                <li className="page-item"><a className="page-link" >{e}</a></li>


              ))
            }
            <li className="page-item"><a className="page-link" onClick={() => addpage()}>Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default News