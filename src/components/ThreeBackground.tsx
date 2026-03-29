/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function NetworkGraph() {
  const { viewport, mouse } = useThree();
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 150;
  
  // Create random points with velocities
  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 4
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002
        ),
      });
    }
    return temp;
  });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    return pos;
  }, [count]);

  useFrame((state) => {
    // Update particle positions
    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      if (Math.abs(p.position.x) > 6) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 6) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 2) p.velocity.z *= -1;

      // Mouse attraction
      const mousePos = new THREE.Vector3(mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 0);
      const dist = p.position.distanceTo(mousePos);
      if (dist < 3) {
        const dir = new THREE.Vector3().subVectors(mousePos, p.position).normalize();
        p.position.add(dir.multiplyScalar(0.015 * (1 - dist / 3)));
      }

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;
    });

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouse.y * 0.1, 0.05);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, mouse.x * 0.1, 0.05);
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
      <Connections particles={particles} />
    </group>
  );
}

function Connections({ particles }: { particles: any[] }) {
  const lineRef = useRef<THREE.LineSegments>(null!);
  const maxDist = 2.0;
  
  useFrame(() => {
    const linePositions = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < maxDist) {
          linePositions.push(
            particles[i].position.x, particles[i].position.y, particles[i].position.z,
            particles[j].position.x, particles[j].position.y, particles[j].position.z
          );
        }
      }
    }
    lineRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <lineBasicMaterial color="#4338ca" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <NetworkGraph />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
