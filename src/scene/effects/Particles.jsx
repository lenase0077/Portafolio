import React, { forwardRef, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { rand } from '../../shared/utils/math.js';

/** Falling rain streaks (window plane local space). */
export const Rain = forwardRef(function Rain(_props, ref) {
  const localRef = useRef();
  const rain = useMemo(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand(i + 3) - 0.5) * 3.4;
      positions[i * 3 + 1] = rand(i + 4) * 2.6;
      positions[i * 3 + 2] = 0.02;
      speeds[i] = 0.015 + rand(i + 5) * 0.03;
    }
    return { positions, speeds, count };
  }, []);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  useFrame((_, dt) => {
    const mesh = localRef.current;
    if (!mesh) return;
    const pos = mesh.geometry.attributes.position;
    for (let i = 0; i < rain.count; i++) {
      let y = pos.getY(i) - rain.speeds[i] * (dt * 60);
      if (y < -0.2) y = 2.4;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={setRefs}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={rain.count}
          array={rain.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#9ec0dc" transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  );
});

/** Warm fireflies outside the window. */
export function Fireflies() {
  const ref = useRef();
  const data = useMemo(() => {
    const n = 16;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (rand(i + 1) - 0.5) * 2.8;
      arr[i * 3 + 1] = -0.4 + rand(i + 2) * 1.2;
      arr[i * 3 + 2] = 0.12;
    }
    return { arr, n };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < data.n; i++) {
      pos.setY(i, data.arr[i * 3 + 1] + Math.sin(t * 0.5 + i) * 0.06);
      pos.setX(i, data.arr[i * 3] + Math.sin(t * 0.35 + i * 1.3) * 0.08);
    }
    pos.needsUpdate = true;
    ref.current.material.opacity = 0.35 + Math.sin(t * 1.4) * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={data.n} array={data.arr} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#e8c86a" transparent opacity={0.45} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** Coffee steam particles — positions owned by parent. */
export const Steam = forwardRef(function Steam({ positions, count }, ref) {
  const localRef = useRef();
  const setRefs = (node) => {
    localRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <points ref={setRefs}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#e8dcc8" transparent opacity={0.22} sizeAttenuation depthWrite={false} />
    </points>
  );
});

/** Floating dust motes in the room. */
export function DustMotes() {
  const ref = useRef();
  const data = useMemo(() => {
    const n = 60;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (rand(i + 13) - 0.5) * 9;
      arr[i * 3 + 1] = 0.4 + rand(i + 14) * 3.8;
      arr[i * 3 + 2] = -3.5 + rand(i + 15) * 7;
    }
    return { arr, n };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < data.n; i++) {
      pos.setY(i, data.arr[i * 3 + 1] + Math.sin(t * 0.18 + i) * 0.12);
      pos.setX(i, data.arr[i * 3] + Math.sin(t * 0.12 + i * 0.5) * 0.08);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={data.n} array={data.arr} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#f0e0c0" transparent opacity={0.28} sizeAttenuation depthWrite={false} />
    </points>
  );
}
