import { useEffect, useRef, useState } from "react";
import { ReactComponent as WindmillSVG } from "../assets/windmill_with_rotating_turbine.svg";

export default function ScrollTurbine() {
  const turbineRef = useRef<SVGGElement | null>(null);
  const rotationRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollYRef.current;

      // Increase velocity based on scroll delta
      velocityRef.current += delta * 0.5;
      lastScrollYRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Apply velocity to rotation
      rotationRef.current += velocityRef.current;

      // Apply damping to slow it down (like fan friction)
      velocityRef.current *= 0.95;

      // Clamp very small speeds to 0
      if (Math.abs(velocityRef.current) < 0.01) {
        velocityRef.current = 0;
      }

      if (turbineRef.current) {
        // Adjust 50 50 if needed to match your SVG center
        turbineRef.current.setAttribute(
          "transform",
          `rotate(${rotationRef.current} 50 50)`
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate(); // Start the animation loop

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 100,
        height: 100,
        overflow: "hidden",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <WindmillSVG
        style={{ width: "100%", height: "100%" }}
        ref={(node: SVGSVGElement | null) => {
          if (node) {
            const turbine = node.querySelector("#turbine") as SVGGElement | null;
            turbineRef.current = turbine;
          }
        }}
      />
    </div>
  );
}
