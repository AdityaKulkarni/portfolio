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
  const initialPositions = useRef<Float32Array>();
  
  // Generate random positions for particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 25;     // x
      positions[i + 1] = (Math.random() - 0.5) * 1; // y
      positions[i + 2] = (Math.random() - 0.5) * 5;  // z
    }
    initialPositions.current = positions.slice(); // Store initial positions
    return positions;
  }, [count]);

  // Animation loop with wave motion
  useFrame((state) => {
    if (!points.current || !initialPositions.current) return;

    const positions = points.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < positions.length; i += 3) {
      const initialY = initialPositions.current[i + 1];
      
      // Create wave motion
      positions[i + 1] = initialY + Math.sin(time + initialPositions.current[i] * 0.5) * 1.5;
      
      // Add subtle horizontal movement
      positions[i] = initialPositions.current[i] + Math.cos(time + initialPositions.current[i + 1] * 0.5) * 0.5;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points} positions={particlePositions}>
      <PointMaterial
        size={0.2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#0D47A1"
        opacity={0.3}
        alphaTest={0.001}
      />
    </Points>
  );
};

export default Particles;