import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FillerRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/facial-balancing/filler');
  }, [router]);
  
  return null;
}