import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PermanentMakeupRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/skin/permanent-makeup');
  }, [router]);
  
  return null;
}