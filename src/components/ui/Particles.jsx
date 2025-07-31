import React, { useEffect, useRef, useState } from "react";

const Particles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  // Configuration des particules
  const PARTICLE_COUNT = 200;
  const MAX_DISTANCE = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Créer les particules
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.pow(Math.random(), 2) * canvas.width,
          y: Math.random() * canvas.height,
          originalX: 0,
          originalY: 0,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: getRandomBlueColor(),
        });
      }

      // Stocker les positions originales
      particles.forEach((particle) => {
        particle.originalX = particle.x;
        particle.originalY = particle.y;
      });

      return particles;
    };

    // Couleurs bleues de Tailwind
    const getRandomBlueColor = () => {
      const blueColors = [
        "rgba(59, 130, 246, ", // blue-500
        "rgba(96, 165, 250, ", // blue-400
        "rgba(147, 197, 253, ", // blue-300
        "rgba(30, 64, 175, ", // blue-800
        "rgba(37, 99, 235, ", // blue-600
      ];
      return blueColors[Math.floor(Math.random() * blueColors.length)];
    };

    particlesRef.current = createParticles();

    // Gestion du mouvement de la souris
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Mouvement naturel
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebond sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Effet 3D avec la souris
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          const force = (MAX_DISTANCE - distance) / MAX_DISTANCE;
          const angle = Math.atan2(dy, dx);

          // Déplacement 3D
          const offsetX = Math.cos(angle) * force * 30;
          const offsetY = Math.sin(angle) * force * 30;

          particle.x -= offsetX * 0.1;
          particle.y -= offsetY * 0.1;

          // Effet de taille 3D
          const scale = 1 + force * 0.5;
          const currentSize = particle.size * scale;
          const currentOpacity = Math.min(particle.opacity + force * 0.3, 1);

          // Dessiner la particule avec effet 3D
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + currentOpacity + ")";
          ctx.fill();

          // Effet de lueur
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + currentOpacity * 0.2 + ")";
          ctx.fill();
        } else {
          // Dessiner la particule normale
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + particle.opacity + ")";
          ctx.fill();
        }

        // Connexions entre particules proches
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const opacity = ((80 - distance) / 80) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: "auto" }}
    />
  );
};

export default Particles;
