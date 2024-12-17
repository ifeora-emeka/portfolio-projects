'use client'
import { APP_CONFIG } from '@/config/app.config'
import { Sparkles } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function AppLoader({ children }: { children: any }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
            {
                !ready ? <div className='min-h-screen max-h-screen flex items-center justify-center bg-background'>
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
                </div> :
                    <>
                        {children}
                    </>
            }
        </>
    )
}
