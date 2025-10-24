import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas 
      frameloop="demand" 
      gl={{preserveDrawingBuffer: true}}
      style={{ margin: '20px' }} // Add margin to the canvas itself
    >
      <Suspense fallback={<CanvasLoader/>}>
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={4} />
        <directionalLight position={[-10, -10, -5]} intensity={3} />
        <directionalLight position={[0, 10, -10]} intensity={3} />
        <pointLight position={[10, 5, 10]} intensity={5} />
        <pointLight position={[-10, 5, 10]} intensity={4} />
        <pointLight position={[0, 0, 20]} intensity={4} />
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas