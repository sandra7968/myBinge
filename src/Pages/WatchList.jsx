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
    <h6 style={{marginLeft:'50px', fontWeight:'bold', marginTop:'-10px'}}>( Hover for Series Details! )</h6>

    <div className="parallax p2">
    { WatchList?.length>0?
        WatchList.map((item)=>(
          <div className="mycard">
          <div className="mycard-img">
              <img src={item.imageUrl} alt=""/>
          </div>
          <div className="mycard-content">
              <p>
                <h6>Name :<span> {item.title}</span></h6>
              <h6>Genre : <span>{item.genre}</span></h6>
              <h6>Language : <span>{item.language}</span></h6>
              <h6>Plot :<span> {item.plot}</span></h6>
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