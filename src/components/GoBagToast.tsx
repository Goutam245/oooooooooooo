import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';

interface GoBagToastProps {
  isVisible: boolean;
  productName?: string;
}

export const GoBagToast = ({ isVisible, productName }: GoBagToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 50 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25 
          }}
          className="fixed top-4 right-4 z-[100] max-w-sm"
        >
          <div className="copper-border rounded-lg bg-card shadow-premium p-4 flex items-start gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-5 h-5 text-secondary" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Check className="w-4 h-4 text-green-500" />
                <h4 className="font-bold text-sm text-foreground">Added to Go-Bag</h4>
              </div>
              {productName && (
                <p className="text-sm text-primary font-medium truncate">
                  {productName}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                Supplies staged for your next mission
              </p>
            </div>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ boxShadow: '0 0 0 0 hsl(18 100% 60% / 0.5)' }}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 hsl(18 100% 60% / 0.5)',
                  '0 0 20px 4px hsl(18 100% 60% / 0.3)',
                  '0 0 0 0 hsl(18 100% 60% / 0)'
                ]
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};