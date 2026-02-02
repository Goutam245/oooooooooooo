import { motion, AnimatePresence } from 'framer-motion';
import { RiotProduct, InterventionProduct, isPlaceholder, getPlaceholderName } from '@/data/products';
import { Settings, Target, FileText, Rocket, Package } from 'lucide-react';

interface ProductInfoZoneProps {
  selectedProduct: RiotProduct | InterventionProduct | null;
  onAddToGoBag: () => void;
  isIntervention?: boolean;
}

export const ProductInfoZone = ({ selectedProduct, onAddToGoBag, isIntervention = false }: ProductInfoZoneProps) => {
  if (!selectedProduct) {
    return (
      <div className="copper-border rounded-xl p-6 md:p-8 bg-card min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Select a Product</h3>
          <p className="text-sm text-muted-foreground">
            Click on any Riot Line step or Intervention product to view details
          </p>
        </div>
      </div>
    );
  }

  const isRiotProduct = 'step' in selectedProduct;

  return (
    <motion.div
      className="copper-border rounded-xl overflow-hidden bg-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-4 md:p-6"
        >
          {/* Header with step badge */}
          <div className="flex items-start justify-between mb-4">
            <div>
              {isRiotProduct && (
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-2">
                  STEP {String((selectedProduct as RiotProduct).step).padStart(2, '0')}
                </span>
              )}
              {isIntervention && (
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full mb-2">
                  INTERVENTION
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-black gradient-text">
                {selectedProduct.name}
              </h2>
              <p className="text-sm md:text-base text-primary font-medium mt-1">
                {selectedProduct.tagline}
              </p>
            </div>
          </div>

          {/* Product Image */}
          <motion.div 
            className="relative bg-gradient-to-b from-muted to-background rounded-lg p-4 mb-6 flex items-center justify-center min-h-[200px] md:min-h-[280px]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {isPlaceholder(selectedProduct.largeImage) ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-dashed border-primary/40 flex items-center justify-center mb-4">
                  <Package className="w-10 h-10 text-primary/60" />
                </div>
                <span className="text-xl md:text-2xl font-bold gradient-text text-center">
                  {getPlaceholderName(selectedProduct.largeImage)}
                </span>
                <span className="text-sm text-muted-foreground mt-2">
                  Image Coming Soon
                </span>
              </div>
            ) : (
              <img
                src={selectedProduct.largeImage}
                alt={selectedProduct.name}
                className="max-h-[180px] md:max-h-[260px] object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = selectedProduct.smallImage;
                }}
              />
            )}
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* SKU */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground font-mono">
              SKU: {selectedProduct.sku}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-foreground mb-6">
            {selectedProduct.description}
          </p>

          {/* Detail Sections */}
          <div className="space-y-4">
            <DetailSection
              icon={<Settings className="w-4 h-4" />}
              label="What It Is"
              content={selectedProduct.whatItIs}
            />
            <DetailSection
              icon={<Target className="w-4 h-4" />}
              label="Capabilities"
              content={selectedProduct.capabilities}
            />
            <DetailSection
              icon={<FileText className="w-4 h-4" />}
              label="Strategic Intent"
              content={selectedProduct.strategicIntent}
            />
            <DetailSection
              icon={<Rocket className="w-4 h-4" />}
              label="Deployment Protocol"
              content={selectedProduct.deploymentProtocol}
            />
          </div>

          {/* Add to Go-Bag Button */}
          <motion.button
            onClick={onAddToGoBag}
            className="go-bag-btn w-full mt-6 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base text-primary-foreground uppercase tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Go-Bag
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

interface DetailSectionProps {
  icon: React.ReactNode;
  label: string;
  content: string;
}

const DetailSection = ({ icon, label, content }: DetailSectionProps) => (
  <motion.div 
    className="bg-muted/50 rounded-lg p-3 md:p-4"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="text-primary">{icon}</span>
      <span className="text-xs font-bold text-primary uppercase tracking-wide">{label}</span>
    </div>
    <p className="text-sm text-foreground/90 leading-relaxed">{content}</p>
  </motion.div>
);