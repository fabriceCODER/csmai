'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push('/chat-dashboard');
        } else {
            router.push('/welcome');
        }
    }, [isSignedIn, router]);

    // Avoid rendering anything while redirecting
    return null;
}
