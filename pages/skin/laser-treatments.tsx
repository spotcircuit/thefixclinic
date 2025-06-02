import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LaserTreatmentsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/skin/laser-treatments');
  }, [router]);
  
  return null;
}