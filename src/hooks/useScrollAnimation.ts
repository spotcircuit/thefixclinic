// src/hooks/useScrollAnimation.ts
"use client"; // This hook is designed for client-side usage

import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean; // Custom option to disconnect observer after first intersection
}

const useScrollAnimation = (
  options: IntersectionObserverOptions = { threshold: 0.1, triggerOnce: true }
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current); // Disconnect if triggerOnce is true
          }
        }
        // Optional: could set to false again if not triggerOnce and element leaves viewport
        // else if (!options.triggerOnce) {
        //   setIsVisible(false);
        // }
      },
      {
        threshold: options.threshold,
        root: options.root,
        rootMargin: options.rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]); // Re-run effect if options change

  return [elementRef, isVisible];
};

export default useScrollAnimation;
