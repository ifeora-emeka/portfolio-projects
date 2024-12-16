import React from "react";
import SessionOptions from "@/components/trackDetails/SessionOptions";

export default function SessionAnswer() {
    return <>
        <>
            <div
                className={'p-2 flex flex-col gap-3 bg-card rounded-xl h-[calc(100vh-4rem-1rem)] max-h-[calc(100vh-4rem-1rem)] border'}>
                <SessionOptions/>
            </div>
        </>
    </>
}