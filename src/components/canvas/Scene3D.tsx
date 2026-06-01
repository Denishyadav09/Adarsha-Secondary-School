"use client";
import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({
  position,
  color,
  size,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distort: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0}
          metalness={0.2}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function SchoolOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.4, 4]} />
      <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.05} color="#38bdf8" transparent opacity={0.6} />
    </points>
  );
}

function RingElement() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[2.2, 0.02, 16, 100]} />
      <meshStandardMaterial color="#0ea5e9" transparent opacity={0.3} emissive="#0ea5e9" emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        onCreated={() => {}}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#7dd3fc" />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#fbbf24" />
          <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
          <ParticleField />
          <SchoolOrb />
          <RingElement />
          <FloatingSphere position={[-3, 1.5, -2]} color="#0ea5e9" size={0.4} speed={1.5} distort={0.4} />
          <FloatingSphere position={[3, -1, -1]} color="#f59e0b" size={0.3} speed={2} distort={0.5} />
          <FloatingSphere position={[2, 2, -3]} color="#8b5cf6" size={0.25} speed={1.8} distort={0.3} />
          <FloatingSphere position={[-2, -2, -2]} color="#10b981" size={0.2} speed={2.2} distort={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
