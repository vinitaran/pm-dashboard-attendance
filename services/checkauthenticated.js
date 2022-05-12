import { useRouter } from 'next/router';
import { useEffect } from 'react';

function checkauthenticated() {
  const authentication = true;
  const router = useRouter();
  useEffect(() => {
    if(!authentication){
        router.push('/login');
      }
  }, [])
  
}

export default checkauthenticated