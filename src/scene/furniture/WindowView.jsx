import React, { useMemo } from 'react';
import { material } from '../materials.js';
import { rand } from '../../shared/utils/math.js';
import { Rain, Fireflies } from '../effects/Particles.jsx';

function ForestOutside() {
  const trees = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        x: -1.5 + (i % 6) * 0.55 + (rand(i + 1) - 0.5) * 0.12,
        z: -0.12 - Math.floor(i / 6) * 0.06,
        s: 0.18 + rand(i + 20) * 0.22,
        h: 0.4 + rand(i + 40) * 0.5,
        dark: i % 2 === 0,
      })),
    []
  );

  return (
    <group>
      <mesh position={[0, -0.95, -0.2]} material={material('ground')}>
        <planeGeometry args={[4, 2.2]} />
      </mesh>
      <mesh position={[0, -0.35, -0.15]}>
        <planeGeometry args={[3.4, 0.55]} />
        <meshBasicMaterial color="#1e3028" />
      </mesh>
      {trees.map((t, i) => (
        <group key={i} position={[t.x, -0.7, t.z]} scale={t.s}>
          <mesh position={[0, t.h * 0.3, 0]}>
            <boxGeometry args={[0.05, t.h * 0.35, 0.03]} />
            <meshBasicMaterial color="#152018" />
          </mesh>
          <mesh position={[0, t.h * 0.7, 0]}>
            <coneGeometry args={[0.28, t.h, 6]} />
            <meshBasicMaterial color={t.dark ? '#1a3028' : '#243d32'} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function WindowView() {
  const woodMid = material('woodMid');
  const woodLight = material('woodLight');
  const sky = material('sky');
  const skyGlow = material('skyGlow');

  return (
    <group position={[-2.6, 2.3, -4.05]}>
      <mesh material={woodMid} castShadow>
        <boxGeometry args={[3.8, 3.0, 0.22]} />
      </mesh>
      <mesh position={[0, 0, 0.05]} material={sky}>
        <planeGeometry args={[3.35, 2.55]} />
      </mesh>
      <mesh position={[0, 0.55, 0.08]} material={skyGlow}>
        <planeGeometry args={[3.35, 1.5]} />
      </mesh>
      <ForestOutside />
      <mesh position={[0, 0, 0.14]} material={woodMid}>
        <boxGeometry args={[0.1, 2.55, 0.08]} />
      </mesh>
      <mesh position={[0, 0, 0.14]} material={woodMid}>
        <boxGeometry args={[3.35, 0.1, 0.08]} />
      </mesh>
      <mesh position={[0, -1.55, 0.15]} material={woodLight} castShadow>
        <boxGeometry args={[3.9, 0.1, 0.35]} />
      </mesh>
      <Rain />
      <Fireflies />
    </group>
  );
}
