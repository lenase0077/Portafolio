import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { contentRepository } from '../data/contentRepository.js';
import { DEFAULT_CAMERA, HOTSPOTS } from './config/hotspots.js';
import { CameraRig } from './camera/CameraRig.jsx';
import {
  Room,
  Rug,
  Armchair,
  WallDecor,
  WindowView,
  Desk,
  Bookshelf,
  Corkboard,
  WallMap,
  RadioCorner,
  HearthGlow,
} from './furniture/index.js';
import { DustMotes } from './effects/Particles.jsx';
import { Hotspot } from './interactions/Hotspot.jsx';

/**
 * Facade over the 3D study: composes environment, furniture, effects, interactions.
 */
function SceneContents({ lang, activeId, onSelect }) {
  return (
    <>
      <fog attach="fog" args={['#2c2418', 6, 18]} />
      <color attach="background" args={['#221a12']} />

      <ambientLight intensity={0.7} color="#e0c8a8" />
      <hemisphereLight args={['#f0d8b0', '#2a2018', 0.7]} />
      <directionalLight
        position={[-5, 4, 2]}
        intensity={0.65}
        color="#8eacc8"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
      />
      <pointLight position={[0.2, 3.6, 0.8]} intensity={1.1} color="#f0d0a0" distance={12} decay={2} />
      <pointLight position={[-4.5, 2.2, 0.5]} intensity={0.55} color="#e8c49a" distance={6} decay={2} />

      <CameraRig activeId={activeId} />

      <Room />
      <WindowView />
      <Desk />
      <Bookshelf />
      <Corkboard />
      <WallMap />
      <RadioCorner />
      <Armchair />
      <Rug />
      <DustMotes />
      <HearthGlow />
      <WallDecor />

      {HOTSPOTS.map((h) => (
        <Hotspot
          key={h.id}
          id={h.id}
          position={h.position}
          label={contentRepository.getChapterLabel(h.id, lang)}
          active={activeId === h.id}
          hideLabel={Boolean(activeId)}
          onSelect={onSelect}
          size={h.size}
        />
      ))}
    </>
  );
}

export default function StudyScene({ lang, activeId, onSelect }) {
  return (
    <div className="scene-root">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [...DEFAULT_CAMERA.pos], fov: 42, near: 0.1, far: 40 }}
      >
        <Suspense fallback={null}>
          <SceneContents lang={lang} activeId={activeId} onSelect={onSelect} />
        </Suspense>
      </Canvas>
      <div className="scene-vignette" aria-hidden />
    </div>
  );
}
