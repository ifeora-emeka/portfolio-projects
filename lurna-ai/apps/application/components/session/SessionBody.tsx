import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function SessionBody() {
    return <>
        <div className={'col-span-3 h-[calc(100vh-5rem)] p-2 relative'}>
            <div className="bg-card rounded-xl">
                <header className='h-14 flex items-center border-b top-0 sticky bg-card shadow-sm px-3 z-10'>
                    <div
                        id={'progress-bar'} className={'h-1 w-full bottom-0 z-5 left-0 right-0 rounded-full overflow-hidden absolute bg-card'}>
                        <div className={'bg-primary h-1 w-[70%] rounded-full'} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png'
                            alt='session logo'
                            className='h-9 w-9 rounded-full object-center' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>Javascript Quiz Session</h1>
                            <p className='text-muted-foreground text-xs'>
                                Introduction to Javascript Quiz Session
                            </p>
                        </div>
                    </div>
                </header>
                {/* @ts-ignore */}
                <ScrollArea
                    className={' h-[calc(100vh-6rem-3.5rem)] border relative'}>

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
        </div>
    </>
}
