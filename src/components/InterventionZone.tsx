import { motion } from 'framer-motion';
import { InterventionProduct, interventionProducts, isPlaceholder, getPlaceholderName } from '@/data/products';
import { AlertTriangle, Zap, Shield, Package } from 'lucide-react';

interface InterventionZoneProps {
  activeIntervention: InterventionProduct | null;
  onInterventionSelect: (product: InterventionProduct | null) => void;
}

export const InterventionZone = ({ activeIntervention, onInterventionSelect }: InterventionZoneProps) => {
  // Group interventions by waypoint type
  const gripPurgeProducts = interventionProducts.filter(p => p.waypoint === 'grip-purge');
  const assaultClarityProducts = interventionProducts.filter(p => p.waypoint === 'assault-clarity');
  const replaceProducts = interventionProducts.filter(p => p.waypoint === 'replace-grip-purge');
  const fortifyProducts = interventionProducts.filter(p => p.waypoint === 'after-shield');

  const handleClick = (product: InterventionProduct) => {
    if (activeIntervention?.id === product.id) {
      onInterventionSelect(null);
    } else {
      onInterventionSelect(product);
    }
  };

  return (
    <section className="copper-border rounded-xl p-4 md:p-6 bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h2 className="text-xl md:text-2xl font-bold gradient-text">
              INTERVENTION ZONE
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Specialized protocols for specific conditions
          </p>
        </div>

        {/* Pre-Wash Interventions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-secondary" />
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wide">
              Pre-Wash Interventions
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            ↓ Insert between GRIP & PURGE
          </p>
          <div className="space-y-2">
            {gripPurgeProducts.map((product, index) => (
              <InterventionTile
                key={product.id}
                product={product}
                isActive={activeIntervention?.id === product.id}
                onClick={() => handleClick(product)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Decon Interventions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <h3 className="text-sm font-bold text-destructive uppercase tracking-wide">
              Decontamination
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            ↓ Insert between ASSAULT & CLARITY
          </p>
          <div className="space-y-2">
            {assaultClarityProducts.map((product, index) => (
              <InterventionTile
                key={product.id}
                product={product}
                isActive={activeIntervention?.id === product.id}
                onClick={() => handleClick(product)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Field Protocol */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
              Field Protocol
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            ⚡ Replaces GRIP & PURGE
          </p>
          <div className="space-y-2">
            {replaceProducts.map((product, index) => (
              <InterventionTile
                key={product.id}
                product={product}
                isActive={activeIntervention?.id === product.id}
                onClick={() => handleClick(product)}
                index={index}
                isSpecial
              />
            ))}
          </div>
        </div>

        {/* Fortification */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-bold text-accent uppercase tracking-wide">
              Fortification
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            + Apply after SHIELD
          </p>
          <div className="space-y-2">
            {fortifyProducts.map((product, index) => (
              <InterventionTile
                key={product.id}
                product={product}
                isActive={activeIntervention?.id === product.id}
                onClick={() => handleClick(product)}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface InterventionTileProps {
  product: InterventionProduct;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isSpecial?: boolean;
}

const InterventionTile = ({ product, isActive, onClick, index, isSpecial = false }: InterventionTileProps) => {
  const hasPlaceholder = isPlaceholder(product.smallImage);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
        isActive ? 'intervention-tile-active' : 'intervention-tile'
      } ${isSpecial ? 'border-primary' : ''}`}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-3 flex items-center gap-3">
        {/* Product Image or Placeholder */}
        <div className="w-10 h-12 flex-shrink-0 flex items-center justify-center">
          {hasPlaceholder ? (
            <div className="w-full h-full rounded bg-gradient-to-b from-muted to-background border border-dashed border-primary/30 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary/60" />
            </div>
          ) : (
            <img
              src={product.smallImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.opacity = '0.5';
              }}
            />
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-bold text-sm truncate ${
            isActive ? 'text-accent' : 'text-foreground'
          }`}>
            {product.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {product.tagline}
          </p>
        </div>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-accent"
          />
        )}
      </div>
    </motion.div>
  );
};