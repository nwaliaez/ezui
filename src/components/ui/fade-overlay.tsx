// components/FadeOverlay.tsx

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const fadeOverlayVariants = cva(
  'absolute inset-0 flex items-center justify-center p-2 ease-in-out',
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
      gradient: {
        default: 'bg-gradient-to-b from-transparent to-background',
        light: 'bg-gradient-to-b from-white/30 to-gray-100/90',
        dark: 'bg-gradient-to-b from-zinc-700/30 to-zinc-950/90',
      },
      duration: {
        none: '', // No transition by default
        short: 'transition-opacity duration-300',
        medium: 'transition-opacity duration-500',
        long: 'transition-opacity duration-700',
      },
    },
    defaultVariants: {
      visible: true,
      gradient: 'default',
      duration: 'none', // Default to no animation
    },
  }
);

export interface FadeOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fadeOverlayVariants> {
  asChild?: boolean;
}

const FadeOverlay = React.forwardRef<HTMLDivElement, FadeOverlayProps>(
  (
    {
      className,
      visible,
      gradient,
      duration,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          fadeOverlayVariants({ visible, gradient, duration, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
FadeOverlay.displayName = 'FadeOverlay';

export { FadeOverlay, fadeOverlayVariants };
