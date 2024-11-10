import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chatBubbleVariants = cva(
  'relative max-w-[80%] rounded-2xl px-4 py-2 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      position: {
        left: 'rounded-bl-none self-start',
        right: 'rounded-br-none self-end',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'left',
    },
  }
);

export interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  message: string;
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, position, message, ...props }, ref) => {
    return (
      <div
        className={cn(chatBubbleVariants({ variant, position, className }))}
        ref={ref}
        {...props}
      >
        {message}
      </div>
    );
  }
);
ChatBubble.displayName = 'ChatBubble';

export { ChatBubble, chatBubbleVariants };
