import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/session/SessionHeader";
import SessionBody from "@/components/session/SessionBody";
import SessionAnswer from "@/components/session/SessionAnswer";


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none'>
            <SessionHeader />
            <div className='flex-1 h-[calc(100vh-4rem)]'>
                <Container>
                    <div className={'grid grid-cols-11'}>
                        <div className={'col-span-2 h-[calc(100vh-4rem)] p-2 relative'}>
                            <div className='bg-card border p-2 rounded-xl h-[calc(100vh-4rem-1rem)] '></div>
                        </div>
                        <div className={'col-span-6 h-[calc(100vh-4rem)] p-2 relative'}>
                            <SessionBody />
                        </div>
                        <div className={'pr-2 pb-2 pt-2 col-span-3 h-[calc(100vh-4rem)]'}>
                            <SessionAnswer />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
