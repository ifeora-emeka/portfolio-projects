import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import React from 'react'
import { ScrollArea } from "../ui/scroll-area"
import { javascriptModules, javascriptUnits } from "@/__mock__/curriculum.mock"

export default function TrackCurriculumList() {
    return (
        <>
            <aside className={'col-span-2 h-[calc(100vh-4rem)] p-2 relative'}>
                <div className='bg-card border rounded-xl h-[calc(100vh-4rem-1rem)] '>
                    <header className='h-14 border-b px-3 flex items-center'>
                        <h6>Curriculum</h6>
                    </header>
                    <ScrollArea className="h-[calc(100vh-4rem-1rem-3.5rem)]">
                        {
                            new Array(2).fill(null).map(() => {
                                return <>
                                {
                                    javascriptModules.map((module, i) => {
                                        return <Accordion type="single" collapsible key={module.id}>
                                        <AccordionItem value="item-1">
                                          <AccordionTrigger className="px-3">
                                            {module.title}
                                          </AccordionTrigger>
                                          <AccordionContent>
                                           {
                                            javascriptUnits.filter(x => x.moduleID === module.id).map((unit) => {
                                                return <div key={unit.id} className="py-3 pl-9 pr-3 border-t">
                                                    <p>{unit.title}</p>
                                                    </div>
                                            })
                                           }
                                          </AccordionContent>
                                        </AccordionItem>
                                      </Accordion>
                                      
                                    })
                                }
                                </>
                            })
                        }
                    </ScrollArea>
                </div>
            </aside>
        </>
    )
}

