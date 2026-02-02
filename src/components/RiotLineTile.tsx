import { motion } from 'framer-motion';
import { RiotProduct } from '@/data/products';

interface RiotLineTileProps {
  product: RiotProduct;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const RiotLineTile = ({ product, isActive, onClick, index }: RiotLineTileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
        isActive ? 'riot-tile-active' : 'riot-tile'
      }`}
      whileHover={{ scale: isActive ? 1.02 : 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-3 md:p-4 flex flex-col items-center text-center min-h-[120px] md:min-h-[140px] justify-center">
        {/* Step Number Badge */}
        <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold ${
          isActive 
            ? 'bg-white/20 text-white' 
            : 'bg-primary/20 text-primary'
        }`}>
          {String(product.step).padStart(2, '0')}
        </div>

        {/* Product Image */}
        <div className="w-12 h-16 md:w-14 md:h-20 mb-2 flex items-center justify-center">
          <img
            src={product.smallImage}
            alt={product.name}
            className="max-w-full max-h-full object-contain drop-shadow-lg"
            onError={(e) => {
              e.currentTarget.style.opacity = '0.5';
            }}
          />
        </div>

        {/* Product Name */}
        <h3 className={`font-bold text-sm md:text-base tracking-wide ${
          isActive ? 'text-white' : 'text-foreground'
        }`}>
          {product.name}
        </h3>

        {/* Tagline */}
        <p className={`text-xs mt-1 ${
          isActive ? 'text-white/80' : 'text-muted-foreground'
        }`}>
          {product.tagline}
        </p>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute bottom-0 left-0 right-0 h-1 bg-white/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </motion.div>
  );
};