import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IVTherapyRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/weight-loss-wellness/iv-therapy');
  }, [router]);
  
  return null;
}