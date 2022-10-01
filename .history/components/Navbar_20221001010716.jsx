import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [nav,setNav]=useState(0);
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
 
}

export default Navbar
