import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Dmodel({ scrollY }) {
  const gltf = useGLTF('/models/scene.glb')
  const ref = useRef()

  // Animate rotation based on scroll
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY * 0.005 // Y-axis rotation based on scroll
    }
  })

  return <primitive object={gltf.scene} ref={ref} scale={1.1}  position={[0, 1.6, 0]}/>
}

const Model = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setScrollY(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Canvas 
    camera={{ position: [0, 1, 5], fov: 50 }}
     style={{
        height: '400px',
        position: 'absolute',
        top:'-30px',
        paddingBottom:'0px', 
        zIndex: 1,
      }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <Dmodel scrollY={scrollY} />
      </Suspense>
     
    </Canvas>
  )
}

export default Model
