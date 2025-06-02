"use client";

import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * A hook that detects when an element enters the viewport and triggers an animation
 */
export default function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  rootMargin = '0px',
}: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Skip if running on server or if no ref is available
    if (typeof window === 'undefined' || !ref.current) return;

    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }
            // Once visible, no need to observe anymore
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, rootMargin]);

  return [ref, isVisible] as [RefObject<HTMLElement>, boolean];
}
