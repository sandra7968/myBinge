import React, { useEffect, useState } from 'react'
import { getAllCurrentlyWatching } from '../services/allAPI'
import SeriesCard from '../components/SeriesCard'

function CurrentlyWatching() {
    const [watching, setWatching] = useState([])
    const handleWatching = async ()=>{
        // make api call
        const {data} = await getAllCurrentlyWatching()
        setWatching(data)
    }
    useEffect(()=>{
        handleWatching()
    },[])
  return (
    <>
    <h1 className='mt-5 ms-5'>Series you're currently watching!</h1>
    <div className="parallax p2">
        <SeriesCard />
    </div>
    </>
  )
}

export default CurrentlyWatching