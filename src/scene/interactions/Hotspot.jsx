import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Interactive amber bead in the 3D world.
 * Hover: glow + label. Click: select chapter.
 */
export function Hotspot({
  id,
  position,
  label,
  active,
  onSelect,
  hideLabel = false,
  size = 0.045,
}) {
  const [hovered, setHovered] = useState(false);
  const group = useRef();
  const core = useRef();
  const ring = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const targetScale = hovered ? 1.35 : active ? 1.1 : 1;
    if (group.current) {
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
      group.current.position.y = position[1] + Math.sin(t * 1.0 + id.length * 0.5) * 0.02;
    }
    if (core.current) {
      core.current.material.emissiveIntensity =
        (hovered ? 2.4 : active ? 1.8 : 1.3) + Math.sin(t * 2) * 0.12;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.45;
      ring.current.material.opacity = active ? 0.4 : hovered ? 0.28 : 0.05;
    }
  });

  const showLabel = hovered && !hideLabel;

  return (
    <group
      ref={group}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
    >
      <mesh>
        <sphereGeometry args={[size * 3, 12, 12]} />
        <meshBasicMaterial
          color="#e8a85c"
          transparent
          opacity={hovered || active ? 0.08 : 0.02}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[size, 12, 12]} />
        <meshStandardMaterial
          color="#ffd89a"
          emissive="#e8a85c"
          emissiveIntensity={1.3}
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 1.8, size * 1.95, 18]} />
        <meshBasicMaterial color="#f5d9a0" transparent opacity={0.08} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <pointLight color="#e8a85c" intensity={hovered ? 0.7 : active ? 0.35 : 0.12} distance={0.9} />

      {showLabel && (
        <Html
          center
          distanceFactor={4}
          position={[0, size * 4.2, 0]}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div className="hotspot-label">{label}</div>
        </Html>
      )}
    </group>
  );
}
