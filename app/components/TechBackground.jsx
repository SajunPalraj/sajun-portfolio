'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const isMobile = window.innerWidth < 768;

    // Group for 3D elements centered around the Hero section
    const heroGroup = new THREE.Group();
    // Position slightly upward so it sits nicely behind the Hero intro text
    heroGroup.position.set(0, isMobile ? 3 : 2, 0);
    scene.add(heroGroup);

    // 1. Primary Orange Wireframe Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(isMobile ? 3.8 : 5.5, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.12 : 0.18,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    heroGroup.add(icosahedron);

    // 2. Inner Floating White/Silver Wireframe Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(isMobile ? 2.2 : 3.2, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.08 : 0.14,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    heroGroup.add(octahedron);

    // 3. Small Secondary Orange Rotating Cube (Floating upper right)
    const cubeGeometry = new THREE.BoxGeometry(isMobile ? 1.4 : 2.2, isMobile ? 1.4 : 2.2, isMobile ? 1.4 : 2.2);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0xff8a00,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.10 : 0.16,
    });
    const floatingCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    floatingCube.position.set(isMobile ? 7 : 14, isMobile ? 4 : 6, -4);
    scene.add(floatingCube);

    // 4. Small Secondary White Wireframe Tetrahedron (Floating lower left)
    const tetraGeometry = new THREE.TetrahedronGeometry(isMobile ? 1.2 : 1.8);
    const tetraMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.08 : 0.12,
    });
    const floatingTetra = new THREE.Mesh(tetraGeometry, tetraMaterial);
    floatingTetra.position.set(isMobile ? -7 : -15, isMobile ? -3 : -5, -2);
    scene.add(floatingTetra);

    // 5. Minimal Constellation Particles with subtle connections
    const particleCount = isMobile ? 35 : 70;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xff6b00);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * (isMobile ? 26 : 45);
      particlePositions[i3 + 1] = (Math.random() - 0.5) * (isMobile ? 20 : 35);
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 15;

      const chosenColor = Math.random() > 0.4 ? orangeColor : whiteColor;
      particleColors[i3] = chosenColor.r;
      particleColors[i3 + 1] = chosenColor.g;
      particleColors[i3 + 2] = chosenColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.25 : 0.35,
      vertexColors: true,
      transparent: true,
      opacity: isMobile ? 0.18 : 0.28,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Subtle line connections between nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff6b00,
      transparent: true,
      opacity: isMobile ? 0.06 : 0.10,
    });

    const maxLineSegments = isMobile ? 30 : 60;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    function updateLines() {
      let lineIndex = 0;
      const maxDistance = isMobile ? 6 : 8;

      for (let i = 0; i < particleCount && lineIndex < maxLineSegments; i++) {
        const i3 = i * 3;
        for (let j = i + 1; j < particleCount && lineIndex < maxLineSegments; j++) {
          const j3 = j * 3;
          const dx = particlePositions[i3] - particlePositions[j3];
          const dy = particlePositions[i3 + 1] - particlePositions[j3 + 1];
          const dz = particlePositions[i3 + 2] - particlePositions[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const lIdx = lineIndex * 6;
            linePositions[lIdx] = particlePositions[i3];
            linePositions[lIdx + 1] = particlePositions[i3 + 1];
            linePositions[lIdx + 2] = particlePositions[i3 + 2];
            linePositions[lIdx + 3] = particlePositions[j3];
            linePositions[lIdx + 4] = particlePositions[j3 + 1];
            linePositions[lIdx + 5] = particlePositions[j3 + 2];
            lineIndex++;
          }
        }
      }
      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;
    }

    updateLines();

    // Subtle mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow smooth continuous rotation of main Hero objects
      heroGroup.rotation.y = elapsedTime * 0.08 + mouseX * 0.4;
      heroGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1 - mouseY * 0.4;

      icosahedron.rotation.z = elapsedTime * 0.03;
      octahedron.rotation.y = -elapsedTime * 0.12;
      octahedron.rotation.x = elapsedTime * 0.06;

      // Floating cubes rotation and gentle bobbing
      floatingCube.rotation.x = elapsedTime * 0.12;
      floatingCube.rotation.y = elapsedTime * 0.15;
      floatingCube.position.y = (isMobile ? 4 : 6) + Math.sin(elapsedTime * 0.6) * 0.6;

      floatingTetra.rotation.y = -elapsedTime * 0.10;
      floatingTetra.rotation.z = elapsedTime * 0.08;
      floatingTetra.position.y = (isMobile ? -3 : -5) + Math.cos(elapsedTime * 0.5) * 0.5;

      // Gentle drift of particles
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      icoGeometry.dispose();
      icoMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      tetraGeometry.dispose();
      tetraMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]">
      {/* Subtle Developer Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Very subtle soft orange ambient radial aura behind Hero */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.08)_0%,rgba(8,8,8,0)_70%)] blur-[90px] pointer-events-none" />

      {/* Soft Bottom dark vignette to ensure absolute readability for lower sections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(8,8,8,0.2)_0%,rgba(8,8,8,0.85)_80%,#080808_100%)] pointer-events-none" />
    </div>
  );
}
