import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircleQuestion, Text } from "lucide-react";
import React from "react";
import SectionCard from "./SectionCard";

export default function SessionBody() {
    return <>
        <SectionCard 
            heading="The title of this session"
            subHeading="The reason for this section"
            Icon={Text}
        >
            {
                new Array(37).fill(null).map((_, i) => {
                    return <p key={i} className='text-lg'>Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Saepe delectus, soluta
                        voluptatibus mollitia pariatur maiores iure ex iste eaque
                        similique, dolorum, ratione rem exercitationem blanditiis
                        vel perferendis? Cum, minus mollitia!</p>
                })
            }
        </SectionCard>
    </>
}
