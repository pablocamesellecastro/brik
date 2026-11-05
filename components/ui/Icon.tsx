"use client";
import { Icon as Iconify } from "@iconify/react";

type Props = { name: string; size?: number; className?: string };

export default function Icon({ name, size = 24, className = "" }: Props) {
  return (
    <Iconify
      icon={`pixelarticons:${name}`}
      width={size}
      height={size}
      className={`icon-glitch ${className}`}
    />
  );
}
