import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

function Dmodel({ scrollY, isMobile }) {
  const gltf = useGLTF('/models/scene.glb')
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY * 0.005
    }
  })

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      scale={isMobile ? 0.6 : 0.8}
      position={isMobile ? [0, -1, 0] : [0, -0.6, 0]}
    />
  )
}

const Model = () => {
  const [scrollY, setScrollY] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 768 }) // Tailwind md: breakpoint

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setScrollY(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="h-[260px] sm:h-[300px] md:h-[360px] w-full absolute top-[-30px] z-[1] rounded-[30px] overflow-hidden "
    >
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <Dmodel scrollY={scrollY} isMobile={isMobile} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default Model
