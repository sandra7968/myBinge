import React, { useState,useEffect } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'
import { uploadSeriesDetails,getAllSeries } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyList() {
  const [AllSeries, setAllSeries] = useState([])
  const [uploadSeriesServerResponse, setUploadSeriesServerResponse] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("")
  const [series, setSeries] = useState({
    name:"",genre:"",category:"",language:"",imageUrl:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 

  const handleUpload = async ()=>{
    const {name,genre,category,language,imageUrl} = series
    if(!name || !genre || !category || !language || !imageUrl){
      toast.warning("Please fill the form completely!")
    }else{
      // make api call uploadVideoDetails
      const response = await uploadSeriesDetails(series)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // success msg
        toast.success(`Series : '${response.data.name}' uploaded successfully!`)
        // set server response
        setUploadSeriesServerResponse(response.data)
        // reset series
        setSeries({
          name:"",genre:"",category:"",language:"",imageUrl:""
        })
      }else{
        console.log(response);
        toast.error("Cannot perform the action at the moment. Please try again later!")
      }
    }
  }
  const getAllUploadedSeries = async ()=>{
    // make api call
    const {data} = await getAllSeries()
    setAllSeries(data);
    
  }
  useEffect(()=>{
  getAllUploadedSeries()
  },[uploadSeriesServerResponse])

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
    setSeries({...series,category})
  }
  return (
    <>
    <h1 className='container  mt-5'>START BY ADDING SERIES DETAILS HERE!</h1>
      <div className='add container  mt-3 mb-5 d-flex justify-content-between align-items-center'>
        
      <Form style={{backgroundColor:'#ECBA94'}} className='border border-secondary rounded p-5 w-50  ms-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Title of the Series" onChange={(e)=>setSeries({...series,name:e.target.value})}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Genre" onChange={(e)=>setSeries({...series,genre:e.target.value})}
       />
      </Form.Group>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 text-black">
          <Form.Check oonChange={() => handleCategoryChange("Already Watched")}
            inline
            label="Already Watched"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          <Form.Check onChange={() => handleCategoryChange("Currently Watching")}
            inline
            label="Currently Watching"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          <Form.Check onChange={() => handleCategoryChange("Want To Watch")}
            inline
            label="Want To Watch"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
        
      ))}
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Language" onChange={(e)=>setSeries({...series,language:e.target.value})}
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Series Poster Image URL" onChange={(e)=>setSeries({...series,imageUrl:e.target.value})} />
      </Form.Group>
      <Button onClick={handleUpload}>Add Entry</Button>
          </Form>
          <div className=''>
            <img className='rounded' src="https://media3.giphy.com/media/LkT2g5bbsd5OEc9aCB/giphy.gif?cid=6c09b9526uzycp8xcbctj74fufl4pabcwzgm2vbwt9gwzdxz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
          </div>
      </div>
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
                { AllSeries?.length>0?
                 AllSeries?.map((item,index)=>(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.language}</td>
                  <td>{item?.category}</td>
                  <td></td>
                </tr>
                 )):
                 <p>NO ENTRY YET!</p>
                 }
              </tbody>
            </table>
          </div>
          <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default MyList