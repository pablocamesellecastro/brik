"use client";

import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  label: string;
  x: string;
  y: string;
  href?: string;
  children?: React.ReactNode;
};

export default function PopWindow({ label, x, y, href, children }: Props) {
  const [open, setOpen] = useState(true);
  const controls = useDragControls();

  if (!open) return null;

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      whileDrag={{ scale: 1.03 }}
      className="absolute w-44 max-w-[calc(100vw-2rem)] border border-foreground bg-background"
      style={{
        left: `clamp(0px, ${x}, calc(100% - 11rem))`,
        top: y,
      }}
    >
      <div
        onPointerDown={(e) => controls.start(e)}
        className="flex cursor-grab touch-none select-none justify-between bg-foreground px-1 text-xs text-background active:cursor-grabbing"
      >
        <span>{label}</span>

        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      {href ? (
        <Link
          href={href}
          className="block h-28 overflow-hidden hover:opacity-80"
        >
          {children}
        </Link>
      ) : (
        <div className="h-28 overflow-hidden">{children}</div>
      )}
    </motion.div>
  );
}
