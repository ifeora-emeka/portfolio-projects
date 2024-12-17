'use client'
import React from 'react'
import SectionCard from '../session/SectionCard'
import { Trophy } from 'lucide-react'

export default function HallOfFameList() {
    return (
        <>
        <SectionCard
            heading='Hall of fame'
            subHeading='Finish and join the hall of fame'
            Icon={Trophy}
        >
           <div className='p-3'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur qui iste eum repudiandae? Recusandae temporibus, dignissimos, quam placeat atque tempora quas vitae ipsam, animi blanditiis reprehenderit aliquid aut debitis.
           </div>
        </SectionCard>
        </>
    )
}
