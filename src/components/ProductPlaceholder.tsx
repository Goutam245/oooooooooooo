import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

interface ProductPlaceholderProps {
  name: string;
  size?: 'small' | 'large';
  className?: string;
}

export const ProductPlaceholder = ({ name, size = 'small', className = '' }: ProductPlaceholderProps) => {
  const isLarge = size === 'large';
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        flex flex-col items-center justify-center
        bg-gradient-to-b from-muted to-background
        border-2 border-dashed border-primary/40
        rounded-lg
        ${isLarge ? 'min-h-[200px] md:min-h-[260px] p-6' : 'w-full h-full p-3'}
        ${className}
      `}
    >
      <div className={`
        rounded-full bg-primary/10 flex items-center justify-center mb-2
        ${isLarge ? 'w-16 h-16' : 'w-8 h-8'}
      `}>
        <Package className={`text-primary ${isLarge ? 'w-8 h-8' : 'w-4 h-4'}`} />
      </div>
      
      <span className={`
        font-bold gradient-text text-center
        ${isLarge ? 'text-xl md:text-2xl' : 'text-xs'}
      `}>
        {name}
      </span>
      
      <span className={`
        text-muted-foreground text-center mt-1
        ${isLarge ? 'text-sm' : 'text-[10px]'}
      `}>
        Image Coming Soon
      </span>
    </motion.div>
  );
};
