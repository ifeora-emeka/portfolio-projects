import React from 'react'

type Props = {}

export default function EachTrack({ }: Props) {
    return (
        <>
            <div className='bg-card rounded-xl border overflow-hidden hover:shadow-sm hover:border-primary relative group'>
                <div className="rounded-md text-xs bg-card z-[3] text-card-foreground px-3 py-1 absolute shadow-md top-3 left-3">
                    Difficulty level
                </div>
                <div className='h-20 bg-no-repeat overflow-hidden'>
                    <img src='https://img.freepik.com/premium-photo/bright-abstract-waves-rainbow-celebration-flow-smoothly-generated-by-ai_188544-9530.jpg?semt=ais_hybrid' alt='banner' className='grayscale w-full group-hover:grayscale-0 opacity-40 group-hover:opacity-100- transition-all duration-500' />
                </div>
                <div className='p-3'>
                    <h4 className='font-semibold'>The name of the track</h4>
                    <p className='text-muted-foreground mb-3'>Show description of the track</p>
                    <div className='h-2 w-full rounded-full overflow-hidden bg-accent'>
                        <div className='h-2 w-[40%] bg-primary' />
                    </div>
                </div>
            </div>
        </>
    )
}