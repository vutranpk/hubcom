"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  ScrollTrigger.config({ ignoreMobileResize: true });
}
import { Testimonials } from "@/components/sections/testimonials";

export function ProcessPrism() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  
  const frame0Ref = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);
  const frame4Ref = useRef<HTMLDivElement>(null);
  const frame5Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight * 1.5;
    canvas.width = width;
    canvas.height = height;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Scale particles and size based on device: Reduced mobile count for performance
    const PARTICLE_COUNT = isMobile ? 1500 : (isTablet ? 3000 : 4000); 
    const morphState = { phase: 0, time: 0 };
    const particles: any[] = [];
    const numParticles = PARTICLE_COUNT;
    
    // Core scaling factor to prevent overflow on smaller screens
    const scaleFactor = isMobile ? 0.65 : (isTablet ? 0.85 : 1);
    let animationFrameId: number;
    let globalAngleX = 0;
    let globalAngleY = 0;
    let globalAngleZ = 0;

    // Pre-calculate DNA particles for Phase 1
    const dnaParticles: {x: number, y: number, z: number}[] = [];
    const numPairs = isMobile ? 70 : 80; // Reduced to match lower particle count
    const dnaScale = scaleFactor;
    // Keep radius small enough to look like a strand, not a massive wall
    const dnaRadius = (isMobile ? 150 : 300) * dnaScale; 
    const ySpacing = (isMobile ? 18 : 25) * dnaScale; 

    // Reverse DNA generation direction (spin backwards natively)
    // t goes negative instead of positive!
    for (let p = 0; p < numPairs; p++) {
      const t = -p * 0.12; // REVERSED Helix direction
      const y = (p - numPairs / 2) * ySpacing;
      const xA = Math.cos(t) * dnaRadius;
      const zA = Math.sin(t) * dnaRadius;
      const xB = Math.cos(t + Math.PI) * dnaRadius;
      const zB = Math.sin(t + Math.PI) * dnaRadius;
      
      for(let k = 0; k < 12; k++) {
        dnaParticles.push({
          x: xA + (Math.random() - 0.5) * 35, 
          y: y + (Math.random() - 0.5) * 35, 
          z: zA + (Math.random() - 0.5) * 35
        });
        dnaParticles.push({
          x: xB + (Math.random() - 0.5) * 35, 
          y: y + (Math.random() - 0.5) * 35, 
          z: zB + (Math.random() - 0.5) * 35
        });
      }
      
      if (p % 4 === 0) {
        const numBridgeDots = 20;
        for(let j = 1; j < numBridgeDots; j++) {
          const lerp = j / numBridgeDots;
          dnaParticles.push({
            x: xA * (1 - lerp) + xB * lerp + (Math.random() - 0.5) * 12,
            y: y + (Math.random() - 0.5) * 12,
            z: zA * (1 - lerp) + zB * lerp + (Math.random() - 0.5) * 12
          });
        }
      }
    }
    while(dnaParticles.length < numParticles) {
       dnaParticles.push({...dnaParticles[Math.floor(Math.random() * dnaParticles.length)]});
    }

    // Pre-calculate Prism (Icosahedron) particles for Phase 3
    const phi = (1 + Math.sqrt(5)) / 2;
    const prismSize = (isMobile ? 200 : 400) * scaleFactor; // Elegant box size
    const baseVertices = [
       [-1,  phi,  0], [ 1,  phi,  0], [-1, -phi,  0], [ 1, -phi,  0],
       [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
       [ phi,  0, -1], [ phi,  0,  1], [-phi,  0, -1], [-phi,  0,  1]
    ].map(v => ({ x: v[0]*prismSize, y: v[1]*prismSize, z: v[2]*prismSize }));

    const faces = [
       [0,11,5], [0,5,1], [0,1,7], [0,7,10], [0,10,11],
       [1,5,9], [5,11,4], [11,10,2], [10,7,6], [7,1,8],
       [3,9,4], [3,4,2], [3,2,6], [3,6,8], [3,8,9],
       [4,9,5], [2,4,11], [6,2,10], [8,6,7], [9,8,1]
    ];

    for (let i = 0; i < numParticles; i++) {
      // ===== Phase 0: The Core Singularity (We Build beyond briefs) =====
      let x0, y0, z0;
      const coreSparkLimit = isMobile ? 600 : 1200; 
      const visibleFloatersLimit = isMobile ? 1000 : 1500; // Only allow floaters to take up a portion
      
      if (i < coreSparkLimit) {
          // Core is just a bright point (dense small sphere)
          const r = Math.pow(Math.random(), 2) * (isMobile ? 80 : 150) * scaleFactor;
          const theta0 = Math.random() * Math.PI * 2;
          const phi0 = Math.acos(2 * Math.random() - 1);
          x0 = r * Math.sin(phi0) * Math.cos(theta0);
          y0 = r * Math.sin(phi0) * Math.sin(theta0);
          z0 = r * Math.cos(phi0);
      } else if (i < visibleFloatersLimit) {
          // Sparse, random floating particles (no shape yet)
          const r = Math.random() * 800 * scaleFactor + 200; 
          const theta0 = Math.random() * Math.PI * 2;
          const phi0 = Math.acos(2 * Math.random() - 1);
          x0 = r * Math.sin(phi0) * Math.cos(theta0);
          y0 = r * Math.sin(phi0) * Math.sin(theta0);
          z0 = r * Math.cos(phi0);
      } else {
          // Hide the rest of the particles way off-screen to prevent clutter
          const r = Math.random() * 5000 + 4000; 
          x0 = r; y0 = r; z0 = r;
      }

      // ===== Phase 1: Human-Centered (DNA) =====
      const dna = dnaParticles[i % numParticles];
      let x1 = dna.x;
      let y1 = dna.y;
      let z1 = dna.z;
      
      // DNA TILT: Rotate around Z axis to tilt it diagonally (especially on mobile)
      const tiltZ_dna = isMobile ? Math.PI / 6 : 0; // 30-degree tilt on mobile to look elegant
      const tx_tilt = x1 * Math.cos(tiltZ_dna) - y1 * Math.sin(tiltZ_dna);
      const ty_tilt = x1 * Math.sin(tiltZ_dna) + y1 * Math.cos(tiltZ_dna);
      x1 = tx_tilt;
      y1 = ty_tilt;

      // ===== Phase 2: Galaxy (Insight Driven) =====
      const isCore = i < (isMobile ? 500 : 1200); // Balance core density so arms are distinct
      let x2, y2, z2;
      if (isCore) {
         const phi2 = Math.acos(2 * Math.random() - 1);
         const theta2 = Math.random() * Math.PI * 2;
         // Core
         const r = 250 * scaleFactor * Math.pow(Math.random(), 1/2); 
         x2 = r * Math.sin(phi2) * Math.cos(theta2);
         // Thick 3D bulge
         y2 = (Math.random() - 0.5) * 150 * scaleFactor * Math.exp(-r/100); 
         z2 = r * Math.cos(phi2);
      } else {
         const isRing = Math.random() > 0.85; // 15% in the outer halo
         if (isRing) {
             const angle = Math.random() * Math.PI * 2;
             // Outer halo pushed out so it doesn't cover the arms
             const r = ((isMobile ? 450 : 600) + Math.random() * (isMobile ? 100 : 300)) * scaleFactor; 
             x2 = r * Math.cos(angle);
             z2 = r * Math.sin(angle);
             y2 = (Math.random() - 0.5) * (isMobile ? 60 : 80) * scaleFactor; 
         } else {
             const numArms = 2;
             const armIndex = Math.floor(Math.random() * numArms);
             const armOffset = (Math.PI * 2 / numArms) * armIndex;
             const t = Math.pow(Math.random(), 1.2) * Math.PI * 1.5; 
             // Arms scaling (increased size for mobile)
             const r = ((isMobile ? 100 : 80) + t * (isMobile ? 300 : 250)) * scaleFactor; 
             const angle = armOffset + t;
             x2 = r * Math.cos(angle);
             z2 = r * Math.sin(angle);
             // Elegant arm thickness
             const yThickness = (isMobile ? 100 : 80) * scaleFactor * Math.exp(-t / 4);
             y2 = (Math.random() - 0.5) * yThickness * 2;
             // Horizontal spread (Drastically reduced on mobile to keep spiral shape clear)
             const noiseX = (isMobile ? 50 : 100) * scaleFactor * Math.exp(-t / 4);
             x2 += (Math.random() - 0.5) * noiseX;
             z2 += (Math.random() - 0.5) * noiseX;
         }
      }
      const tiltZ_galaxy = Math.PI / 8;
      const txx2 = x2 * Math.cos(tiltZ_galaxy) - y2 * Math.sin(tiltZ_galaxy);
      const tyy2 = x2 * Math.sin(tiltZ_galaxy) + y2 * Math.cos(tiltZ_galaxy);
      x2 = txx2; y2 = tyy2;
      // Removed the fixed -120 vertical offset so it centers perfectly on the targetY

      // ===== Phase 3: Box inside a Box (Creativity & Technology) =====
      const face = faces[Math.floor(Math.random() * faces.length)];
      const v1 = baseVertices[face[0]];
      const v2 = baseVertices[face[1]];
      const v3 = baseVertices[face[2]];
      let r1 = Math.random(), r2 = Math.random();
      if (r1 + r2 > 1) { r1 = 1 - r1; r2 = 1 - r2; }
      const r3 = 1 - r1 - r2;
      
      let x3 = r1*v1.x + r2*v2.x + r3*v3.x;
      let y3 = r1*v1.y + r2*v2.y + r3*v3.y;
      let z3 = r1*v1.z + r2*v2.z + r3*v3.z;
      
      const isEdge = Math.random() > 0.8;
      if (!isEdge) {
         x3 *= 0.5;
         y3 *= 0.5;
         z3 *= 0.5;
      }

      // ===== Phase 4: Interlocking Chain Links (Partnership 🔗) =====
      const L_chain = (isMobile ? 200 : 250) * scaleFactor; // Longer straight parts on mobile
      const R_chain = (isMobile ? 100 : 120) * scaleFactor; // Wider holes on mobile
      const r_tube = (isMobile ? 20 : 22) * scaleFactor; 
      
      const perimeter = 2 * L_chain + 2 * Math.PI * R_chain;
      const t_chain = Math.random() * perimeter;
      
      let cx, cy, nx, ny;
      
      if (t_chain < L_chain) {
          // Top edge
          cx = -L_chain/2 + t_chain;
          cy = R_chain;
          nx = 0; ny = 1;
      } else if (t_chain < L_chain + Math.PI * R_chain) {
          // Right arc
          const angle = (t_chain - L_chain) / R_chain - Math.PI/2; 
          cx = L_chain/2 + R_chain * Math.cos(angle);
          cy = R_chain * Math.sin(angle);
          nx = Math.cos(angle); ny = Math.sin(angle);
      } else if (t_chain < 2 * L_chain + Math.PI * R_chain) {
          // Bottom edge
          cx = L_chain/2 - (t_chain - (L_chain + Math.PI * R_chain));
          cy = -R_chain;
          nx = 0; ny = -1;
      } else {
          // Left arc
          const angle = Math.PI/2 + (t_chain - (2 * L_chain + Math.PI * R_chain)) / R_chain; 
          cx = -L_chain/2 + R_chain * Math.cos(angle);
          cy = R_chain * Math.sin(angle);
          nx = Math.cos(angle); ny = Math.sin(angle);
      }
      
      const phi4 = Math.random() * Math.PI * 2;
      let x4 = cx + r_tube * Math.cos(phi4) * nx;
      let y4 = cy + r_tube * Math.cos(phi4) * ny;
      let z4 = r_tube * Math.sin(phi4);
      
      const isLink1 = Math.random() > 0.5;
      const offset = (L_chain / 2 + R_chain) * 0.5; // Perfect interlock
      
      if (isLink1) {
          // Link 1 is on XY plane, shifted left
          x4 -= offset;
      } else {
          // Link 2 is on XZ plane, shifted right
          const tempY = y4;
          y4 = z4;
          z4 = -tempY;
          x4 += offset;
      }
      
      // Extremely low noise so the chains look sharp and distinct
      const noise4 = isMobile ? 3 : 8;
      x4 += (Math.random() - 0.5) * noise4;
      y4 += (Math.random() - 0.5) * noise4;
      z4 += (Math.random() - 0.5) * noise4;
      
      // 3D Rotations to make BOTH links perfectly isometric and clearly visible
      // 1. Rotate around X by 45 deg so XY and XZ planes are tilted equally towards camera
      const tiltX = Math.PI / 4; 
      let ty = y4 * Math.cos(tiltX) - z4 * Math.sin(tiltX);
      let tz = y4 * Math.sin(tiltX) + z4 * Math.cos(tiltX);
      y4 = ty; z4 = tz;

      // 2. Rotate around Z by -45 deg to make it diagonal like 🔗
      const tiltZ = -Math.PI / 4; 
      let tx = x4 * Math.cos(tiltZ) - y4 * Math.sin(tiltZ);
      ty = x4 * Math.sin(tiltZ) + y4 * Math.cos(tiltZ);
      x4 = tx; y4 = ty;

      // ===== Phase 5: Final Scatter =====
      let x5 = (Math.random() - 0.5) * width * 4;
      let y5 = (Math.random() - 0.5) * height * 4;
      let z5 = (Math.random() - 0.5) * 1200 * 4;

      particles.push({
        pos: [
          { x: x0, y: y0, z: z0 },
          { x: x1, y: y1, z: z1 },
          { x: x2, y: y2, z: z2 },
          { x: x3, y: y3, z: z3 },
          { x: x4, y: y4, z: z4 },
          { x: x5, y: y5, z: z5 }
        ],
        // Dramatically increase mobile particle size to maintain solid shapes with fewer particles
        size: Math.random() * (isMobile ? 3.5 : 2.0) + (isMobile ? 1.5 : 1.0),
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.5 + 0.5,
        isEdge: isEdge
      });
    }

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const renderMorph = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
      
      // Additive blending for magical glowing energy effect
      ctx.globalCompositeOperation = "lighter";
      
      morphState.time += 0.005;
      
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const p1Index = Math.floor(morphState.phase);
      const p2Index = Math.min(5, p1Index + 1);
      const lerp = morphState.phase - p1Index;
      
      // Smoothstep interpolation
      const smoothLerp = lerp * lerp * (3 - 2 * lerp);

      // Make phase 1 (DNA) spin natively, but REVERSED!
      // I reversed the helix generation, so we keep spin the same or reverse it too
      const idleRotY_DNA = -morphState.time * 0.5; // REVERSED spin

      // Global rotation (Continuous spin over time + Scroll rotation)
      // Fade out continuous spinning when reaching Phase 4 (Infinity) so it doesn't spin wildly
      let timeRotSpeed = 0.2;
      if (morphState.phase > 3) {
         timeRotSpeed = Math.max(0, 0.2 - (morphState.phase - 3) * 0.2); // Fades to 0 by phase 4
      }
      const rotY = morphState.time * timeRotSpeed + (morphState.phase * Math.PI * 0.8);
      const rotX = -0.25;
      const rotZ = 0;

      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      const cy = Math.cos(rotY), sy = Math.sin(rotY);
      const cz = Math.cos(rotZ), sz = Math.sin(rotZ);

      const projected: any[] = [];

      particles.forEach(p => {
        const s1 = { ...p.pos[p1Index] };
        const s2 = { ...p.pos[p2Index] };

        // Apply idle spinning to DNA if it's involved in the current transition
        if (p1Index === 1) {
            const tx = s1.x * Math.cos(idleRotY_DNA) - s1.z * Math.sin(idleRotY_DNA);
            const tz = s1.x * Math.sin(idleRotY_DNA) + s1.z * Math.cos(idleRotY_DNA);
            s1.x = tx; s1.z = tz;
        }
        if (p2Index === 1) {
            const tx = s2.x * Math.cos(idleRotY_DNA) - s2.z * Math.sin(idleRotY_DNA);
            const tz = s2.x * Math.sin(idleRotY_DNA) + s2.z * Math.cos(idleRotY_DNA);
            s2.x = tx; s2.z = tz;
        }

        // Apply smoothstep interpolation
        let x = s1.x * (1 - smoothLerp) + s2.x * smoothLerp;
        let y = s1.y * (1 - smoothLerp) + s2.y * smoothLerp;
        let z = s1.z * (1 - smoothLerp) + s2.z * smoothLerp;

        const wobbleX = Math.sin(morphState.time * p.wobbleSpeed + p.wobblePhase) * 10;
        const wobbleY = Math.cos(morphState.time * p.wobbleSpeed * 1.2 + p.wobblePhase) * 10;
        const wobbleZ = Math.sin(morphState.time * p.wobbleSpeed * 0.8 + p.wobblePhase) * 10;

        x += wobbleX;
        y += wobbleY;
        z += wobbleZ;

        // Add global floating up and down to Phase 4 (Infinity)
        if (morphState.phase > 3) {
            const phase4Influence = Math.max(0, 1 - Math.abs(morphState.phase - 4));
            y += Math.sin(morphState.time * 2.0 + p.wobblePhase * 0.1) * 30 * phase4Influence;
        }

        const x1 = x * cz - y * sz;
        const y1 = x * sz + y * cz;
        const z1 = z;

        const x2 = x1 * cy + z1 * sy;
        const y2 = y1;
        const z2 = -x1 * sy + z1 * cy;

        const x3 = x2;
        const y3 = y2 * cx - z2 * sx;
        const z3 = y2 * sx + z2 * cx;

        const focalLength = 1200;
        const zDepth = z3 + focalLength;

        if (zDepth > 0) {
          let scale = focalLength / zDepth;
          // Drastically reduced max scale to prevent particles from becoming huge
          const maxScale = isMobile ? 1.0 : 1.5;
          scale = Math.min(scale, maxScale);
          
          // Interpolate target position based on phase
          // Desktop: Centered behind text in 0 & 5. Shifted right in 1-4.
          // Mobile: Always centered horizontally. TargetY interpolates from 0.35 (behind title) to 0.50 (perfectly above bottom text).
          let desktopTargetX = width * 0.65;
          let desktopTargetY = height * 0.55;
          let mobileTargetY = window.innerHeight * 0.65; // Moved up slightly from 0.75 to 0.65
          
          if (morphState.phase < 1) {
              const t = morphState.phase; // 0 to 1
              desktopTargetX = (width / 2) * (1 - t) + (width * 0.65) * t;
              desktopTargetY = (height / 2) * (1 - t) + (height * 0.55) * t;
          } else if (morphState.phase > 4) {
              const t = morphState.phase - 4; // 0 to 1
              desktopTargetX = (width * 0.65) * (1 - t) + (width / 2) * t;
              desktopTargetY = (height * 0.55) * (1 - t) + (height / 2) * t;
          }
          
          const targetX = isMobile ? width / 2 : desktopTargetX;
          const targetY = isMobile ? mobileTargetY : desktopTargetY;
          
          let screenX = targetX + (x3 * scale);
          let screenY = targetY + (y3 * scale);
          const alpha = Math.min(1, Math.max(0.1, scale * 0.8));
          
          // Hubcom Brand Colors (Signature Cyan/Blue)
          const hueShift = (Math.random() - 0.5) * 20; // Subtle color variation per particle
          let baseHue = 215; // Premium Electric Blue
          
          const finalHue = baseHue + hueShift;
          const lightness = p.isEdge ? 60 : 30; // Softer, premium glow // Edges are bright, core is dark for depth
          
          const color = `hsla(${finalHue}, 100%, ${lightness}%, ${alpha})`;
          // Extremely soft glow color for bloom effect
          const glowColor = `hsla(${finalHue}, 100%, ${lightness}%, ${alpha * 0.15})`;

          projected.push({
            x: screenX, y: screenY, z: z3, scale, color, glowColor, size: p.size, isEdge: p.isEdge
          });
        }
      });

      projected.sort((a, b) => b.z - a.z);

      // Draw connecting lines uniformly across all phases (Standardized to Phase 3 style)
      ctx.lineWidth = 0.6;
      const edgeParticles = projected.filter(p => p.isEdge);
      
      // Calculate how close we are to Phase 3 (1 = exactly at Phase 3, 0 = far away)
      const phase3Intensity = Math.max(0, 1 - Math.abs(3 - morphState.phase));

      // Interpolate connection properties to prevent dense phases from getting cluttered
      // Realistic pixel distances for connections (much shorter to reduce clutter and lag)
      const baseMaxDist = isMobile ? 35 : 50; 
      const p3MaxDist = isMobile ? 60 : 80;   
      const maxDist = baseMaxDist + (p3MaxDist - baseMaxDist) * phase3Intensity;
      const maxDistSq = maxDist * maxDist;

      const baseStep = isMobile ? 20 : 10; // Skip aggressively on mobile
      const p3Step = isMobile ? 12 : 5;
      const step = Math.floor(baseStep + (p3Step - baseStep) * phase3Intensity);

      const baseMaxConn = isMobile ? 1 : 3; // Strict limit on connections per particle
      const p3MaxConn = isMobile ? 3 : 8;
      const maxConnections = Math.floor(baseMaxConn + (p3MaxConn - baseMaxConn) * phase3Intensity);

      for (let i = 0; i < edgeParticles.length; i += step) {
         for (let j = i + 1; j < Math.min(i + maxConnections, edgeParticles.length); j++) {
            const dx = edgeParticles[i].x - edgeParticles[j].x;
            const dy = edgeParticles[i].y - edgeParticles[j].y;
            const distSq = dx*dx + dy*dy;
            if (distSq < maxDistSq) {
               const dist = Math.sqrt(distSq);
               ctx.beginPath();
               ctx.moveTo(edgeParticles[i].x, edgeParticles[i].y);
               ctx.lineTo(edgeParticles[j].x, edgeParticles[j].y);
               ctx.strokeStyle = `rgba(0, 122, 255, ${(1 - dist/maxDist) * 0.3})`;
               ctx.stroke();
            }
         }
      }

      projected.forEach(p => {
        // High-end Bloom Effect (disable on mobile for performance)
        if (p.isEdge && !isMobile) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * p.scale * 2.5, 0, Math.PI * 2); 
            ctx.fillStyle = p.glowColor;
            ctx.fill();
        }

        // Crisp Core Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(renderMorph);
    };

    renderMorph();

    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: isMobile ? "+=800%" : "+=600%", // Longer scroll distance for butter smooth transitions
        pin: true,
        scrub: isMobile ? 1.5 : 2.0, // High inertia for cinematic fluid scrubbing
        snap: {
          snapTo: "labels", 
          duration: { min: 0.5, max: 1.2 }, // Very gentle and long snap glide
          ease: "power2.out" 
        }
      }
    });

    if (bgRef.current) {
      processTl.to(bgRef.current, { y: "-30vh", ease: "none", duration: 10 }, 0);
    }

    const f0 = frame0Ref.current;
    const f1 = frame1Ref.current;
    const f2 = frame2Ref.current;
    const f3 = frame3Ref.current;
    const f4 = frame4Ref.current;
    const f5 = frame5Ref.current;

    // Entry animation removed to prevent ScrollTrigger conflict. 
    // processTl now has exclusive control over f0.
    gsap.set(f0, { opacity: 1, y: 0 });

      // Add label for initial state (Midpoint of 0 to 1.5)
      processTl.add("phase0", 0.75);

      // Smooth Timeline: Long morphs (duration: 4.0), short rests (duration: 1.5)
      // Premium Text Animations: Blur effects, smoother overlapping fades
      
      // --- PHASE 1 ---
      processTl.to(f0, { opacity: 0, filter: "blur(10px)", y: -30, duration: 1.5 }, 1.5);
      processTl.to(morphState, { phase: 1, ease: "power1.inOut", duration: 4.0 }, 1.5);
      processTl.fromTo(f1, { opacity: 0, filter: "blur(10px)", y: 30 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5 }, 4.0);
      processTl.add("phase1", 6.25); // Midpoint of 5.5 to 7.0

      // --- PHASE 2 ---
      processTl.to(f1, { opacity: 0, filter: "blur(10px)", y: -30, duration: 1.5 }, 7.0);
      processTl.to(morphState, { phase: 2, ease: "power1.inOut", duration: 4.0 }, 7.0);
      processTl.fromTo(f2, { opacity: 0, filter: "blur(10px)", y: 30 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5 }, 9.5);
      processTl.add("phase2", 11.75); // Midpoint of 11.0 to 12.5

      // --- PHASE 3 ---
      processTl.to(f2, { opacity: 0, filter: "blur(10px)", y: -30, duration: 1.5 }, 12.5);
      processTl.to(morphState, { phase: 3, ease: "power1.inOut", duration: 4.0 }, 12.5);
      processTl.fromTo(f3, { opacity: 0, filter: "blur(10px)", y: 30 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5 }, 15.0);
      processTl.add("phase3", 17.25); // Midpoint of 16.5 to 18.0

      // --- PHASE 4 ---
      processTl.to(f3, { opacity: 0, filter: "blur(10px)", y: -30, duration: 1.5 }, 18.0);
      processTl.to(morphState, { phase: 4, ease: "power1.inOut", duration: 4.0 }, 18.0);
      processTl.fromTo(f4, { opacity: 0, filter: "blur(10px)", y: 30 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5 }, 20.5);
      processTl.add("phase4", 22.75); // Midpoint of 22.0 to 23.5

      // --- PHASE 5 ---
      processTl.to(f4, { opacity: 0, filter: "blur(10px)", y: -30, duration: 1.5 }, 23.5);
      processTl.to(morphState, { phase: 5, ease: "power1.inOut", duration: 4.0 }, 23.5);
      
      if (canvasRef.current) {
         processTl.to(canvasRef.current, { opacity: 0, ease: "power2.inOut", duration: 1.5 }, 26.0);
      }
      if (auroraRef.current) {
         processTl.to(auroraRef.current, { opacity: 0, ease: "power2.inOut", duration: 1.5 }, 26.0);
      }
      
      processTl.fromTo(f5, { opacity: 0, filter: "blur(10px)", y: 30 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5 }, 26.0);
      processTl.add("phase5", 28.25); // Midpoint 27.5 to 29.0
      
      // Ensure the timeline extends slightly past the last phase
      processTl.to({}, { duration: 1.5 });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight * 1.5;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, { scope: containerRef });

  const title = "Our Process.";
  const subtitleLines = [
    "We don't just follow requirements. We clarify the problem, shape the direction, and build digital products with purpose, structure, and business impact."
  ];

  return (
    <div className="process-wrapper">
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-card">
        
        {/* Deep Space Background */}
        <div ref={auroraRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_center,_#001133_0%,_#050505_60%,_#000000_100%)]">
           {/* Pure clean gradient, removed stardust dots */}
        </div>

        <div ref={bgRef} className="absolute top-0 left-0 w-full h-[150vh] z-[1] flex justify-center items-center pointer-events-none">
          <canvas ref={canvasRef} className="block w-full h-full" />
        </div>

        <div className="absolute top-0 left-0 w-full h-screen z-[2] pointer-events-none">
          
          {/* Frame 0: Philosophy */}
          <div ref={frame0Ref} className="absolute inset-0 flex flex-col justify-center items-center opacity-0 z-10 pointer-events-none">
            <div className="container mx-auto px-6 w-full flex flex-col items-center text-center">
              <h2 className="heading-1 mb-4 md:mb-10 drop-shadow-2xl">
                {title}
              </h2>
              <p className="text-body-large max-w-[800px] drop-shadow-lg px-4 md:px-0">
                {subtitleLines[0]}
              </p>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60 animate-bounce">
              <span className="font-sans text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-foreground font-medium">Scroll to explore</span>
              <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>
          </div>

          {/* Frame 1: Human-Centered */}
          <div ref={frame1Ref} className="absolute inset-0 flex flex-col justify-end md:justify-center opacity-0 pb-[140px] md:pb-0 z-10 pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 w-full">
              <div className="w-full md:w-[60%] text-center md:text-left mx-auto md:mx-0">
                <div className="label-mono mb-4 md:mb-8 text-primary">{"// PHASE 01"}</div>
                <h3 className="heading-1 mb-6 md:mb-10 text-foreground">Human at the Core.</h3>
                <p className="font-sans text-xl md:text-3xl font-light text-foreground/80 max-w-[800px] mx-auto md:mx-0 leading-relaxed">We design around real people, real workflows, and real outcomes — not just features.</p>
              </div>
            </div>
          </div>
          
          {/* Frame 2: Insight Driven */}
          <div ref={frame2Ref} className="absolute inset-0 flex flex-col justify-end md:justify-center opacity-0 pb-[140px] md:pb-0 z-10 pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 w-full">
              <div className="w-full md:w-[60%] text-center md:text-left mx-auto md:mx-0">
                <div className="label-mono mb-4 md:mb-8 text-primary">{"// PHASE 02"}</div>
                <h3 className="heading-1 mb-6 md:mb-10 text-foreground">Insight-Led Decisions.</h3>
                <p className="font-sans text-xl md:text-3xl font-light text-foreground/80 max-w-[800px] mx-auto md:mx-0 leading-relaxed">Research, context, and business reality guide the products we shape.</p>
              </div>
            </div>
          </div>

          {/* Frame 3: Creativity & Technology */}
          <div ref={frame3Ref} className="absolute inset-0 flex flex-col justify-end md:justify-center opacity-0 pb-[140px] md:pb-0 z-10 pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 w-full">
              <div className="w-full md:w-[60%] text-center md:text-left mx-auto md:mx-0">
                <div className="label-mono mb-4 md:mb-8 text-primary">{"// PHASE 03"}</div>
                <h3 className="heading-1 mb-6 md:mb-10 text-foreground">Creativity & Technology.</h3>
                <p className="font-sans text-xl md:text-3xl font-light text-foreground/80 max-w-[800px] mx-auto md:mx-0 leading-relaxed">We combine design sensitivity with scalable engineering to build products that feel refined and work hard.</p>
              </div>
            </div>
          </div>

          {/* Frame 4: Partnership */}
          <div ref={frame4Ref} className="absolute inset-0 flex flex-col justify-end md:justify-center opacity-0 pb-[140px] md:pb-0 z-10 pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 w-full">
              <div className="w-full md:w-[60%] text-center md:text-left mx-auto md:mx-0">
                <div className="label-mono mb-4 md:mb-8 text-primary">{"// PHASE 04"}</div>
                <h3 className="heading-1 mb-6 md:mb-10 text-foreground">Built in Partnership.</h3>
                <p className="font-sans text-xl md:text-3xl font-light text-foreground/80 max-w-[800px] mx-auto md:mx-0 leading-relaxed">We work closely from direction to launch — and stay aligned as the product grows.</p>
              </div>
            </div>
          </div>

          {/* Frame 5: Testimonials (Beyond Expectations) */}
          <div ref={frame5Ref} className="absolute inset-0 flex items-center justify-center opacity-0 w-full z-50 pointer-events-auto">
            <Testimonials />
          </div>
        </div>
      </section>
    </div>
  );
}
