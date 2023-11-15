import React, { useEffect, useState } from 'react'
import { deleteCurrentlyWatching,  getAllCurrentlyWatching, addToAlreadyWatched, getAllAlreadyWatched } from '../services/allAPI'
import './alreadywatched.css'
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

    const deleteWatching = async (id)=>{
      // make api call
      try{ await deleteCurrentlyWatching(id)
        const newWatching = watching.filter((series)=>{
          return series.id !== id;
        })
        // get remaining series
        setWatching(newWatching)
      }catch(error){
        console.log('Error deleting the series', error);
      }
    }

    const handleUpdate = async (id) => {
      try {
        const movetoAW = watching.find((series) => series.id === id);
  
        if (movetoAW) {
          // Update the category to "Already Watched"
          movetoAW.category = 'Already Watched';
          movetoAW.id = id-100
  
          // Make the API call to add to Already Watched
          console.log(movetoAW);
          await addToAlreadyWatched(movetoAW);
          deleteWatching(id)
        }
      } catch (error) {
        console.error('Error updating series:', error);
        // Handle errors as needed
      }
    };
    
    
    
    
  return (
    <>
    <h1 className='mt-5 ms-5'>Series you're currently watching!</h1>
    <div className="parallax p2">
    { watching?.length>0?
        watching.map((item)=>(
          <div className="mycard">
          <div className="mycard-img">
              <img src={item.imageUrl} alt=""/>
          </div>
          <div className="mycard-content">
              <p>
                <li>Name : {item.title}</li>
              <li>Genre : {item.genre}</li>
              <li>Language : {item.language}</li>
              <button onClick={()=>deleteWatching(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              <button className='btn' onClick={()=>handleUpdate(item?.id)}><i className="fa-solid fa-circle-check"></i></button>
              </p>
              
          </div>
          </div>
        )): <p>Nothing to Display!</p>
         
                }
    </div>
    </>
  )
}

export default CurrentlyWatching