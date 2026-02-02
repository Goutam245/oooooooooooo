import { motion } from 'framer-motion';
import { Compass } from './Compass';

interface HeaderProps {
  activeStep: number | null;
  onStepSelect: (step: number) => void;
  onAddToGoBag: () => void;
}

export const Header = ({ activeStep, onStepSelect, onAddToGoBag }: HeaderProps) => {
  return (
    <header className="relative overflow-hidden">
      {/* Vintage Garage Background */}
      <div className="relative bg-gradient-to-b from-muted/50 to-background">
        {/* Neon Sign Section */}
        <div className="copper-border mx-4 mt-4 rounded-lg p-6 md:p-8 bg-gradient-to-b from-muted to-background">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs md:text-sm tracking-[0.3em] text-primary/80 mb-2">
              🔆 WELCOME TO RIOT GARAGE 🔆
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black neon-text text-secondary tracking-wider">
              ⚡ RIOT GARAGE ⚡
            </h1>
            <p className="text-sm md:text-lg tracking-[0.2em] text-muted-foreground mt-2 font-semibold">
              DETAIL OBSESSED
            </p>
          </motion.div>
        </div>

        {/* Garage Door Texture */}
        <div className="garage-door h-8 md:h-12 mt-4" />
      </div>

      {/* Navigation Bar */}
      <nav className="glass-dark border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img 
                src="/public/images/logo.png" 
                alt="Riot Garage Logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>

            {/* Center - Title & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold gradient-text">
                THE RIOT LINE™
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground italic">
                Works, Not Formulas
              </p>
            </motion.div>

            {/* Right - Compass & Go-Bag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 md:gap-6"
            >
              <Compass activeStep={activeStep} onStepSelect={onStepSelect} />
              
              <button
                onClick={onAddToGoBag}
                className="go-bag-btn px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-sm md:text-base text-primary-foreground uppercase tracking-wider whitespace-nowrap"
              >
                Add to Go-Bag
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Go-Bag Button */}
      <div className="md:hidden px-4 py-3 bg-background border-b border-border">
        <button
          onClick={onAddToGoBag}
          className="go-bag-btn w-full py-3 rounded-lg font-bold text-sm text-primary-foreground uppercase tracking-wider"
        >
          Add to Go-Bag
        </button>
      </div>
    </header>
  );
};