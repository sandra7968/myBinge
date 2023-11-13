import React, { useEffect, useState } from 'react'
import { deleteASeries, getAllSeries } from '../services/allAPI'

function List() {
    const [list,setList] = useState([])
    const handleList = async ()=>{
        // make api call
        const {data} = await getAllSeries()
        setList(data)
    }

    useEffect(()=>{
        handleList()
    },[])

    const handleDeleteList = async (id)=>{
        // make api call
     try {  await deleteASeries(id)
       const newList = list.filter((series)=>{
        return series.id !== id;
       })
       
        // get remaining series
        setList(newList)
    }catch(error){
        console.error('Error deleting series', error);
    }
        
    }
  return (
    <>
        <div className="entries container mt-5">
            <h1>Your List: </h1>
            <table className='table mt-5 mb-5 container'>
              <thead>
                <tr>
                <th>#</th>
                <th>Series Title</th>
                <th>Language</th>
                <th>Category</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { list?.length>0?
                 list?.map((item,index)=>(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.language}</td>
                  <td>{item?.category}</td>
                  <td> <button onClick={()=>handleDeleteList(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                </tr>
                 )):
                 <p>NO ENTRY YET!</p>
                 }
              </tbody>
            </table>
          </div>
    </>
  )
}

export default List