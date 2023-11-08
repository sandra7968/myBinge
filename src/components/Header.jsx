import React from 'react'
import { Navbar, Container , Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="/">
        <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-compact-disc fa-spin fa-lg"></i>{" "}
             myBinge
        </Link>
      </Navbar.Brand>
      <Nav  defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link className='text-light' href="/mylist">My List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-light' href="/alreadywatched" eventKey="link-1">Already Watched</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-light' href="/currentlywatching">Currently Watching</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-light' href="/watchlist">Watch-List</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default Header