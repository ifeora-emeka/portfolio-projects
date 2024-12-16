import React from "react";
import SessionOptions from "@/components/session/SessionOptions";

export default function SessionAnswer() {
    return <>
        <div className={'pr-2 pb-2 pt-2 col-span-3'}>
            <div
                className={'p-2 flex flex-col gap-3 bg-card rounded-xl h-[calc(100vh-4rem-1rem)] max-h-[calc(100vh-4rem-1rem)] border'}>
                <SessionOptions/>
            </div>
        </div>
    </>
}
