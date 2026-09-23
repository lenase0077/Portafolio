import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { material } from '../materials.js';
import { rand } from '../../shared/utils/math.js';
import { Steam } from '../effects/Particles.jsx';

/** Desk with laptop, lamp, mug, notebook, book stack. */
export function Desk() {
  const woodLight = material('woodLight');
  const woodMid = material('woodMid');
  const woodDark = material('woodDark');
  const brass = material('brass');
  const lampGlass = material('lampGlass');
  const mug = material('mug');
  const coffee = material('coffee');
  const screen = material('screen');
  const leather = material('leather');
  const paper = material('paper');
  const bookB = material('bookB');
  const bookD = material('bookD');
  const bookE = material('bookE');

  const lampRef = useRef();
  const steamRef = useRef();
  const steam = useMemo(() => {
    const n = 18;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = 0.82 + (rand(i + 6) - 0.5) * 0.06;
      pos[i * 3 + 1] = 1.1 + rand(i + 7) * 0.2;
      pos[i * 3 + 2] = 0.42 + (rand(i + 8) - 0.5) * 0.04;
    }
    return { pos, n };
  }, []);

  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime;
    if (lampRef.current) {
      lampRef.current.material.emissiveIntensity = 1.5 + Math.sin(t * 0.7) * 0.1;
    }
    if (steamRef.current) {
      const p = steamRef.current.geometry.attributes.position;
      for (let i = 0; i < steam.n; i++) {
        let y = p.getY(i) + dt * 0.18;
        if (y > 1.55) {
          y = 1.1;
          p.setX(i, 0.82 + (rand(i + t) - 0.5) * 0.05);
          p.setZ(i, 0.42 + (rand(i + 9 + t) - 0.5) * 0.04);
        }
        p.setY(i, y);
        p.setX(i, p.getX(i) + Math.sin(t + i) * 0.0008);
      }
      p.needsUpdate = true;
    }
  });

  return (
    <group position={[0.5, 0, -1.3]}>
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow material={woodLight}>
        <boxGeometry args={[3.4, 0.12, 1.55]} />
      </mesh>
      {[
        [-1.5, 0.45, 0.58],
        [1.5, 0.45, 0.58],
        [-1.5, 0.45, -0.58],
        [1.5, 0.45, -0.58],
      ].map((p, i) => (
        <mesh key={i} position={p} castShadow material={woodMid}>
          <boxGeometry args={[0.12, 0.9, 0.12]} />
        </mesh>
      ))}
      <mesh position={[0, 0.68, 0.74]} material={woodMid}>
        <boxGeometry args={[1.3, 0.28, 0.05]} />
      </mesh>
      <mesh position={[0, 0.68, 0.78]} material={brass}>
        <boxGeometry args={[0.18, 0.03, 0.02]} />
      </mesh>

      {/* Laptop */}
      <group position={[-0.4, 0.96, -0.1]} rotation={[0, 0.28, 0]}>
        <mesh castShadow material={woodDark}>
          <boxGeometry args={[0.72, 0.03, 0.5]} />
        </mesh>
        <group position={[0, 0.02, -0.22]} rotation={[-1.1, 0, 0]}>
          <mesh material={screen} castShadow>
            <boxGeometry args={[0.7, 0.44, 0.02]} />
          </mesh>
          <mesh position={[0, 0, 0.013]}>
            <planeGeometry args={[0.62, 0.36]} />
            <meshBasicMaterial color="#3d7a5c" transparent opacity={0.5} />
          </mesh>
        </group>
        <pointLight position={[0, 0.25, 0.05]} color="#5aaa80" intensity={0.55} distance={1.6} />
      </group>

      {/* Lamp */}
      <group position={[1.05, 0.96, -0.28]}>
        <mesh material={brass} castShadow>
          <cylinderGeometry args={[0.1, 0.13, 0.05, 14]} />
        </mesh>
        <mesh position={[0, 0.28, 0]} material={brass}>
          <cylinderGeometry args={[0.018, 0.018, 0.55, 8]} />
        </mesh>
        <mesh position={[-0.06, 0.55, 0]} rotation={[0, 0, 0.35]} material={brass}>
          <cylinderGeometry args={[0.018, 0.018, 0.22, 8]} />
        </mesh>
        <mesh ref={lampRef} position={[-0.18, 0.64, 0.02]} material={lampGlass}>
          <sphereGeometry args={[0.12, 14, 14]} />
        </mesh>
        <mesh position={[-0.18, 0.64, 0.02]} material={brass}>
          <sphereGeometry args={[0.145, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        </mesh>
        <pointLight position={[-0.2, 0.58, 0.18]} color="#ffc48a" intensity={3.2} distance={5.5} decay={2} castShadow />
      </group>

      {/* Mug + steam */}
      <group position={[0.85, 0.96, 0.42]}>
        <mesh castShadow material={mug}>
          <cylinderGeometry args={[0.08, 0.07, 0.15, 16]} />
        </mesh>
        <mesh position={[0, 0.075, 0]} material={coffee}>
          <cylinderGeometry args={[0.07, 0.07, 0.01, 16]} />
        </mesh>
        <mesh position={[0.09, 0, 0]} rotation={[0, Math.PI / 2, Math.PI / 2]} material={mug}>
          <torusGeometry args={[0.035, 0.012, 8, 12, Math.PI]} />
        </mesh>
        <Steam ref={steamRef} positions={steam.pos} count={steam.n} />
      </group>

      {/* Notebook */}
      <group position={[0.2, 0.98, 0.48]} rotation={[0, -0.35, 0]}>
        <mesh castShadow material={leather}>
          <boxGeometry args={[0.5, 0.045, 0.36]} />
        </mesh>
        <mesh position={[0, 0.028, 0]} material={paper}>
          <boxGeometry args={[0.44, 0.025, 0.3]} />
        </mesh>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, 0.043, -0.06 + i * 0.06]}>
            <boxGeometry args={[0.28, 0.001, 0.008]} />
            <meshBasicMaterial color="#c4b090" />
          </mesh>
        ))}
        <mesh position={[0.14, 0.055, 0.08]} rotation={[0, 0.25, 0]} material={bookD}>
          <boxGeometry args={[0.2, 0.014, 0.02]} />
        </mesh>
      </group>

      {/* Book stack */}
      <group position={[-1.1, 0.96, 0.35]} rotation={[0, 0.15, 0]}>
        <mesh position={[0, 0.03, 0]} material={bookB} castShadow>
          <boxGeometry args={[0.28, 0.05, 0.22]} />
        </mesh>
        <mesh position={[0.01, 0.08, 0.01]} material={bookD} castShadow>
          <boxGeometry args={[0.26, 0.04, 0.2]} />
        </mesh>
        <mesh position={[-0.01, 0.12, 0]} material={bookE} castShadow>
          <boxGeometry args={[0.24, 0.035, 0.19]} />
        </mesh>
      </group>
    </group>
  );
}
