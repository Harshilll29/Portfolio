import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.7 : 0.75} 
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} 
      rotation={[-0.01, -0.2, -0.1]}
    />
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
        setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);



  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{position: [20, 3, 5], fov: 25}} 
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        {/* Very bright ambient light - illuminates everything evenly */}
        <ambientLight intensity={3} />
        
        {/* Strong directional lights from multiple angles */}
        <directionalLight position={[10, 10, 5]} intensity={4} />
        <directionalLight position={[-10, -10, -5]} intensity={3} />
        <directionalLight position={[0, 10, -10]} intensity={3} />
        
        {/* Bright point lights for highlights */}
        <pointLight position={[10, 5, 10]} intensity={5} />
        <pointLight position={[-10, 5, 10]} intensity={4} />
        <pointLight position={[0, 0, 20]} intensity={4} />
        
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
export { Computers };