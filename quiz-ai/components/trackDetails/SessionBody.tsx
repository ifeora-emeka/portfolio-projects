import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function SessionBody() {
    return <>
        <>
            <div className='bg-card rounded-xl h-[calc(100vh-4rem-1rem)] border relative'>
                <header className='h-11 border-b px-3 flex items-center'>
                    <div className='flex items-center gap-2 h-full'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png'
                            alt='session logo'
                            className='h-6 w-6 rounded-full object-center' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-sm'>Javascript Quiz Session</h1>
                            <p className='text-muted-foreground text-xs'>
                                Introduction to Javascript Quiz Session
                            </p>
                        </div>
                    </div>
                </header>
                <ScrollArea
                    className={'h-[calc(100vh-4rem-1rem-2.75rem)]'}>
                    <div
                        id={'progress-bar'} className={'h-1 w-full top-0 z-5 left-0 right-0 rounded-full overflow-hidden sticky bg-card'}>
                        <div className={'bg-primary h-1 w-[70%] rounded-full'} />
                    </div>
                    <div className={'p-2'}>
                        {
                            new Array(37).fill(null).map((_, i) => {
                                return <p key={i} className='text-lg'>Lorem ipsum dolor, sit
                                    amet consectetur adipisicing elit. Saepe delectus, soluta
                                    voluptatibus mollitia pariatur maiores iure ex iste eaque
                                    similique, dolorum, ratione rem exercitationem blanditiis
                                    vel perferendis? Cum, minus mollitia!</p>
                            })
                        }
                    </div>
                </ScrollArea>
            </div>
        </>
    </>
}
