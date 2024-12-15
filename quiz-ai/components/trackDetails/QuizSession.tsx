import React from 'react'
import Container from '../Container'
import SessionHeader from "@/components/trackDetails/SessionHeader";
import SessionBody from "@/components/trackDetails/SessionBody";
import SessionAnswer from "@/components/trackDetails/SessionAnswer";
import TrackCurriculumList from './TrackCurriculumList';


export default function QuizSession() {
    return (
        <div
            className='min-h-screen bg-background max-h-screen flex flex-col select-none'>
            <SessionHeader />
            <div className='flex-1 h-[calc(100vh-4rem)]'>
                <Container>
                    <div className={'grid grid-cols-11'}>
                        <TrackCurriculumList />
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
