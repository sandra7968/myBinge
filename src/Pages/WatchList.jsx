import React, { useEffect, useState } from 'react'
import { deleteWantToWatch, getAllWantToWatch } from '../services/allAPI'
import './alreadywatched.css'
function WatchList() {
    const [WatchList,setWatchList] = useState([])
    const handleWatchList = async ()=>{
        // make api call
        const {data} = await getAllWantToWatch()
        setWatchList(data);
    }
    useEffect(()=>{
        handleWatchList()
    },[])
   const deleteWatch = async (id)=>{
    // make api call
    try{ await deleteWantToWatch(id)
    const newWatch = WatchList.filter((series)=>{
      return series.id !== id; 
    })
    // get remaining series
    setWatchList(newWatch)
  }catch(error){
    console.error('Error deleting the series', error)
  }
   }

  return (
    <>
    <h1 className='mt-5 ms-5'>Series you've on your watch list!</h1>
    <div className="parallax p2">
    { WatchList?.length>0?
        WatchList.map((item)=>(
          <div className="mycard">
          <div className="mycard-img">
              <img src={item.imageUrl} alt=""/>
          </div>
          <div className="mycard-content">
              <p>
                <li>Name : {item.title}</li>
              <li>Genre : {item.genre}</li>
              <li>Language : {item.language}</li>
              <button onClick={()=>deleteWatch(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </p>
              
          </div>
          </div>
        )): <p>Nothing to Display!</p>
         
                }
    </div>
    </>
  )
}

export default WatchList