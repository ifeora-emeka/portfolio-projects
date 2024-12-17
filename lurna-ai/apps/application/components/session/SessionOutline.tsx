import React from 'react'
import SectionCard from './SectionCard'
import { LifeBuoy } from 'lucide-react'

export default function SessionOutline() {
    return (
        <>
            <SectionCard
                heading='Need help?'
                subHeading="Don't be affriad to ask"
                Icon={LifeBuoy}
            >
                <div>SessionOutline</div>
            </SectionCard>
        </>
    )
}
