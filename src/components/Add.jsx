import React, { useState} from 'react'
import { Form, Modal,Button } from 'react-bootstrap'
import { uploadSeries } from '../services/allAPI';
import { toast } from 'react-toastify';
function Add() {
    const [show, setShow] = useState(false);
    const handleShow = () =>setShow(true)
    const handleClose = () => setShow(false);
    
    const [series,setSeries] = useState({
        id:"",title:"",genre:"",category:"",language:"",imageUrl:""
    })
    console.log(series);
    const handleUpload = async ()=>{
        const {title,genre,category,language,imageUrl} = series
        if(!title || !genre || !category || !language || !imageUrl){
            toast.warning("Please fill the form completely!")
        }else{
         // make api call
        const response = await uploadSeries(series)
        console.log(response);
        }
        

    }
  return (
    
    <>
        <Form style={{backgroundColor:'#ECBA94'}} className='border border-secondary rounded p-5 w-50  ms-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Title of the Series" onChange={(e)=>setSeries({...series,title:e.target.value})}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Genre" onChange={(e)=>setSeries({...series,genre:e.target.value})}
       />
      </Form.Group>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 text-black">
          <Form.Check onChange={(e)=>setSeries({...series,category:"Already Watched"})}
            inline 
            value="Already Watched"
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
          <Form.Check onChange={(e)=>setSeries({...series,category:"Currently Watching"})}
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
          <Form.Check  onChange={(e)=>setSeries({...series,category:"Want To Watch"})}
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
        <Form.Control type="text" placeholder="Enter Series Poster Image URL" onChange={(e)=>setSeries({...series,imageUrl:e.target.value})}/>
      </Form.Group>
      <Button onClick={handleUpload} >Add Entry</Button>
          </Form>
    </>
  )
}

export default Add