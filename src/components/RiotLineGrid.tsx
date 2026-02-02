import { motion } from 'framer-motion';
import { RiotLineTile } from './RiotLineTile';
import { riotLineProducts, InterventionProduct } from '@/data/products';

interface RiotLineGridProps {
  activeStep: number | null;
  onStepSelect: (step: number) => void;
  activeIntervention: InterventionProduct | null;
}

export const RiotLineGrid = ({ activeStep, onStepSelect, activeIntervention }: RiotLineGridProps) => {
  // Filter products based on active intervention
  const getVisibleProducts = () => {
    if (activeIntervention?.waypoint === 'replace-grip-purge') {
      // X-FIELD WASH hides steps 1 & 2
      return riotLineProducts.filter(p => p.step > 2);
    }
    return riotLineProducts;
  };

  const visibleProducts = getVisibleProducts();

  // Find insertion points for interventions
  const getInsertionInfo = () => {
    if (!activeIntervention) return null;
    
    switch (activeIntervention.waypoint) {
      case 'grip-purge':
        return { afterStep: 1, label: 'Intervention after GRIP' };
      case 'assault-clarity':
        return { afterStep: 3, label: 'Intervention after ASSAULT' };
      case 'after-shield':
        return { afterStep: 8, label: 'Intervention after SHIELD' };
      case 'replace-grip-purge':
        return { afterStep: 0, label: 'Replaces GRIP & PURGE' };
      default:
        return null;
    }
  };

  const insertionInfo = getInsertionInfo();

  return (
    <section className="py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          THE RIOT LINE™
        </h2>
        <p className="text-sm text-muted-foreground">
          8-Step Professional Detail Protocol
        </p>
      </motion.div>

      {/* Replacement intervention tile */}
      {activeIntervention?.waypoint === 'replace-grip-purge' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 mx-auto max-w-md"
        >
          <div className="intervention-tile intervention-tile-active rounded-lg p-4 text-center">
            <p className="text-xs text-accent mb-1">⚡ FIELD PROTOCOL ACTIVE</p>
            <h3 className="font-bold text-lg text-foreground">{activeIntervention.name}</h3>
            <p className="text-xs text-muted-foreground">{activeIntervention.tagline}</p>
          </div>
        </motion.div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
        {visibleProducts.map((product, index) => (
          <div key={product.id}>
            {/* Insertion indicator before tile */}
            {insertionInfo && 
             insertionInfo.afterStep === product.step - 1 && 
             activeIntervention?.waypoint !== 'replace-grip-purge' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-3"
              >
                <div className="intervention-tile intervention-tile-active rounded-lg p-3 text-center">
                  <p className="text-xs text-accent mb-1">↓ INTERVENTION</p>
                  <h4 className="font-semibold text-sm text-foreground">{activeIntervention?.name}</h4>
                </div>
              </motion.div>
            )}
            
            <RiotLineTile
              product={product}
              isActive={activeStep === product.step}
              onClick={() => onStepSelect(product.step)}
              index={index}
            />

            {/* Insertion indicator after SHIELD */}
            {insertionInfo?.afterStep === 8 && 
             product.step === 8 && 
             activeIntervention && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3"
              >
                <div className="intervention-tile intervention-tile-active rounded-lg p-3 text-center">
                  <p className="text-xs text-accent mb-1">+ FORTIFICATION</p>
                  <h4 className="font-semibold text-sm text-foreground">{activeIntervention.name}</h4>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Waypoints Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-xs text-muted-foreground">
          ↓ Waypoints • Click intervention products to modify protocol flow
        </p>
      </motion.div>
    </section>
  );
};