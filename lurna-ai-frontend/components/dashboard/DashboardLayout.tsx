'use client'
import React from 'react'
import SessionHeader from '../session/SessionHeader'
import Container from '../Container'
import DashboardLeftNav from './DashboardLeftNav'
import HallOfFameList from './HallOfFameList'
import SectionCard from '../session/SectionCard'
import { LucideIcon } from 'lucide-react'

export default function DashboardLayout({ 
    children,
    Icon,
    heading,
    rightComponent,
    subHeading
 }: { 
    children: React.ReactNode;
    heading: string;
    subHeading?: string;
    Icon: LucideIcon;
    rightComponent?: React.ReactNode;
 }) {
    return (
        <>
            <div
                className='min-h-screen bg-background max-h-screen flex flex-col select-none p-2'>
                <SessionHeader />
                <div className='flex-1 py-2'>
                    <Container>
                        <div className={'flex gap-2'}>
                            <div className='lg:w-[17%]'>
                                <DashboardLeftNav />
                            </div>
                            <div className={'flex-1'}>
                                <SectionCard
                                    heading={heading}
                                    subHeading={subHeading}
                                    variant='ghost'
                                    Icon={Icon}
                                    rightComponent={rightComponent}
                                >
                                    {children}
                                </SectionCard>
                            </div>
                            <div className={'lg:w-[25%]'}>
                                <HallOfFameList />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}
