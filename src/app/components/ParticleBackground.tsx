'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// Dynamically import the Canvas component with no SSR
const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false,
});

// Dynamically import the Particles component
const Particles = dynamic(() => import('./Particles'), {
  ssr: false,
});


interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground = ({ className }: ParticleBackgroundProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: 'transparent' }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.5} />
          <Particles count={2000} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ParticleBackground;
