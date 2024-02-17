"use client"
import Brain from "@/components/brain"
import {motion, useInView, useScroll} from "framer-motion"
import { useRef ,useEffect } from "react"
const AboutPage = () => {
  

  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container:containerRef})
  const skillref = useRef();
  const isskillRefview = useInView(skillref , {margin:'-100px'})

  return (
    <motion.div className="h-full " initial={{y:"200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
     {/* {container}*/}
      <div className="h-full lg:flex">
        {/* textcontainer */}
        <div className="px-4 sm:px-0 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:p-0 xl:gap-64 w-2/3 xl:1/2">
         
         {/* biography */}
            <div  className="flex flex-col gap-12  justify-center"> 
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">Currently a 4th year student pursuing a Bachelors in BSSE at Karachi University Department of UBIT . Throughout my academic journey, I have been exposed to various programming languages, software development methodologies, and problem-solving techniques. Additionally, I have successfully completed projects in [Relevant Technologies or Languages], which have helped me develop a solid foundation in software engineering.
            </p>
            <span className="italic">With a passion for programming and a dedication to expanding my skills in a real-world setting.</span>
            {/* bio sign */}
            <div className=" self-end gradient-to-b from-custom-beige to-custom-red-100 rounded-full">
         
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="500.000000pt" height="150.000000pt" viewBox="0 0 500.000000 150.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1278 953 c12 -2 22 -7 22 -9 0 -18 -41 -74 -125 -169 -104 -119
-128 -155 -119 -179 7 -18 51 -21 74 -6 12 8 9 10 -12 10 -57 0 -32 47 105
200 75 83 110 136 101 152 -3 4 -20 7 -37 7 -24 -1 -26 -3 -9 -6z"/>
<path d="M1439 892 c-103 -109 -225 -247 -212 -239 8 5 6 -4 -4 -21 -17 -29
-12 -69 7 -57 6 4 8 10 5 15 -3 5 1 23 10 40 20 39 148 190 219 260 31 30 56
58 56 62 0 19 -21 4 -81 -60z"/>
<path d="M2537 949 c-9 -6 -16 -13 -13 -17 2 -4 -31 -45 -73 -91 -72 -78 -80
-83 -107 -77 l-29 8 45 40 45 40 -49 -36 c-31 -23 -60 -36 -80 -36 -17 0 -38
-5 -46 -10 -12 -7 -8 -10 15 -10 29 0 26 -3 -55 -79 -47 -43 -83 -81 -80 -84
3 -3 44 30 92 74 67 61 93 79 115 79 43 0 45 -8 14 -54 -16 -22 -31 -51 -35
-63 -6 -19 -4 -23 16 -23 13 0 33 7 44 16 18 14 18 15 -3 4 -35 -16 -30 17 10
72 44 63 198 238 209 238 4 0 8 5 8 10 0 13 -20 12 -43 -1z"/>
<path d="M2648 902 c-77 -62 -248 -236 -248 -253 0 -6 -4 -8 -8 -5 -5 3 -6 -8
-4 -25 4 -24 9 -29 31 -29 15 0 36 7 47 16 18 14 18 15 -4 4 -25 -12 -52 -7
-52 9 0 18 91 130 111 136 10 4 17 10 15 14 -8 13 145 151 166 151 7 0 -8 -21
-32 -47 l-45 -48 43 40 c45 41 80 95 63 95 -5 0 -43 -26 -83 -58z"/>
<path d="M2943 892 c-104 -93 -195 -189 -221 -233 -27 -45 -27 -49 -1 -49 14
0 19 5 16 14 -9 23 40 82 173 209 135 129 158 169 33 59z"/>
<path d="M3254 877 c-113 -95 -224 -218 -224 -247 0 -15 7 -20 27 -20 24 0 25
1 9 13 -16 12 -15 15 14 55 16 23 35 42 40 42 6 0 10 6 10 14 0 7 37 46 83 86
107 96 109 98 127 102 23 5 42 38 21 38 -4 0 -53 -37 -107 -83z"/>
<path d="M3745 928 c-75 -59 -256 -243 -272 -276 -24 -50 -7 -51 40 -2 23 24
29 33 13 20 l-29 -25 19 33 c24 42 89 103 100 94 4 -4 4 -2 1 5 -9 14 133 145
149 139 14 -5 34 13 34 31 0 20 -12 16 -55 -19z"/>
<path d="M1213 929 c-34 -21 -68 -67 -59 -77 4 -3 14 5 23 19 10 13 30 36 46
52 35 32 33 34 -10 6z"/>
<path d="M3407 911 c-92 -70 -254 -238 -262 -273 -7 -26 -5 -28 21 -28 22 0
25 3 15 9 -23 15 -2 48 86 141 83 87 140 137 164 142 15 3 29 18 29 31 0 13
-14 7 -53 -22z"/>
<path d="M2419 863 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path d="M3689 833 l-24 -28 28 24 c15 14 27 26 27 28 0 8 -8 1 -31 -24z"/>
<path d="M2599 813 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
<path d="M3229 803 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path d="M1975 788 c-9 -14 -11 -24 -5 -26 20 -7 9 -34 -35 -81 -52 -56 -56
-71 -17 -70 15 0 21 3 15 6 -20 8 -16 19 25 63 31 35 37 48 37 85 0 25 -1 45
-2 45 -1 0 -9 -10 -18 -22z"/>
<path d="M3319 783 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17
-17z"/>
<path d="M2760 780 c-11 -8 -7 -9 15 -4 37 8 45 14 19 14 -10 0 -26 -5 -34
-10z"/>
<path d="M1498 759 c-21 -11 -38 -22 -38 -25 0 -2 9 0 19 6 24 12 41 13 41 1
0 -5 -22 -34 -50 -64 -27 -30 -50 -58 -50 -62 0 -16 64 41 100 89 59 77 52 94
-22 55z"/>
<path d="M1828 773 c18 -4 22 -9 17 -26 -6 -21 -6 -21 9 -3 20 24 12 36 -22
35 -24 -2 -25 -2 -4 -6z"/>
<path d="M3377 754 c-57 -30 -147 -113 -147 -137 0 -19 26 -22 50 -7 13 8 12
10 -2 10 -29 0 -21 14 35 67 80 76 156 109 144 62 -4 -16 -3 -18 9 -8 8 6 14
18 14 25 0 22 -49 16 -103 -12z"/>
<path d="M1750 749 c-71 -43 -130 -100 -130 -125 0 -26 22 -32 50 -14 13 8 12
10 -2 10 -39 0 -6 46 74 106 63 46 67 59 8 23z"/>
<path d="M2693 743 c-69 -47 -102 -80 -109 -107 -5 -21 -3 -26 12 -26 11 0 26
5 34 10 13 8 12 10 -2 10 -10 0 -18 4 -18 10 0 12 66 79 105 108 44 31 25 27
-22 -5z"/>
<path d="M2871 706 c-53 -57 -66 -96 -32 -96 11 0 23 4 26 10 3 6 -1 7 -9 4
-33 -13 -15 28 35 82 29 30 47 54 42 54 -6 0 -33 -24 -62 -54z"/>
<path d="M3613 740 c-18 -11 -33 -22 -33 -25 0 -3 11 2 26 11 44 29 50 3 9
-45 -41 -50 -45 -71 -12 -71 16 0 19 3 8 9 -11 7 -5 19 28 58 63 75 49 109
-26 63z"/>
<path d="M1357 684 c-32 -37 -56 -69 -53 -71 6 -7 106 79 106 91 0 5 7 18 17
28 13 14 13 18 2 18 -8 0 -40 -30 -72 -66z"/>
<path d="M1593 740 c-13 -5 -23 -12 -23 -15 0 -4 4 -4 9 0 25 15 16 -15 -15
-54 -41 -53 -42 -61 -6 -61 19 0 23 3 13 9 -16 10 -5 35 33 70 14 14 26 33 26
43 0 20 -5 21 -37 8z"/>
<path d="M2525 719 c-14 -18 -25 -41 -23 -53 1 -12 -1 -27 -6 -34 -6 -11 -4
-11 10 -2 24 15 84 93 84 108 0 23 -39 11 -65 -19z m45 6 c0 -8 -13 -29 -30
-47 -26 -30 -29 -31 -30 -12 0 23 35 74 51 74 5 0 9 -7 9 -15z"/>
<path d="M2968 705 c-26 -23 -50 -54 -54 -69 -6 -24 -4 -26 22 -25 17 1 22 3
12 6 -26 7 -23 16 28 72 26 29 45 53 43 55 -2 2 -25 -15 -51 -39z"/>
<path d="M1775 687 c-22 -18 -41 -42 -43 -55 -3 -18 1 -22 25 -21 15 0 22 3
16 6 -21 8 -15 25 24 65 45 46 33 48 -22 5z"/>
<path d="M3395 689 c-36 -27 -52 -48 -54 -71 -1 -5 11 -8 27 -7 15 0 21 3 15
6 -21 8 -15 24 24 59 47 43 40 51 -12 13z"/>
<path d="M2760 630 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z"/>
</g>
</svg>





            </div>
            </div>
        {/* skills */}
            <div  className="flex flex-col gap-12  justify-center" ref={skillref}> 
            <motion.h1 initial={{x:"-300px"}} animate={ isskillRefview ? {x:0} : {}} transition={{delay:0.3}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* skill list */}
             <div className="flex gap-4  flex-wrap">
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">JavaScript</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">React.Js</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Next.Js</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Tailwind CSS</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white"> MongoDB</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Node.Js</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">GraphQL</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Express.JS</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Three.Js</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">React Three Fiber</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">WebGL</div>
              <div className="rounded p-2  cursor-pointer text-sm  bg-black text-white hover:text-black hover:bg-white">Framer Motion</div>
              
            </div>
            {/* scroll svg */}
            </div>
        {/* experience */}
            <div  className="flex flex-col gap-12  justify-center pb-48">
              <motion.h1 initial={{x:"-300px"}} animate={ isskillRefview ? {x:0} : {}} transition={{delay:0.3}}  className=" font-bold text-2xl">EXPERIENCE</motion.h1>
              {/* experience list */}
              <div className="">
              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-yellow-800 text-white font-semibold rounded-b-lg rounde-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-yellow-950 cursor-pointer hover:text-black hover:text-lg">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-yellow-950">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/3  " >
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-white bg-custom-red -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
             {/* experiencelist2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/3  " >
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-white bg-custom-red -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-yellow-800 text-white font-semibold rounded-b-lg rounde-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-yellow-950 cursor-pointer hover:text-black hover:text-lg">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-yellow-950">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
             {/* experiencelist3 */}
             <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-yellow-800 text-white font-semibold rounded-b-lg rounde-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div  className="p-3 text-sm italic text-yellow-950 cursor-pointer hover:text-black hover:text-lg">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm text-yellow-950">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/3  " >
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-white bg-custom-red -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
             
         
            
              </div>
            
            
            </div>

          </div>
        {/* svgcontainer */}
        <div className="hidden lg:block w-1/3 top-0 sticky z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>


    </motion.div>
  )
}

export default AboutPage