import React from 'react'
import { LucideIcon } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

type Props = {
    heading: string;
    subHeading: string;
    Icon: LucideIcon;
    children: React.ReactNode;
    progress?: number;
}

export default function SectionCard({
    children,
    heading,
    Icon,
    subHeading,
    progress
}: Props) {
    return (
        <div className={'relative py-2'}>
            <div className="bg-card rounded-xl overflow-hidden border shadow-md h-[calc(100vh-3.5rem-1rem)]">
                <header className='h-12 flex items-center top-0 sticky bg-card shadow-sm px-3 z-10'>
                    {
                        progress && <div
                        id={'progress-bar'} className={'h-1 w-full bottom-0 z-5 left-0 right-0 rounded-full overflow-hidden absolute bg-card'}>
                        <div className={'bg-primary h-1 w-[70%] rounded-full'} />
                    </div>
                    }
                    <div className='flex items-center gap-2'>
                        {/* @ts-ignore */}
                        <Icon className='h-6 w-6 object-center' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-xs'>{heading}</h1>
                            <p className='text-muted-foreground text-xs'>
                                {subHeading}
                            </p>
                        </div>
                    </div>
                </header>
                {/* @ts-ignore */}
                <ScrollArea
                    className={'h-[calc(100vh-3.5rem-1rem-3rem)] relative'}
                >
                    <div className={'p-3'}>
                        {children}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}


