import './style.css'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. Initialize Lenis Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. Hero Image Morphing (Seamless Connection)
const heroBg = document.querySelector('.hero-bg-fixed');
const morphPlaceholder = document.querySelector('.morph-placeholder');

function getMorphClipPath() {
  if (!morphPlaceholder) return "inset(0px 0px 0px 0px round 0px)";
  
  // Calculate dimensions based on viewport to match CSS rules precisely
  const phWidth = morphPlaceholder.offsetWidth;
  const phHeight = morphPlaceholder.offsetHeight; // Use direct height of the 100vh placeholder
  const leftInset = morphPlaceholder.offsetLeft;
  const rightInset = window.innerWidth - (leftInset + phWidth);
  
  // Vertically centered
  const topInset = (window.innerHeight - phHeight) / 2;
  const bottomInset = window.innerHeight - (topInset + phHeight);
  
  // No border radius for cinematic full-height blocks
  const radius = 0; 
  
  return `inset(${topInset}px ${rightInset}px ${bottomInset}px ${leftInset}px round ${radius}px)`;
}

if (heroBg && morphPlaceholder) {
  // Shrink the full-screen image into the placeholder's shape while scrolling the Hero section
  gsap.to(heroBg, {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top", // Finishes exactly when Hero is out of view
      scrub: true,
      invalidateOnRefresh: true
    },
    clipPath: () => getMorphClipPath(),
    ease: "power2.inOut" // Smooth shrinking curve
  });
}

// 2.5. Scroll-bound Video Scrubbing
const heroVid = document.getElementById('hero-vid');
if (heroVid) {
  heroVid.pause(); // GSAP controls playback
  
  const initVideoScrub = () => {
    const duration = heroVid.duration || 10;
    gsap.to(heroVid, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom", // Scrubs across the entire page journey
        scrub: 1.5 // Smooth interpolation for 30fps videos
      },
      currentTime: duration,
      ease: "none"
    });
  };

  if (heroVid.readyState >= 1) {
    initVideoScrub();
  } else {
    heroVid.addEventListener('loadedmetadata', initVideoScrub);
  }
}

// 3. Hero Typographic Entrance (Slide & Fade)
gsap.from('.reveal-text', {
  y: 40,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out",
  delay: 0.2
});

// 3. Generate Cards into an Asymmetrical Rhythm Track
const baseProjects = [
  { title: "Minhshop App", category: "E-Commerce", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "BuyXShare", category: "Fintech", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "SAMA Editorial", category: "Landing", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "Ads Manager", category: "SaaS", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "Nexus Portal", category: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "Flowise CRM", category: "Internal Tool", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "Aero Tracker", category: "Mobile", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=750" },
  { title: "Lumina AI", category: "AI Integration", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&h=750" }
];

const trackWrapper = document.getElementById('works-track');
if (trackWrapper) {
  // 1. Symmetrical Rhythm Setup (All equal size, 4:3 Ratio, Sharp Edges)
  const rhythm = [
    { width: '45vw', margin: '0 5vw 0 0', aspectRatio: '4/3', radius: '0px' }
  ];

  baseProjects.forEach((proj, index) => {
    const style = rhythm[index % rhythm.length];
    
    // HTML structure changed: .work-info is INSIDE the wrapper again so it aligns bottom-left over the image
    const cardHtml = `
      <div class="work-card" style="width: ${style.width}; margin: ${style.margin};">
        <div class="work-image-wrapper" style="aspect-ratio: ${style.aspectRatio}; border-radius: ${style.radius};">
          <img src="${proj.img}" alt="${proj.title}" class="work-image" loading="lazy">
          
          <!-- Typography aligned bottom-left inside image -->
          <div class="work-info">
            <h3 class="work-title">${proj.title}</h3>
            <span class="work-category">${proj.category}</span>
          </div>
        </div>
      </div>
    `;
    trackWrapper.insertAdjacentHTML('beforeend', cardHtml);
  });

  // 3. Pinned Horizontal Scroll Logic (Desktop Only)
  let mm = gsap.matchMedia();
  
  mm.add("(min-width: 769px)", () => {
    const section = document.querySelector('.horizontal-scroll-section');
    const track = document.getElementById('works-track');

    function getScrollAmount() {
      let trackWidth = track.scrollWidth;
      return trackWidth - window.innerWidth;
    }

    // Horizontal Tween for the track
    let tween = gsap.to(track, {
      x: () => getScrollAmount() * -1,
      ease: "none"
    });

    // Master Timeline for the Pinned Section
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

    // 1. Move track left
    tl.add(tween, 0);

    // 2. heroBg is position:fixed, so we manually move it left exactly with the track
    if (heroBg) {
      tl.to(heroBg, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        duration: tween.duration(),
        force3D: true
      }, 0);
    }

    // 3. Text enters perfectly horizontally when section pins (standalone)
    const gatewayTitle = document.querySelector('.gateway-title');
    const gatewayTitleInner = document.querySelector('.gateway-title-inner');
    
    if (gatewayTitleInner && gatewayTitle) {
      const totalDur = tween.duration();
      
      // Entrance: Plays automatically on the INNER span
      gsap.fromTo(gatewayTitleInner, 
        { x: "-100vw", opacity: 0 }, 
        { 
          x: "0", 
          opacity: 1,
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top top", // Perfect timing so it doesn't move vertically
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Exit: Scrubbed on the OUTER h2 to avoid GSAP overwrite conflicts
      tl.to(gatewayTitle, {
        opacity: 0,
        x: -300, // Gentle parallax movement
        duration: totalDur * 0.15, // Fades out completely in the first 15% of the scroll (before projects arrive)
        ease: "none", // Linear fade prevents abrupt disappearance
        force3D: true
      }, 0); // Start immediately as the user begins to scroll to the projects
    }

    // Window Parallax (Images slide within their frames)
    gsap.utils.toArray('.work-image').forEach(img => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img.closest('.work-card'),
          containerAnimation: tween,
          start: "left right",
          end: "right left",
          scrub: true
        },
        xPercent: 20, // Moves right by 20%
        ease: "none"
      });
    });

    return () => {
      // Cleanup on mobile
    };
  });

  // 4. Full-Screen Pinned Process Section (Shutter Effect & Canvas DNA)
  const processSection = document.querySelector('.process-section');
  if (processSection) {
    const processBg = document.querySelector('.process-bg');
    const frames = gsap.utils.toArray('.process-frame');
    
    // --- CANVAS 3D DNA PARTICLE ENGINE ---
    const canvas = document.getElementById('dna-canvas');
    const dnaState = { scrollRotationY: 0, offsetY: 0, idleRotationY: 0 };
    let renderDNA = () => {};

    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width, height;
      
      function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        // height = 150vh because processBg is 150vh
        height = canvas.height = window.innerHeight * 1.5; 
      }
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      const particles = [];
      const numPairs = 250; // Massively detailed
      const radius = 350; // Massively larger radius
      const ySpacing = 25; // Increased vertical spacing
      
      // Generate a cloud of particles forming the helix, tightly clustered to keep shape clear
      for (let i = 0; i < numPairs; i++) {
        const t = i * 0.08; // Slower twisting angle
        const y = (i - numPairs/2) * ySpacing;
        
        const xA = Math.cos(t) * radius;
        const zA = Math.sin(t) * radius;
        const xB = Math.cos(t + Math.PI) * radius;
        const zB = Math.sin(t + Math.PI) * radius;
        
        // Helper to add a particle
        const addParticle = (bx, by, bz, colorStr) => {
          particles.push({
            baseX: bx,
            baseY: by,
            baseZ: bz,
            color: colorStr,
            size: Math.random() * 3.5 + 1.5, // Larger particles for a more solid look
            phase: Math.random() * Math.PI * 2, // For idle animation
            speed: Math.random() * 0.02 + 0.01,
            amp: Math.random() * 4 + 2
          });
        };
        
        // Strand A particle cluster (Thicker spread, more particles = solid & dense)
        for(let k = 0; k < 25; k++) { // Increased from 15
          addParticle(
            xA + (Math.random() - 0.5) * 45, // Much wider spread for a thicker strand
            y + (Math.random() - 0.5) * 45,
            zA + (Math.random() - 0.5) * 45,
            'rgba(140,140,140,0.6)' // Slightly darker and more opaque for "đầm" feeling
          );
        }
        
        // Strand B particle cluster
        for(let k = 0; k < 25; k++) {
          addParticle(
            xB + (Math.random() - 0.5) * 45,
            y + (Math.random() - 0.5) * 45,
            zB + (Math.random() - 0.5) * 45,
            'rgba(140,140,140,0.6)' // Slightly darker and more opaque
          );
        }
        
        // Distinct Base pair rungs composed of particles (every 4 pairs)
        if (i % 4 === 0) {
          const numBridgeDots = 25; // thicker bridge
          for(let j = 1; j < numBridgeDots; j++) {
            const lerp = j / numBridgeDots;
            for(let k = 0; k < 4; k++) { // more particles per dot for solid rungs
              addParticle(
                xA * (1 - lerp) + xB * lerp + (Math.random() - 0.5) * 16, // wider bridge spread
                y + (Math.random() - 0.5) * 16,
                zA * (1 - lerp) + zB * lerp + (Math.random() - 0.5) * 16,
                'rgba(160,160,160,0.45)' // More solid bridge color
              );
            }
          }
        }
      }

      let time = 0;
      renderDNA = function() {
        ctx.clearRect(0, 0, width, height);
        time++; // Increment internal clock
        
        dnaState.idleRotationY += 0.005; // Slow idle spin
        const totalRotationY = dnaState.idleRotationY + dnaState.scrollRotationY;
        
        const projected = [];
        const tilt = -30 * Math.PI / 180; // Tilted angle
        const cosTilt = Math.cos(tilt);
        const sinTilt = Math.sin(tilt);
        
        const cosRot = Math.cos(totalRotationY);
        const sinRot = Math.sin(totalRotationY);
        
        particles.forEach(p => {
          // Idle jitter animation
          const jX = Math.sin(time * p.speed + p.phase) * p.amp;
          const jY = Math.cos(time * p.speed + p.phase) * p.amp;
          const jZ = Math.sin(time * p.speed * 0.8 + p.phase) * p.amp;

          const pX = p.baseX + jX;
          const pY = p.baseY + jY;
          const pZ = p.baseZ + jZ;

          // Rotate around Y
          let rx = pX * cosRot - pZ * sinRot;
          let rz = pX * sinRot + pZ * cosRot;
          let ry = pY;
          
          // Tilt around Z
          let tx = rx * cosTilt - ry * sinTilt;
          let ty = rx * sinTilt + ry * cosTilt;
          let tz = rz;
          
          // Slide up offset
          ty += dnaState.offsetY;
          
          // 3D Projection
          const focalLength = 1200;
          const zDepth = tz + focalLength; 
          
          if (zDepth > 0) {
            const scale = focalLength / zDepth;
            const offsetX = width * 0.35; // Pushed further to the right
            const screenX = (width / 2) + offsetX + (tx * scale);
            const screenY = (height / 2) + (ty * scale);
            
            projected.push({
              x: screenX,
              y: screenY,
              z: tz,
              scale: scale,
              color: p.color,
              size: p.size
            });
          }
        });
        
        // Z-sorting for correct 3D overlap
        projected.sort((a, b) => b.z - a.z);
        
        projected.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      };

      // Continuous animation loop
      function loop() {
        renderDNA();
        requestAnimationFrame(loop);
      }
      loop();
    }
    // --- END CANVAS DNA ---
    
    // Smooth Timeline: Total duration 5 representing 500vh scroll
    let processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processSection,
        start: "top top",
        end: "+=500%", // Pin for 500vh to ensure extreme smoothness
        pin: true,
        scrub: 1
      }
    });

    // Animate background container slowly moving up (Parallax)
    if (processBg) {
      processTl.to(processBg, {
        y: "-30vh", // Slides up gently
        ease: "none",
        duration: 5
      }, 0);
    }

    // Animate DNA Canvas state (Rotation and internal sliding)
    if (canvas) {
      processTl.to(dnaState, {
        scrollRotationY: Math.PI * 8, // 4 full 3D twists
        offsetY: -300, // Slide the DNA structure up internally
        ease: "none",
        duration: 5
      }, 0);
    }

    if (frames.length === 3) {
      // Setup base timeline duration to 5
      processTl.to({}, {duration: 5}, 0);

      // Frame 1 is already visible. Stays visible from 0 to 1.
      // 1 to 2: Frame 1 leaves, Frame 2 enters
      processTl.to(frames[0], { y: "-15vh", opacity: 0, duration: 1, ease: "power2.inOut" }, 1);
      processTl.fromTo(frames[1], { y: "15vh", opacity: 0 }, { y: "0", opacity: 1, duration: 1, ease: "power2.inOut" }, 1);

      // 2 to 3: Frame 2 stays visible.
      // 3 to 4: Frame 2 leaves, Frame 3 enters
      processTl.to(frames[1], { y: "-15vh", opacity: 0, duration: 1, ease: "power2.inOut" }, 3);
      processTl.fromTo(frames[2], { y: "15vh", opacity: 0 }, { y: "0", opacity: 1, duration: 1, ease: "power2.inOut" }, 3);

      // 4 to 5: Frame 3 stays visible before unpinning.
    }
  }

  // Mobile Fallback: Native horizontal scroll
  mm.add("(max-width: 767px)", () => {
    const track = document.querySelector('.horizontal-scroll-track');
    if (track) {
      track.style.overflowX = 'auto';
      track.style.padding = '0 5vw';
      track.style.gap = '10vw';
      
      const cards = track.querySelectorAll('.work-card');
      cards.forEach(card => {
        // Reset asymmetrical styles on mobile for a clean native scroll
        card.style.width = '85vw';
        card.style.alignSelf = 'center';
        card.style.margin = '0';
      });
    }
  });
}

// Ensure smooth navigation to top when clicking Logo or Index (from info/services page it acts normally)
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  });
});

// --- INTERACTIVE SPHERE ---
const sphere = document.querySelector('.interactive-sphere');
if (sphere) {
  const contactLeft = document.querySelector('.contact-left');
  
  contactLeft.addEventListener('mousemove', (e) => {
    const rect = contactLeft.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Very subtle parallax for the sphere
    const moveX = (e.clientX - centerX) * 0.05;
    const moveY = (e.clientY - centerY) * 0.05;
    
    gsap.to(sphere, {
      x: `-50%`, // maintain centering offset
      y: `-50%`,
      xPercent: moveX,
      yPercent: moveY,
      duration: 1,
      ease: "power2.out"
    });
  });
  
  contactLeft.addEventListener('mouseleave', () => {
    gsap.to(sphere, {
      x: `-50%`,
      y: `-50%`,
      xPercent: 0,
      yPercent: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.3)"
    });
  });
}

// --- STORYTELLING ANIMATIONS ---
// 1. Philosophy Text Reveal
const philosophyWords = document.querySelectorAll('.philosophy-text span');
if (philosophyWords.length > 0) {
  gsap.to(philosophyWords, {
    scrollTrigger: {
      trigger: '.philosophy-section',
      start: 'top 60%',
      end: 'center center',
      scrub: 1
    },
    opacity: 1,
    stagger: 0.1,
    ease: "none"
  });
}

// 2. Process Steps (Replaced by Full-Screen Shutter logic above)

// 3. Impact Counters
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  ScrollTrigger.create({
    trigger: '.impact-section',
    start: "top 80%",
    once: true,
    onEnter: () => {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          snap: { innerHTML: 1 },
          ease: "power3.out"
        });
      });
    }
  });
}

// 4. Flickering Footer Canvas
function initFlickeringFooter() {
  const canvas = document.getElementById('flicker-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  const squareSize = 40;
  let cols = 0;
  let rows = 0;
  let squares = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    cols = Math.ceil(width / squareSize);
    rows = Math.ceil(height / squareSize);
    
    // Initialize squares
    squares = [];
    for(let i = 0; i < cols * rows; i++) {
      squares.push({
        opacity: Math.random() * 0.1,
        targetOpacity: Math.random() * 0.3,
        speed: Math.random() * 0.005 + 0.002
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    for(let i = 0; i < cols; i++) {
      for(let j = 0; j < rows; j++) {
        const index = i + j * cols;
        const sq = squares[index];
        if(!sq) continue;

        // Animate opacity
        if (Math.abs(sq.opacity - sq.targetOpacity) < 0.01) {
          sq.targetOpacity = Math.random() * 0.25; // Subtle max opacity
          sq.speed = Math.random() * 0.005 + 0.001;
        }
        
        if (sq.opacity < sq.targetOpacity) {
          sq.opacity += sq.speed;
        } else {
          sq.opacity -= sq.speed;
        }

        // Draw square with gap
        ctx.fillStyle = `rgba(255, 255, 255, ${sq.opacity})`;
        ctx.fillRect(i * squareSize + 1, j * squareSize + 1, squareSize - 2, squareSize - 2);
      }
    }
    requestAnimationFrame(draw);
  }
  
  draw();
}

initFlickeringFooter();
