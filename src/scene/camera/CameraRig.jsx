import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DEFAULT_CAMERA, getCameraShot } from '../config/hotspots.js';
import { usePointerNdc } from '../../shared/hooks/index.js';

/**
 * Lazy camera rig: eases to chapter shot + mouse parallax.
 * Strategy: active chapter selects a shot; default when none.
 */
export function CameraRig({ activeId }) {
  const { camera } = useThree();
  const mouse = usePointerNdc();
  const target = useRef({
    pos: new THREE.Vector3(...DEFAULT_CAMERA.pos),
    look: new THREE.Vector3(...DEFAULT_CAMERA.look),
  });
  const lookAt = useRef(new THREE.Vector3(...DEFAULT_CAMERA.look));

  useEffect(() => {
    const shot = getCameraShot(activeId);
    target.current.pos.set(...shot.pos);
    target.current.look.set(...shot.look);
  }, [activeId]);

  useFrame(() => {
    const ox = mouse.current.x * 0.35;
    const oy = -mouse.current.y * 0.18;
    const desired = target.current.pos.clone().add(new THREE.Vector3(ox, oy, 0));
    camera.position.lerp(desired, 0.028);
    lookAt.current.lerp(target.current.look, 0.032);
    camera.lookAt(lookAt.current);
  });

  return null;
}
