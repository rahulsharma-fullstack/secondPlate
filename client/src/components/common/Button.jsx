import { forwardRef } from 'react';
import { cn } from '../../lib/util.js';

const Button = forwardRef(({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}, ref) => {
  const baseStyle = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
    outline: "border border-primary bg-transparent text-primary hover:bg-primary/10 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-secondary active:scale-[0.98]",
    link: "bg-transparent underline-offset-4 hover:underline text-primary",
    glass: "bg-white/20 backdrop-blur-lg border border-white/30 text-primary-foreground hover:bg-white/30 active:scale-[0.98] shadow-sm"
  };
  
  const sizes = {
    default: "h-10 px-5 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10"
  };
  
  return (
    <button
      ref={ref}
      className={cn(baseStyle, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;