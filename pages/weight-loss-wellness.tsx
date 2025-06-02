import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WeightLossWellnessRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/weight-loss-wellness');
  }, [router]);
  
  return null;
}