import React, { useState, useContext, useEffect } from 'react'
import './navbar.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { GlobalContext } from '../../context/context'
import { auth, signOut } from '../../routes/fire'


export default function Navigbar() {



    const { state, dispatch } = useContext(GlobalContext);

    const [role, setRole] = useState('')
    const [name, setName] = useState('')

    const SignOut = async () => {
        try {
            await signOut(auth)
            dispatch({ type: "LOGOUT_USER" });
            setName('')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setRole(state.authUser.role)
        setName(state.authUser.name)
    }, [])


    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" id='Navbar'>
            {role === 'restaurant' ?
                <>
                    <Container>
                        <Navbar.Brand href="/res-home">{name}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/add-dish">Add Dish</Nav.Link>
                                <Nav.Link href="/res-orders">Orders</Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="dark" id='button' onClick={() => { SignOut() }}>Log Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </> : role === 'customer' ?
                    <>
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/cus-home">All Restaurants</Nav.Link>
                                    <Nav.Link href="cus-orders">My Orders</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Navbar.Brand>{name}</Navbar.Brand>
                                    <Button variant="dark" id='button' onClick={() => { SignOut() }}>Log Out</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </> : null
            }

        </Navbar >
    )
}