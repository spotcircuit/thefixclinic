import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SkinRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/skin');
  }, [router]);
  
  return null;
}