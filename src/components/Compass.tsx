import { motion } from 'framer-motion';
import { getCompassImage } from '@/data/products';

interface CompassProps {
  activeStep: number | null;
  onStepSelect: (step: number) => void;
}

export const Compass = ({ activeStep, onStepSelect }: CompassProps) => {
  const segments = 8;
  const radius = 50;
  const innerRadius = 25;
  
  const createSegmentPath = (index: number) => {
    const angle = (360 / segments);
    const startAngle = index * angle - 90 - angle / 2;
    const endAngle = startAngle + angle;
    
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
    
    const x1 = 50 + radius * Math.cos(toRadians(startAngle));
    const y1 = 50 + radius * Math.sin(toRadians(startAngle));
    const x2 = 50 + radius * Math.cos(toRadians(endAngle));
    const y2 = 50 + radius * Math.sin(toRadians(endAngle));
    const x3 = 50 + innerRadius * Math.cos(toRadians(endAngle));
    const y3 = 50 + innerRadius * Math.sin(toRadians(endAngle));
    const x4 = 50 + innerRadius * Math.cos(toRadians(startAngle));
    const y4 = 50 + innerRadius * Math.sin(toRadians(startAngle));
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="relative">
      {/* Compass Image Background */}
      <motion.div 
        className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg"
        style={{ 
          boxShadow: activeStep ? '0 0 20px hsl(18 100% 60% / 0.4)' : '0 0 15px hsl(25 60% 46% / 0.3)'
        }}
      >
        <motion.img
          key={activeStep}
          src={getCompassImage(activeStep)}
          alt="8 Step Compass"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.currentTarget.src = '/src/images/8 Step Logo.jpg';
          }}
        />
      </motion.div>

      {/* Interactive SVG Overlay */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{ opacity: 0.01 }}
      >
        {Array.from({ length: segments }).map((_, index) => (
          <path
            key={index}
            d={createSegmentPath(index)}
            onClick={() => onStepSelect(index + 1)}
            className="compass-segment"
            fill={activeStep === index + 1 ? 'hsl(18 100% 60% / 0.3)' : 'transparent'}
            stroke="transparent"
          />
        ))}
      </svg>

      {/* Step indicator dots */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
              activeStep === i + 1 ? 'bg-secondary' : 'bg-primary/40'
            }`}
            onClick={() => onStepSelect(i + 1)}
            whileHover={{ scale: 1.3 }}
            animate={activeStep === i + 1 ? { 
              scale: [1, 1.2, 1],
              transition: { duration: 0.5, repeat: Infinity }
            } : {}}
          />
        ))}
      </div>
    </div>
  );
};