"use client"
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from 'framer-motion'
const links = [
  {url: '/',title :"HOME"},
  {url: '/about',title :"ABOUT"},
  {url: '/portfolio',title :"PORTFOLIO"},
  {url: '/contact',title :"CONTACT"}
];


const Navbar = () => {
 
  const topVariants = {
    closed:{
      rotate:0 ,
    },
    opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)"
    }
  } 
  const centerVariants={
  closed:{
    opacity:1 ,
  },
  opened:{
    opacity:0,
    backgroundColor:"rgb(255,255,255)"
  }
}
const bottomVariants={
  closed:{
    rotate:0 ,
  },
  opened:{
    rotate:-45,
    backgroundColor:"rgb(255,255,255)"
  }
}
const listVaraints = {
  closed:{
    x:"100vw" ,
  },
  opened:{
    x: 0 ,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.2 ,
    } ,
  },
};
const lisItemVariants = {
  closed:{
    x:-10 , 
    opacity : 0 
  },
  opened:{
    x:0 , 
    opacity : 1,
  },
};
  const  [open, setopen] = useState(false)
  
var img = new Image();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl" >
        {/* {links} */}
      <div className="hidden md:flex gap-4">
        {links.map((link)=>(
        <NavLink link={link} key = {link.title}  />))}
      </div>
      {/* logo */}

      <div className="md:hidden lg:flex w-1/3 justify-center " >
         <Link 
           href="/" 
            className = 'text-sm bg-black rounded-md p-1 flex items-center justify-center' >
         
         <span className="text-white font-semibold mr-1   ">Umar</span>
         <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.AB</span>
         </Link>
      </div>
      <div className="hidden md:flex gap-5">
         <Link href="https://github.com/UMMMMz">
         <img src= "/github.png" alt ="" width={24} height = {24 } />
         </Link>
         <Link href="">
         <img src= "/linkedin.png" alt ="" width={24} height = {24 } />
         </Link>
         <Link href="https://www.instagram.com/umr0k__00__?igsh=MTFqdmE1bWlibHU3bA%3D%3D&utm_source=qr">
         <img src= "/instagram.png" alt ="" width={24} height = {24 } />
         </Link>
         <Link href="/">
         <img src= "/facebook.png" alt ="" width={24} height = {24 } />
         </Link>
         <Link href="/contact">
         <img src= "/gmail.png"  alt ="" width={24} height = {24 } />
         </Link>
         <Link href="//wa.me/03042746617">
         <img src= "/WhatsAppButtonGreenLarge.png"  alt ="" width={100} height = { 100 } />
         </Link>
      </div>
      
      {/* responsive menu */}
      <div className="md:hidden" >
        {/* menuBUtton */}
        <button 
        
        className="w-10 h-8  flex flex-col justify-between z-50 relative"
        onClick={()=> setopen((prev)=> !prev)}>
        
        <motion.div variants={topVariants} animate= {open ? "opened" : "closed"} className="origin-left w-10 h-1 bg-black rounded"></motion.div>
        <motion.div variants={centerVariants} animate= {open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
        <motion.div variants={bottomVariants} animate= {open ? "opened" : "closed"} className="origin-left w-10 h-1 bg-black rounded"></motion.div>
        </button>   {/* menuLIst */}
       {open  && ( 
        <motion.div variants={listVaraints} initial= "closed" animate = "opened" className=" z-40 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
         
         {links.map(link=>(
          <motion.div  variants={lisItemVariants}className="" key ={link.title}>
          <Link href={link.url} >{link.title}</Link>
          </motion.div>
         ))}
        </motion.div>
       )}
      </div> 

    </div>
  )
}

export default Navbar