import React from 'react'
import Container from '../Container'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function QuizSession() {
    return (
        <div className='min-h-screen bg-background max-h-screen flex flex-col'>
            <header className='bg-card border-b min-h-16 max-h-16 flex items-center'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png' alt='session logo' className='h-11 w-11 rounded-full object-center' />
                            <div className='flex flex-col'>
                                <h1 className='font-bold'>Javascript Quiz Session</h1>
                                <p className='text-muted-foreground text-xs'>Introduction to Javascript Quiz Session</p>
                            </div>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </Container>
            </header>
            <div className='flex-1 h-[calc(100vh-8rem)] overflow-y-auto'>
                <div>
                    <Container>
                        {
                            new Array(37).fill(null).map((_, i) => {
                                return <p key={i} className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe delectus, soluta voluptatibus mollitia pariatur maiores iure ex iste eaque similique, dolorum, ratione rem exercitationem blanditiis vel perferendis? Cum, minus mollitia!</p>
                            })
                        }
                    </Container>
                </div>
            </div>
            <footer className='border-t bg-card h-16 max-h-16'>
                <Container>
                    <div className='h-full flex items-center'>
                        <div className='border rounded-xl h-full w-full bg-accent'>
                            <Textarea />
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}
