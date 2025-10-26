// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

// import CanvasLoader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
//         <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas = ({icon}) => {
//   return (
//     <Canvas 
//       frameloop="demand" 
//       gl={{ preserveDrawingBuffer: true, alpha: true }}
//     style={{ background: "transparent" }}
//     camera={{ fov: 45, position: [0, 0, 6] }}
//   >
//       <Suspense fallback={<CanvasLoader/>}>
//         <ambientLight intensity={3} />
//         <directionalLight position={[10, 10, 5]} intensity={4} />
//         <directionalLight position={[-10, -10, -5]} intensity={3} />
//         <directionalLight position={[0, 10, -10]} intensity={3} />
//         <pointLight position={[10, 5, 10]} intensity={5} />
//         <pointLight position={[-10, 5, 10]} intensity={4} />
//         <pointLight position={[0, 0, 20]} intensity={4} />
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon}/>
//       </Suspense>
//       <Preload all/>
//     </Canvas>
//   )
// }

// export default BallCanvas


import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture, Html } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const isUrl = typeof props.imgUrl === 'string'
  const [decal] = isUrl ? useTexture([props.imgUrl]) : []

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.7}
        />

        {isUrl ? (
          <Decal
            map={decal}
            position={[0, 0, 1.02]}
            rotation={[0, 0, 0]}
            flatShading
            scale={0.9}
          />
        ) : (
          <Html
            center
            occlude
            position={[0, 0, 1.05]}
            style={{
              width: '64%',
              height: '64%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none'
            }}
          >
            {React.isValidElement(props.imgUrl) ? props.imgUrl : <div>{props.imgUrl}</div>}
          </Html>
        )}
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas 
      frameloop="demand" 
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      camera={{ fov: 45, position: [0, 0, 6] }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} />
        <directionalLight position={[-10, -10, -5]} intensity={0.6} />
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas