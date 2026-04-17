"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,         // Speed of the smoothing (0 to 1)
        duration: 1.5,     // Duration of the scroll
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}