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
            <div className='flex-1'>
                <Container>
                    <div className={'grid grid-cols-12 gap-2'}>
                        <div className='col-span-3'>
                            <SessionOutline />
                        </div>
                        <div className={'col-span-6'}>
                            <SessionBody />
                        </div>
                        <div className={'col-span-3'}>
                            <SessionAnswer />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
