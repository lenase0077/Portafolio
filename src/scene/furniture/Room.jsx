import React from 'react';
import { material } from '../materials.js';

/** Room shell: floor, walls, ceiling, trim, beam. */
export function Room() {
  const floor = material('floor');
  const woodDark = material('woodDark');
  const woodMid = material('woodMid');
  const wall = material('wall');

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={floor}>
        <planeGeometry args={[16, 14]} />
      </mesh>
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[-6.4 + i * 1.6, 0.004, 0]} material={woodDark}>
          <planeGeometry args={[0.035, 14]} />
        </mesh>
      ))}

      <mesh position={[0, 2.4, -4.2]} receiveShadow material={wall}>
        <boxGeometry args={[16, 4.8, 0.18]} />
      </mesh>
      <mesh position={[-6.5, 2.4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow material={wall}>
        <boxGeometry args={[14, 4.8, 0.18]} />
      </mesh>
      <mesh position={[6.5, 2.4, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow material={wall}>
        <boxGeometry args={[14, 4.8, 0.18]} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4.8, 0]} material={woodDark}>
        <planeGeometry args={[16, 14]} />
      </mesh>

      <mesh position={[0, 0.1, -4.08]} material={woodMid}>
        <boxGeometry args={[16, 0.2, 0.1]} />
      </mesh>
      <mesh position={[-6.38, 0.1, 0]} rotation={[0, Math.PI / 2, 0]} material={woodMid}>
        <boxGeometry args={[14, 0.2, 0.1]} />
      </mesh>
      <mesh position={[6.38, 0.1, 0]} rotation={[0, -Math.PI / 2, 0]} material={woodMid}>
        <boxGeometry args={[14, 0.2, 0.1]} />
      </mesh>

      <mesh position={[0, 4.5, -1.5]} material={woodMid} castShadow>
        <boxGeometry args={[14, 0.25, 0.35]} />
      </mesh>
    </group>
  );
}

export function Rug() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0.3]} material={material('rug')}>
      <circleGeometry args={[1.7, 28]} />
    </mesh>
  );
}

export function Armchair() {
  const leather = material('leather');
  const cushion = material('paperEdge');
  return (
    <group position={[-1.6, 0, 0.8]} rotation={[0, 0.55, 0]}>
      <mesh position={[0, 0.38, 0]} castShadow material={leather}>
        <boxGeometry args={[0.9, 0.38, 0.85]} />
      </mesh>
      <mesh position={[0, 0.78, -0.32]} castShadow material={leather}>
        <boxGeometry args={[0.9, 0.75, 0.2]} />
      </mesh>
      <mesh position={[-0.4, 0.58, 0.05]} material={leather}>
        <boxGeometry args={[0.14, 0.38, 0.72]} />
      </mesh>
      <mesh position={[0.4, 0.58, 0.05]} material={leather}>
        <boxGeometry args={[0.14, 0.38, 0.72]} />
      </mesh>
      <mesh position={[0, 0.58, 0.06]} material={cushion}>
        <boxGeometry args={[0.58, 0.1, 0.52]} />
      </mesh>
    </group>
  );
}

export function WallDecor() {
  const woodMid = material('woodMid');
  const cream = material('cream');
  return (
    <group position={[1.6, 3.3, -4.05]}>
      <mesh material={woodMid} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.05, 20]} />
      </mesh>
      <mesh position={[0, 0, 0.03]} material={cream} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.01, 20]} />
      </mesh>
      <mesh position={[0, 0.05, 0.05]}>
        <boxGeometry args={[0.015, 0.1, 0.01]} />
        <meshBasicMaterial color="#3a2c20" />
      </mesh>
      <mesh position={[0.04, 0, 0.05]} rotation={[0, 0, -0.8]}>
        <boxGeometry args={[0.012, 0.08, 0.01]} />
        <meshBasicMaterial color="#3a2c20" />
      </mesh>
    </group>
  );
}
