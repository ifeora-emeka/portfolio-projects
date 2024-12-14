import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/session/SessionHeader";
import SessionBody from "@/components/session/SessionBody";


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none'>
            <SessionHeader/>
            <div className='flex-1 h-[calc(100vh-4rem)]'>
                <Container>
                    <div className={'grid grid-cols-8'}>
                        <SessionBody/>
                        <div className={'p-2 col-span-3'}>
                            <div
                                className={'p-2 flex flex-col gap-3 bg-card rounded-xl h-[calc(100vh-4rem-1rem)] max-h-[calc(100vh-4rem-1rem)] border'}>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
