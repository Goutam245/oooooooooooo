import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { RiotLineGrid } from '@/components/RiotLineGrid';
import { ProductInfoZone } from '@/components/ProductInfoZone';
import { InterventionZone } from '@/components/InterventionZone';
import { GoBagToast } from '@/components/GoBagToast';
import { 
  riotLineProducts, 
  interventionProducts,
  RiotProduct, 
  InterventionProduct 
} from '@/data/products';

const Index = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeIntervention, setActiveIntervention] = useState<InterventionProduct | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastProductName, setToastProductName] = useState<string>('');

  // Get the currently selected product for PIZ
  const selectedProduct = activeStep 
    ? riotLineProducts.find(p => p.step === activeStep) 
    : activeIntervention;

  const isInterventionSelected = !activeStep && !!activeIntervention;

  // Handle step selection from compass or tiles
  const handleStepSelect = useCallback((step: number) => {
    setActiveStep(step);
    setActiveIntervention(null); // Deselect intervention when selecting a step
  }, []);

  // Handle intervention selection
  const handleInterventionSelect = useCallback((product: InterventionProduct | null) => {
    setActiveIntervention(product);
    if (product) {
      setActiveStep(null); // Deselect step when selecting intervention
    }
  }, []);

  // Handle add to go-bag
  const handleAddToGoBag = useCallback(() => {
    const productName = selectedProduct?.name || 'Product';
    setToastProductName(productName);
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-background">
      {/* Toast Notification */}
      <GoBagToast isVisible={showToast} productName={toastProductName} />

      {/* Header Section */}
      <Header 
        activeStep={activeStep}
        onStepSelect={handleStepSelect}
        onAddToGoBag={handleAddToGoBag}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Desktop Layout: Three Columns */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Left Column - Product Info Zone */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <ProductInfoZone 
                selectedProduct={selectedProduct || null}
                onAddToGoBag={handleAddToGoBag}
                isIntervention={isInterventionSelected}
              />
            </div>
          </motion.div>

          {/* Center Column - Riot Line Grid */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <RiotLineGrid 
              activeStep={activeStep}
              onStepSelect={handleStepSelect}
              activeIntervention={activeIntervention}
            />
          </motion.div>

          {/* Right Column - Intervention Zone */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="sticky top-24">
              <InterventionZone 
                activeIntervention={activeIntervention}
                onInterventionSelect={handleInterventionSelect}
              />
            </div>
          </motion.div>
        </div>

        {/* Tablet Layout: Two Columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          {/* Left - Riot Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RiotLineGrid 
              activeStep={activeStep}
              onStepSelect={handleStepSelect}
              activeIntervention={activeIntervention}
            />
          </motion.div>

          {/* Right - PIZ + Interventions stacked */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProductInfoZone 
                selectedProduct={selectedProduct || null}
                onAddToGoBag={handleAddToGoBag}
                isIntervention={isInterventionSelected}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InterventionZone 
                activeIntervention={activeIntervention}
                onInterventionSelect={handleInterventionSelect}
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="md:hidden space-y-6">
          {/* Riot Line Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RiotLineGrid 
              activeStep={activeStep}
              onStepSelect={handleStepSelect}
              activeIntervention={activeIntervention}
            />
          </motion.div>

          {/* Product Info Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductInfoZone 
              selectedProduct={selectedProduct || null}
              onAddToGoBag={handleAddToGoBag}
              isIntervention={isInterventionSelected}
            />
          </motion.div>

          {/* Intervention Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InterventionZone 
              activeIntervention={activeIntervention}
              onInterventionSelect={handleInterventionSelect}
            />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg font-bold gradient-text mb-2">
              RIOT GARAGE™
            </p>
            <p className="text-xs text-muted-foreground">
              Works, Not Formulas • Detail Obsessed
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {new Date().getFullYear()} Riot Garage. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;