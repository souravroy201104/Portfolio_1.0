// src/components/three/HeroOrb.tsx
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Ring, Stars } from "@react-three/drei";
import * as THREE from "three";

function DistortOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core distort sphere */}
      <Sphere ref={meshRef} args={[1.4, 100, 100]}>
        <MeshDistortMaterial
          color="#6c63ff"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#3d35b3"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.0, 32, 32]}>
        <meshStandardMaterial
          color="#a78bfa"
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>

      {/* Orbiting rings */}
      {[1.8, 2.3, 2.9].map((r, i) => (
        <OrbitRing key={i} radius={r} speed={0.4 + i * 0.15} tiltX={i * 0.5} tiltZ={i * 0.3} />
      ))}
    </group>
  );
}

function OrbitRing({
  radius,
  speed,
  tiltX,
  tiltZ,
}: {
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });

  return (
    <Ring
      ref={ref}
      args={[radius - 0.015, radius, 128]}
      rotation={[tiltX + Math.PI / 2, 0, tiltZ]}
    >
      <meshBasicMaterial color="#6c63ff" transparent opacity={0.25} side={THREE.DoubleSide} />
    </Ring>
  );
}

function FloatingParticles() {
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a78bfa" transparent opacity={0.6} />
    </points>
  );
}

export default function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#a78bfa" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#6c63ff" />
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <FloatingParticles />
      <DistortOrb />
    </Canvas>
  );
}
