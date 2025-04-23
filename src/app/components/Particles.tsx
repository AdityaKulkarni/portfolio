// src/app/components/Particles.tsx
'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

interface ParticlesProps {
  count?: number;
}

const Particles = ({ count = 2000 }: ParticlesProps) => {
  const points = useRef<THREE.Points>(null!);
  
  // Generate random positions for particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;     // x
      positions[i + 1] = (Math.random() - 0.5) * 10; // y
      positions[i + 2] = (Math.random() - 0.5) * 10; // z
    }
    return positions;
  }, [count]);

  // Animation loop
  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.x += delta * 0.1;
    points.current.rotation.y += delta * 0.1;
  });

  return (
    <Points ref={points} positions={particlePositions}>
      <PointMaterial
        transparent
        vertexColors
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#80ffff" // Bright cyan color that will contrast well
        opacity={0.6}
      />
    </Points>
  );
};

export default Particles;