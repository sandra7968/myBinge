import React, { useState } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

function MyList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <h1 className='container  mt-5'>START BY ADDING SERIES DETAILS HERE!</h1>
      <div className='add container  mt-3 mb-5 d-flex justify-content-between align-items-center'>
        
      <Form style={{backgroundColor:'#ECBA94'}} className='border border-secondary rounded p-5 w-50  ms-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Title of the Series" 
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Genre" 
       />
      </Form.Group>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 text-black">
          <Form.Check onClick={handleShow}
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
          <Form.Check onClick={handleShow}
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
          <Form.Check
            inline
            label="Want To Watch"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
        
      ))}
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Language"
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Series Poster Image URL"  />
      </Form.Group>
      <Button>Add Entry</Button>
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
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
    </>
  )
}

export default MyList