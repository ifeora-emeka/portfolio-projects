'use client'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from '@/lib/utils'

export default function TrackSuggestion({ userInput, experienceLevel }: { userInput: string; experienceLevel: string; }) {
    return (
        <div>
            <div className='flex flex-col gap-1 mb-4'>
                <EachSuggestion isLoading />
                <EachSuggestion isLoading />
                {
                    new Array(7).fill(null).map((_, i) => {
                        return <EachSuggestion key={`sug-${i}`} />
                    })
                }
            </div>
            <Button type="submit" className="w-full">
                Start learning...
            </Button>
        </div>
    )
}

const EachSuggestion = ({
    heading,
    subHeading,
    isLoading
}: {
    heading?: string;
    subHeading?: string;
    isLoading?: boolean;
}) => {
    return <div className={cn('bg-card border py-2 px-3 flex gap-2 rounded-lg', {
        "hover:border-primary": !isLoading
    })}>
        {
            isLoading ? <Skeleton className="h-6 min-w-6 rounded-full" /> : <div className='h-6 min-w-6 border rounded-full mt-2 flex items-center justify-center bg-primary'>
                <Check className='text-primary-foreground h-3 w-3' />
            </div>
        }
        <div className='w-full'>
            <h6 className={cn('h-5', {
                "mb-2": isLoading
            })}>
                {isLoading ? <Skeleton className="w-[80%] h-full rounded-full" /> : "heading"}
            </h6>
            <small className='text-muted-foreground'>
                {
                    isLoading ? <div>
                        <Skeleton className="w-[60%] h-[10px] rounded-full mb-2" />
                        <Skeleton className="w-[50px] h-[10px] rounded-full" />
                    </div> :
                        "subHeading"
                }
            </small>
        </div>
    </div>
}
