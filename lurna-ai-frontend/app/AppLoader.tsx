'use client'
import AuthPage from '@/components/auth/AuthPage';
import { APP_CONFIG } from '@/config/app.config'
import { useAuthContext } from '@/context/auth.context';
import { Sparkles } from 'lucide-react'
import React, { useEffect } from 'react'
import { User } from 'firebase/auth';
import { auth } from '@/config/firebase.config';
import firebase from "firebase/compat/app";

export default function AppLoader({ children }: { children: React.ReactNode }) {
    const { authState: { user, isLoading }, setAuthState } = useAuthContext();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser: User | null) => {
            if (firebaseUser) {
                setAuthState({
                    user: {
                        ...firebaseUser,
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName,
                        photoURL: firebaseUser.photoURL
                    } as firebase.User,
                    isLoading: false
                });
            } else {
                setAuthState({
                    user: null,
                    isLoading: false
                });
            }
        }, (error) => {
            // Handle any authentication errors
            console.error('Authentication error:', error);
            setAuthState({
                user: null,
                isLoading: false
            });
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [setAuthState]);

    return (
        <>
            {
                isLoading && user === null && <div className='min-h-screen max-h-screen flex items-center justify-center bg-background'>
                    <div className='flex flex-col items-center h-[80vh] w-[80vh] rounded-full justify-center'>
                        <div className='h-16 w-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6'>
                            <Sparkles className='h-7 w-7' />
                        </div>
                        <h1 className='text-xl font-bold'>{APP_CONFIG.name}</h1>
                        <small className='text-muted-foreground mb-3'>{APP_CONFIG.description}</small>
                        <div
                            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >
                                Loading...
                            </span>
                        </div>
                    </div>
                </div> 
            }
            {!isLoading && user === null && <AuthPage />}
            {!isLoading && user !== null && children}
        </>
    )
}