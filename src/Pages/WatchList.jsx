import React, { useEffect, useState } from 'react'
import { getAllWantToWatch } from '../services/allAPI'
import SeriesCard from '../components/SeriesCard'
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
  return (
    <>
    <h1 className='mt-5 ms-5'>Series you've on your watch list!</h1>
    <div className="parallax p2">
     <SeriesCard />
    </div>
    </>
  )
}

export default WatchList