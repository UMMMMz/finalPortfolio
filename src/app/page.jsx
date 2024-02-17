"use client"
import Image from "next/image"
import {motion } from "framer-motion"

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      
   <div className=" lg:flex-row h-full  flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* {image container} */}
    <div className="h-1/2   lg:h-full lg:w-1/2 relative">
      <Image src ="/me.png" alt = "" fill className="  object-contain " /> 

    </div>
    {/* {textcontainer} */}
    <div className="h-1/2 lg:h-full lg:w-1/2"> 
    {/* title */}
    <h1 className="text-4xl md:text-6xl font-bold mt-1">Crafting Digital Experiences , Designing Tomorrow</h1>
    {/* desc */}
     <p className="md:text-xl mt-2">Welcome to my Digital Canvas , where innovation and creativity converge .
     With a keen eye for aesthetics and a mastery of code , My portfolio showcase a diverse collection of projects that reflect my commitmnet to excellence
     </p>
     <div className="w-full flex gap-4 mt-4">
      <button className="p-4 rounded-lg ring-1 ring-black  bg-black text-white" >View My Work</button>
      <button className="p-4 rounded-lg ring-1 ring-black " src = "">Contact Me</button>
     </div>
     
     </div>

  </div>
    </motion.div>
)};

export default Homepage;
