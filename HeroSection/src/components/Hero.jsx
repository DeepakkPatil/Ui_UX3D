import { motion } from "framer-motion";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas ,useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";   // for canvas usage
import { styles } from "../styles";


import ComputersCanvas  from './canvas/Computers'


// function MyRotatingBox() {
//   const myMesh = useRef() ;

//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myMesh.current.rotation.x = a;
//   });

//   return (
//     <mesh ref={myMesh} 
//      userData={{ hello: 'world' }}>
//       <boxBufferGeometry  args={[5, 1, 5]}/>
//       <meshPhongMaterial color="royalblue" />
//     </mesh>
//   );
// }
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
         

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Dee</span>
          </h2>
        <Canvas  style={{ position: 'absolute',width:100 ,height:100}}>

        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>








        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div // using framer motion to create y axis (it is just a circle it acts as a div )
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;