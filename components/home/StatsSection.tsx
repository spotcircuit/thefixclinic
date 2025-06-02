import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container';

interface StatItemProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.floor(duration / end) || 1;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={ref} className="text-center p-4">
      <h4 className="text-gray-600 mb-2">{title}</h4>
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {prefix && <span className="text-2xl mr-1">{prefix}</span>}
        {count}
        {suffix && <span className="text-3xl ml-1">{suffix}</span>}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-accent-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem 
            title="Treatments Performed" 
            value={11000} 
            suffix="+" 
          />
          <StatItem 
            title="Returning Guests" 
            value={90} 
            prefix="Over " 
            suffix="%" 
          />
          <StatItem 
            title="New Guests Per Month" 
            value={50} 
            suffix="+" 
          />
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;