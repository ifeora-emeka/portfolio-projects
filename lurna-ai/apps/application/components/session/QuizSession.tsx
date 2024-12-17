import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/session/SessionHeader";
import SessionBody from "@/components/session/SessionBody";
import SessionAnswer from "@/components/session/SessionAnswer";
import SessionOutline from './SessionOutline';


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none'>
            <SessionHeader />
            <div className='flex-1 h-[calc(100vh-4rem)]'>
                <Container>
                    <div className={'grid grid-cols-12'}>
                        <div className='pb-2 pt-2 col-span-3 h-[calc(100vh-5rem)]'>
                <SessionOutline />
                        </div>
                        <div className={'col-span-6 h-[calc(100vh-4rem)] py-2 relative'}>
                            <SessionBody />
                        </div>
                        <div className={'pb-2 pt-2 col-span-3 h-[calc(100vh-5rem)]'}>
                            <SessionAnswer />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
