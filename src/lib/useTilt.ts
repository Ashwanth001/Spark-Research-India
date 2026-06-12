"use client";
import { useEffect, useRef } from "react";

export function useTilt(intensity = 7) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      el.style.transform = `perspective(900px) rotateX(${(-dy * intensity).toFixed(2)}deg) rotateY(${(dx * intensity).toFixed(2)}deg) translateZ(6px)`;
      el.style.transition = "transform 0.12s ease-out";
    };

    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      // cubic-bezier overshoot → spring-like return
      el.style.transition = "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity]);

  return ref;
}
