import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SculptraRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/facial-balancing/sculptra');
  }, [router]);
  
  return null;
}