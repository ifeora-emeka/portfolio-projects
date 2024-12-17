import React from "react";
import SessionOptions from "@/components/session/SessionOptions";

export default function SessionAnswer() {
    return <>
        <div className={'pr-2 pb-2 pt-2 col-span-2 h-[calc(100vh-5rem)]'}>
            <div
                className={'p-2 flex flex-col gap-3 bg-card rounded-xl h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] border'}>
                <SessionOptions/>
            </div>
        </div>
    </>
}
