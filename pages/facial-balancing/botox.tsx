import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BotoxRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/services/facial-balancing/botox');
  }, [router]);
  
  return null;
}