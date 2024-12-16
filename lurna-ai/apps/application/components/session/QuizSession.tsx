import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/session/SessionHeader";
import SessionBody from "@/components/session/SessionBody";
import SessionAnswer from "@/components/session/SessionAnswer";


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none'>
            <SessionHeader/>
            <div className='flex-1 h-[calc(100vh-4rem)]'>
                <Container>
                    <div className={'grid grid-cols-8'}>
                        <SessionBody/>
                        <SessionAnswer />
                    </div>
                </Container>
            </div>
        </div>
    )
}
