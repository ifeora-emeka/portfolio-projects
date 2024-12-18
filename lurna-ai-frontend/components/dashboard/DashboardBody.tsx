'use client'
import React from 'react'
import SectionCard from '../session/SectionCard'
import { Button } from '../ui/button'
import EachTrack from './EachTrack'
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'

export default function DashboardBody() {
    return (
        <>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-3 p-3 pb-20'>
                {
                    new Array(7).fill(null).map((_, i) => {
                        return <Link href='/tracks/1245' key={`track-${i}`}>
                            <EachTrack />
                        </Link>
                    })
                }
            </div>
        </>
    )
}
