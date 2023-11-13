import React, { useEffect, useState } from 'react'
import { getAllAlreadyWatched } from '../services/allAPI';
import SeriesCard from '../components/SeriesCard';

function AlreadyWatched() {
   const [watched, setWatched] = useState([])
   const handleWatched = async ()=>{
    // make api call
    const {data} = await getAllAlreadyWatched()
    setWatched(data);
    console.log(data);
   }

   useEffect(()=>{
    handleWatched()
   },[])

  return (
    <>
    <h1 className='mt-5 ms-5'>Series you've finished watching!</h1>
    <div className="parallax p2">
        <SeriesCard/>
    </div>
    </>
  )
}

export default AlreadyWatched