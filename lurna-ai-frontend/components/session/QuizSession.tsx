'use client'
import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/session/SessionHeader";
import SessionBody from "@/components/session/SessionBody";
import SessionAnswer from "@/components/session/SessionAnswer";
import SessionOutline from './SessionOutline';


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none p-2'>
            <SessionHeader />
            <div className='flex-1 py-2'>
                <Container>
                    <div className={'flex gap-2'}>
                        <div className='xl:w-[20%]'>
                            <SessionOutline />
                        </div>
                        <div className={'flex-1'}>
                            <SessionBody />
                        </div>
                        <div className={'xl:w-[30%]'}>
                            <SessionAnswer />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
