import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FacialsRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/skin/facials');
  }, [router]);
  
  return null;
}