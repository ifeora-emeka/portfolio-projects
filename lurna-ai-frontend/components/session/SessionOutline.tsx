import React, { useState } from 'react'
import SectionCard from './SectionCard'
import { LibraryBig } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SessionOutline() {
    return (
        <>
            <SectionCard
                heading='Track outline'
                subHeading="Your progress on this track"
                Icon={LibraryBig}
            >
                <div className='space-y-2 p-2 pb-16'>
                    {
                        new Array(28).fill(null).map((_, i) => {
                            return <EachSection
                                key={`sec-${i}`}
                                isDone={i < 5}
                                isActive={i == 5}
                            />
                        })
                    }
                </div>
            </SectionCard>
        </>
    )
}


const EachSection = ({ isActive, isDone }: {
    isDone?: boolean;
    isActive?: boolean;
}) => {
    const [showSub, setShowSub] = useState(false);
    return <>
        <div>
            <div
                onClick={() => setShowSub(!showSub)}
                className={cn('rounded-xl flex items-center gap-2 cursor-pointer truncate', {
                    "text-muted-foreground opacity-80": !isActive && !isDone,
                    "line-through": isDone
                    // "font-": isActive || isDone,
                })}
            >
                <div className={cn(`h-4 min-w-4 rounded-full bg-background border`, {
                    "bg-green-400 border-green-400": isDone,
                    "bg-yellow-400 border-yellow-400": isActive,
                })}>

                </div>
                <p className='truncate'>The name of the section</p>
            </div>
            {
                showSub && <div className={cn('pt-2 pb-3 flex flex-col gap-1 border-l pl-4 ml-2', {
                    "line-through opacity-80 text-muted-foreground": isDone,
                    "opacity-80 text-muted-foreground": !isActive && !isDone
                })}>
                    {
                        new Array(6).fill(null).map((_, i) => {
                            return <div key={`sub-${i}`}>
                                <p>the sub track name or title </p>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    </>
}
