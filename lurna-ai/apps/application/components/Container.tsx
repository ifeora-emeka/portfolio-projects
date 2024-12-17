import { cn } from "@/lib/utils";

export default function Container({ children }: { children: React.ReactNode, size?: "sm" | "md" | "lg" | "xl" }) {
    return <>
        <div className='flex justify-center h-full w-full items-center'>
            <div className={cn("xl:w-[90vw] xl:max-w-[90vw]", {

            })}>
                {children}
            </div>
        </div>
    </>
}
