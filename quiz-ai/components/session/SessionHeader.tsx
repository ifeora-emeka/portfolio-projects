import Container from "@/components/Container";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function SessionHeader(){
    return <>
        <header className='bg-card border-b min-h-16 max-h-16 flex items-center'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png'
                            alt='session logo'
                            className='h-9 w-9 rounded-full object-center'/>
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>Javascript Quiz Session</h1>
                            <p className='text-muted-foreground text-xs'>Introduction
                                to Javascript Quiz Session</p>
                        </div>
                    </div>
                    <div className={'flex gap-4 items-center'}>
                        <div className={'flex overflow-y-hidden'}>
                            <Button size={'icon'} variant={'outline'} className={'rounded-tr-none rounded-br-none'}>
                                <ArrowLeft />
                            </Button>
                            <Button size={'icon'} variant={'outline'} className={'rounded-tl-none rounded-bl-none border-l-0'}>
                                <ArrowRight />
                            </Button>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </Container>
        </header>
    </>
}
