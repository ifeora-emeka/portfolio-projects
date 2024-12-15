import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";

export default function SessionBody() {
    return <>
        <>
            <ScrollArea
                className={'bg-card rounded-xl h-[calc(100vh-4rem-1rem)] border relative'}>
                <div
                    id={'progress-bar'} className={'h-1 w-full top-0 z-5 left-0 right-0 rounded-full overflow-hidden sticky bg-card'}>
                    <div className={'bg-primary h-1 w-[70%] rounded-full'}/>
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
        </>
    </>
}
