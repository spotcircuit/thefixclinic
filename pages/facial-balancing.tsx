import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FacialBalancingRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/facial-balancing');
  }, [router]);
  
  return null;
}