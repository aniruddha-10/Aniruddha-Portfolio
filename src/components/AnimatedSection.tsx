
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | '';
  threshold?: number;
  rootMargin?: string;
}

const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = '',
  threshold = 0.1,
  rootMargin = "-50px"
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin
  });

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation} ${delay}` : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
