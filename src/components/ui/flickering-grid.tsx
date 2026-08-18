"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 40,
  gridGap = 1,
  flickerChance = 0.3,
  color = "rgb(255, 255, 255)",
  maxOpacity = 0.25,
  className,
  ...props
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || size.width === 0 || size.height === 0) return;

    canvas.width = size.width;
    canvas.height = size.height;

    const cols = Math.ceil(size.width / (squareSize + gridGap));
    const rows = Math.ceil(size.height / (squareSize + gridGap));
    const squares = Array.from({ length: cols * rows }, () => ({
      opacity: Math.random() * maxOpacity * 0.5,
      targetOpacity: Math.random() * maxOpacity,
      speed: Math.random() * 0.005 + 0.001,
    }));

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, size.width, size.height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i + j * cols;
          const sq = squares[index];

          if (Math.abs(sq.opacity - sq.targetOpacity) < 0.01) {
            if (Math.random() < flickerChance) {
              sq.targetOpacity = Math.random() * maxOpacity;
              sq.speed = Math.random() * 0.005 + 0.001;
            }
          }

          if (sq.opacity < sq.targetOpacity) sq.opacity += sq.speed;
          else sq.opacity -= sq.speed;

          ctx.fillStyle = color.replace(")", `, ${sq.opacity})`).replace("rgb", "rgba");
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [size, squareSize, gridGap, maxOpacity, flickerChance, color]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
