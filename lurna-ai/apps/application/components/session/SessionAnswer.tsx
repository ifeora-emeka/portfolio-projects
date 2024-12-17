import React from "react";
import SessionOptions from "@/components/session/SessionOptions";
import { Pencil } from "lucide-react";
import SectionCard from "./SectionCard";

export default function SessionAnswer() {
    return <>
        <SectionCard
            heading="Select your answer"
            subHeading="No such thing as the wrong answer"
            Icon={Pencil}
        >
            <SessionOptions />
        </SectionCard>
    </>
}
