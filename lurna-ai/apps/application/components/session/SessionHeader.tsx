import Container from "@/components/Container";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight, Sparkles} from "lucide-react";

export default function SessionHeader(){
    return <>
        <header className='bg-card border-b min-h-14 max-h-14 flex items-center'>
            <Container>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-2'>
                        <div
                            className='h-9 w-9 rounded-full object-center bg-primary flex items-center justify-center text-primary-foreground'>
                                <Sparkles />
                            </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>Lurna AI</h1>
                            <p className='text-muted-foreground text-xs'>
                                AI driven learning experience
                            </p>
                        </div>
                    </div>
                    <div className={'flex gap-4 items-center'}>
                        <div className={'flex overflow-y-hidden'}>
                            <Button size={'icon'} variant={'outline'} className={'rounded-tr-none rounded-br-none'}>
                                <ArrowLeft />
                            </Button>
                            <Button size={'icon'} variant={'outline'} className={'rounded-tl-none rounded-bl-none border-l-0'} disabled>
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
