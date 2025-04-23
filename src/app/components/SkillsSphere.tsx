'use client';
import { FC, SVGProps, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { renderToString } from 'react-dom/server';

interface SkillsSphereProps {
  skills: {
    Icon: FC<SVGProps<SVGSVGElement>>;
    name: string;
    category: string;
  }[];
}

const SkillsSphere = ({ skills }: SkillsSphereProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.minDistance = 12;
    controls.maxDistance = 30;
    controls.rotateSpeed = 2;
    controls.zoomSpeed = 1;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.15;

    // Camera position
    camera.position.z = 20;

    // Create sprites for skills
    const sprites: THREE.Sprite[] = [];
    const radius = 10;

    // Convert SVG icons to data URLs and create sprites
    skills.forEach((skill, index) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Create a temporary div to render the icon
      const tempDiv = document.createElement('div');
      tempDiv.style.width = '64px';
      tempDiv.style.height = '64px';
      document.body.appendChild(tempDiv);
      
      // Render the React icon component to the temp div
      const IconComponent = skill.Icon;
      tempDiv.innerHTML = renderToString(<IconComponent />);
      
      // Convert the SVG to canvas
      const svgString = tempDiv.innerHTML;
      const img = new Image();
      img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
      
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 64, 64);
        const texture = new THREE.CanvasTexture(canvas);
        
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: 0.8
        });
        
        const sprite = new THREE.Sprite(spriteMaterial);
        
        // Position on sphere
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        sprite.position.setFromSphericalCoords(
          radius,
          phi,
          theta
        );
        
        sprite.scale.set(2, 2, 1);
        sprites.push(sprite);
        scene.add(sprite);
      };

      document.body.removeChild(tempDiv);
    });

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x60A5FA, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Rotate sprites to face camera
      sprites.forEach(sprite => {
        sprite.quaternion.copy(camera.quaternion);
      });

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      controls.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [skills]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[600px] relative"
    />
  );
};

export default SkillsSphere; 