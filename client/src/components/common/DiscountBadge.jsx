import { cn } from '@/lib/util.js';

const DiscountBadge = ({ discount, className, size = 'default', ...props }) => {
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-1.5',
    default: 'text-sm py-1 px-2',
    lg: 'text-base py-1.5 px-3'
  };

  return (
    <div 
      className={cn(
        "font-bold bg-primary text-primary-foreground rounded-md inline-flex items-center justify-center",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {discount}% OFF
    </div>
  );
};

export default DiscountBadge;