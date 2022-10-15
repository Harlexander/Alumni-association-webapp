import { Navbar, Button } from 'flowbite-react'
import React from 'react'
import {OutlineButton} from '../Button/Button'

const IndexNavbar = () => {
    const routes = [
        {
            title : "HOME",
            link  : "/"
        },
        {
            title : "ABOUT US",
            link  : "/about"
        },
        {
            title : "GALLERY",
            link  : "/gallery"
        },
        {
            title : "EVENTS",
            link  : "/events"
        },
        {
            title : "EXCOS",
            link  : "/excos"
        },
        {
            title : "CONTACT",
            link  : "/contact"
        },
    ]
  return (
    <Navbar
    fluid={true}
    style={{ position : "fixed", zIndex : "1", width : "100%", background : "white"}}
    rounded={true}
    >
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="/logo.jfif"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <img
            src="/logo-1.jfif"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
    </Navbar.Brand>
    <div className="flex md:order-2 my-3">
        <OutlineButton 
        title={"Sign In"}/>
        <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
        {
            routes.map(({title, link}, index) => (
                <Navbar.Link href={link} key={index} style={{ fontFamily : "Montserrat"}}>
                    {title}
                </Navbar.Link>
            ))
        }
    </Navbar.Collapse>
    </Navbar>
  )
}

export default IndexNavbar
