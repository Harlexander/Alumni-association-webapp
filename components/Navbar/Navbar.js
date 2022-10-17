import { Navbar, Button, Dropdown } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'
import {OutlineButton} from '../Button/Button'

const IndexNavbar = () => {
    const routes = [
        {
            title : "HOME",
            link  : "#"
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
            sublinks : [{ 
                title : "Annual General Conference",
                link : "/"
            },
            {
                title : "2022 General Reunion",
                link : "/"
            }]
        },
        {
            title : "EXCOS",
            sublinks : [
            { 
                title : "National Executives",
                link : "/"
            },
            {
                title : "Board of Trustees",
                link : "/"
            },
            {
                title : "Set Representatives",
                link : "/"
            },
        ]
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
            routes.map((item, index) => {
            if(item.title === "EXCOS" || item.title === "EVENTS"){
                    return(
                        <NavDropdown 
                        key={index}
                            label={
                            <Navbar.Link href={item.link}  style={{ fontFamily : "Montserrat"}}>
                                {item.title}
                            </Navbar.Link>} 
                            sublinks={item.sublinks}/>
                    )
                }else{
                    return(
                        
                        <Navbar.Link href={item.link} key={index} style={{ fontFamily : "Montserrat"}}>
                              {item.title}
                        </Navbar.Link>
                    )
                }
            })
        }
    </Navbar.Collapse>
    </Navbar>
  )
}

const NavDropdown = ({label, sublinks}) => {
    return (
        <Dropdown
      arrowIcon={false}
      inline={true}
      label={label}
      style={{ borderRadius : 0, fontFamily : "Montserrat"}}
    >
        {
            sublinks.map(({title, link}, index )=> (
               <Link href={link} key={index}>
                    <Dropdown.Item
                    style={{ fontFamily : "Montserrat"}}>
                        {title}
                    </Dropdown.Item>               
               </Link> 

            ))
        }
    </Dropdown>
    )
}

export default IndexNavbar
