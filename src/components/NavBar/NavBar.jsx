import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import logoUrl from '../../utils/urls';

import { setDataChanged, setSearchData } from '../../modules/Reducer/reducer';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function BasicExample() {

  const dispatch = useDispatch();
  // fetch count state to count variable from redux
  const count = useSelector(state => state.product.count)

  // fetch searchData state to searchData variable from redux
  const searchData = useSelector(state => state.product.searchData)

  // set true the initial state of redux named as setDataSearch
  const search = () => {
    dispatch(setDataChanged(true))

  }

  // here we target the value of input filed and store it to redux store
  const searchDataHandler = (e) => {
    dispatch(setDataChanged(false))
    dispatch(setSearchData(e.target.value))

  }

  // state for opening and closing of sideBar
  const [show, setShow] = useState(false);

  // function for opening and closing of sideBar
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // set useNavigate for navigation
  const navigate = useNavigate();

  return (
    <>
      {/* Nav bar for desktop size screen */}
      <Navbar bg="white" expand="lg" sticky="top" className='laptop-nav'>
        <Container>

          <Navbar.Brand href="#home">
            <img
              src={logoUrl}
              width="140"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <div className="form-div">
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchData}
                  onChange={(e) => { searchDataHandler(e) }}

                />
                <Button style={{ backgroundColor: "#84c225", borderColor: "#84c225" }} onClick={search}><Search /></Button>
              </Form>
            </div>
            <Nav className="">
              <div className="d-flex basket-div">
                <Badge badgeContent={count && count} color="success" className="mt-2">
                  <ShoppingCartIcon color="action" />
                </Badge>
                <Nav.Link href="#home" width="auto"> My Basket</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* Navbar for tablets */}
      <div className='tab-nav'>
        <Navbar style={{ backgroundColor: "#84c225" }} expand="md">
          <Container>
            <MenuIcon className='tab-logo' onClick={handleShow} />

            <PersonOutlineOutlinedIcon className='tab-logo' />


            <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/53/6d/b1/536db144-76c6-d4d6-abfb-1e68ebad499f/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
              alt="bb" style={{ height: "30px", width: "30px" }} onClick={() => { navigate("/") }} />

            <RoomOutlinedIcon className='tab-logo' />

            <Badge badgeContent={count && count} sx={{
              "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#ff0000"
              }
            }}
              className="mt-2 ">
              <ShoppingCartIcon className='tab-logo' />
            </Badge>

          </Container>
        </Navbar>

        {/* Search input field for tabs */}
        <div id='tab-search'>
          <Form className="d-flex " style={{ backgroundColor: "#fff", borderTopColor: "#ced4da" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-input"
              aria-label="Search"
              value={searchData}
              onChange={(e) => { searchDataHandler(e) }}

            />
            <Button variant="white" onClick={search} className="form-btn"><Search /></Button>
          </Form>

          {/* sideBar contents  */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton style={{ color: '#fff', backgroundColor: "#a5cd39" }}>
              <Offcanvas.Title >HOME</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Shop By Category
            </Offcanvas.Body>
            <Offcanvas.Body>
              Offers
            </Offcanvas.Body>
            <Offcanvas.Body>
              BB Express
            </Offcanvas.Body>
          </Offcanvas>
        </div>

      </div>

    </>
  );
}

export default BasicExample;