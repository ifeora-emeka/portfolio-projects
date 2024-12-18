'use client'
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { useAuthContext } from "@/context/auth.context";

export default function SessionHeader() {
    const { authState: { user } } = useAuthContext();
    return <>
        <Container>
            <header className='bg-card border min-h-14 max-h-14 flex items-center px-3 rounded-xl'>
                <div className='flex items-center justify-between w-full'>
                    <Link className='flex items-center gap-2' href='/'>
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
                    </Link>
                    <div className={'flex gap-4 items-center'}>
                        <div className={'flex overflow-y-hidden'}>
                            <Button variant={'ghost'} size='icon'>
                                <Moon />
                            </Button>
                            <Button variant={'ghost'} size='icon'>
                                <Settings />
                            </Button>
                        </div>
                        {
                            user && <Avatar>
                                {user.photoURL && <AvatarImage src={user.photoURL} />}
                                <AvatarFallback>{user?.displayName ? 
                                `${user?.displayName[0]} ${user?.displayName[1]}`
                                 : 'YO'}</AvatarFallback>
                            </Avatar>
                        }
                    </div>
                </div>
            </header>
        </Container>
    </>
}
