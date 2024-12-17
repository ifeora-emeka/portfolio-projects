import React from "react";
import SessionOptions from "@/components/session/SessionOptions";
import SectionCard from "./SectionCard";
import { ListChecks } from "lucide-react";

export default function SessionAnswer() {
    return <>
        <SectionCard
            heading="Select your answer"
            subHeading="No such thing as the wrong answer"
            Icon={ListChecks}
        >
            <div className='p-3'>
                <SessionOptions />
            </div>
        </SectionCard>
    </>
}
