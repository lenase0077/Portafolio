import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { material } from '../materials.js';
import { rand } from '../../shared/utils/math.js';

export function Bookshelf() {
  const woodMid = material('woodMid');
  const woodLight = material('woodLight');
  const pot = material('pot');
  const plant = material('plant');

  const books = useMemo(() => {
    const mats = [
      material('bookA'),
      material('bookB'),
      material('bookC'),
      material('bookD'),
      material('bookE'),
    ];
    const list = [];
    let x = -0.72;
    for (let i = 0; i < 12; i++) {
      const h = 0.24 + rand(i + 10) * 0.1;
      const w = 0.055 + rand(i + 11) * 0.035;
      list.push({ x, h, w, mat: mats[i % mats.length], tilt: (rand(i + 12) - 0.5) * 0.12 });
      x += w + 0.014;
    }
    return list;
  }, []);

  return (
    <group position={[4.0, 0, -3.5]}>
      <mesh position={[0, 1.5, 0.15]} castShadow material={woodMid}>
        <boxGeometry args={[1.9, 3.0, 0.5]} />
      </mesh>
      {[0.35, 1.15, 1.95, 2.55].map((y, i) => (
        <mesh key={i} position={[0, y, 0.3]} material={woodLight}>
          <boxGeometry args={[1.78, 0.07, 0.4]} />
        </mesh>
      ))}
      {books.slice(0, 6).map((b, i) => (
        <mesh key={i} position={[b.x, 1.2 + b.h / 2, 0.3]} rotation={[0, 0, b.tilt]} material={b.mat} castShadow>
          <boxGeometry args={[b.w, b.h, 0.26]} />
        </mesh>
      ))}
      {books.slice(6).map((b, i) => (
        <mesh key={i} position={[b.x * 0.95, 2.0 + b.h / 2, 0.3]} rotation={[0, 0, b.tilt]} material={b.mat} castShadow>
          <boxGeometry args={[b.w, b.h, 0.26]} />
        </mesh>
      ))}
      <group position={[0.55, 2.6, 0.3]}>
        <mesh material={pot} castShadow>
          <cylinderGeometry args={[0.1, 0.08, 0.15, 10]} />
        </mesh>
        <mesh position={[0, 0.16, 0]} material={plant}>
          <sphereGeometry args={[0.12, 8, 8]} />
        </mesh>
        <mesh position={[0.07, 0.22, 0.03]} material={plant}>
          <sphereGeometry args={[0.07, 8, 8]} />
        </mesh>
        <mesh position={[-0.06, 0.2, -0.03]} material={plant}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
      </group>
    </group>
  );
}

export function Corkboard() {
  const frame = material('frame');
  const cork = material('cork');
  const paper = material('paper');
  const pins = [
    { x: -0.55, y: 0.28, c: '#c45c3a' },
    { x: 0.05, y: 0.32, c: '#e8a85c' },
    { x: 0.55, y: 0.12, c: '#5b7fa3' },
    { x: -0.3, y: -0.18, c: '#e8a85c' },
    { x: 0.32, y: -0.22, c: '#c45c3a' },
  ];
  return (
    <group position={[3.4, 2.4, -4.0]}>
      <mesh material={frame} castShadow>
        <boxGeometry args={[2.3, 1.55, 0.08]} />
      </mesh>
      <mesh position={[0, 0, 0.05]} material={cork}>
        <boxGeometry args={[2.08, 1.34, 0.03]} />
      </mesh>
      {[
        [-0.55, 0.22, 0.42, 0.32, 0.12],
        [0.12, 0.24, 0.46, 0.36, -0.08],
        [0.5, -0.05, 0.34, 0.28, 0.1],
        [-0.22, -0.22, 0.38, 0.28, -0.1],
        [0.28, -0.28, 0.3, 0.22, 0.06],
      ].map(([x, y, w, h, r], i) => (
        <mesh key={i} position={[x, y, 0.08]} rotation={[0, 0, r]} material={paper}>
          <boxGeometry args={[w, h, 0.008]} />
        </mesh>
      ))}
      {pins.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, 0.1]}>
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshStandardMaterial color={p.c} roughness={0.4} metalness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function WallMap() {
  const frame = material('frame');
  const mapMat = material('map');
  return (
    <group position={[-4.2, 2.2, -4.0]}>
      <mesh material={frame} castShadow>
        <boxGeometry args={[1.7, 1.3, 0.07]} />
      </mesh>
      <mesh position={[0, 0, 0.05]} material={mapMat}>
        <boxGeometry args={[1.48, 1.08, 0.01]} />
      </mesh>
      <mesh position={[0.45, -0.32, 0.06]}>
        <circleGeometry args={[0.08, 8]} />
        <meshStandardMaterial color="#6b4423" />
      </mesh>
      {[
        [-0.45, 0.18],
        [-0.12, 0.02],
        [0.12, -0.12],
        [0.38, 0.12],
      ].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.06]}>
          <sphereGeometry args={[0.018, 6, 6]} />
          <meshStandardMaterial color="#c45c3a" />
        </mesh>
      ))}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-0.3 + i * 0.18, 0.1 - i * 0.06, 0.055]}>
          <boxGeometry args={[0.08, 0.008, 0.005]} />
          <meshBasicMaterial color="#8b5e3c" />
        </mesh>
      ))}
    </group>
  );
}

export function RadioCorner() {
  const woodLight = material('woodLight');
  const woodMid = material('woodMid');
  const radio = material('radio');
  const brass = material('brass');
  return (
    <group position={[-3.8, 0, -1.2]}>
      <mesh position={[0, 0.52, 0]} castShadow material={woodLight}>
        <boxGeometry args={[0.85, 0.08, 0.62]} />
      </mesh>
      {[
        [-0.32, 0.26, 0.22],
        [0.32, 0.26, 0.22],
        [-0.32, 0.26, -0.22],
        [0.32, 0.26, -0.22],
      ].map((p, i) => (
        <mesh key={i} position={p} material={woodMid}>
          <boxGeometry args={[0.07, 0.52, 0.07]} />
        </mesh>
      ))}
      <mesh position={[0, 0.72, 0]} castShadow material={radio}>
        <boxGeometry args={[0.55, 0.3, 0.24]} />
      </mesh>
      <mesh position={[-0.12, 0.72, 0.13]}>
        <circleGeometry args={[0.08, 12]} />
        <meshStandardMaterial color="#1a120c" roughness={0.9} />
      </mesh>
      <mesh position={[0.15, 0.74, 0.13]} rotation={[Math.PI / 2, 0, 0]} material={brass}>
        <cylinderGeometry args={[0.03, 0.03, 0.02, 10]} />
      </mesh>
      <mesh position={[0.12, 0.95, 0]} rotation={[0, 0, -0.25]} material={brass}>
        <cylinderGeometry args={[0.008, 0.008, 0.4, 6]} />
      </mesh>
      <pointLight position={[0.1, 0.85, 0.25]} color="#e8a85c" intensity={0.55} distance={1.4} />
    </group>
  );
}

export function HearthGlow() {
  const woodDark = material('woodDark');
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.intensity = 1.6 + Math.sin(t * 2) * 0.22 + Math.sin(t * 3.3) * 0.08;
  });

  return (
    <group position={[5.2, 0.45, 1.8]}>
      <mesh castShadow material={woodDark}>
        <boxGeometry args={[0.7, 0.9, 0.55]} />
      </mesh>
      <mesh position={[0, 0.08, 0.29]}>
        <planeGeometry args={[0.38, 0.32]} />
        <meshBasicMaterial color="#e07040" />
      </mesh>
      <mesh position={[0, 0.08, 0.3]}>
        <planeGeometry args={[0.2, 0.18]} />
        <meshBasicMaterial color="#f0a060" />
      </mesh>
      <pointLight ref={ref} position={[0, 0.15, 0.45]} color="#d46838" intensity={1.6} distance={6} />
    </group>
  );
}
