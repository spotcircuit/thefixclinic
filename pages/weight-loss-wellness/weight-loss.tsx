import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WeightLossRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/weight-loss-wellness/weight-loss');
  }, [router]);
  
  return null;
}