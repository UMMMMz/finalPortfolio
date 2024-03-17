"use client"
import {motion } from "framer-motion"

const page = () => {
     const variants = {
        varirant1:{
            x:300
            ,y:400,opacity:0.5,
        },
        varirant2:{
            x:100
            ,y:-400,opacity:3.5,
        }
     }
    
  return (
    <div className=' h-full flex items-center justify-center'>
    <motion.div className='w-96 h-96 bg-red-950 rounded'

    initial = {{x:100}} 
    animate = "varirant2" 
    transition  ={{delay:2 , duration : 4 }}
    >  </motion.div>
    </div>

  )
}

export default page