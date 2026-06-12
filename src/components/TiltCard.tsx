"use client";
import { useTilt } from "@/lib/useTilt";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
}

export function TiltCard({ intensity = 7, style, children, ...props }: TiltCardProps) {
  const ref = useTilt(intensity);
  return (
    <div ref={ref} style={{ position: "relative", ...style }} {...props}>
      {children}
    </div>
  );
}
