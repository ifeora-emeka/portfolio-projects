import { cn } from "@/lib/utils";

export default function Container({ children }: { children: React.ReactNode, size?: "sm" | "md" | "lg" | "xl" }) {
    return <>
        <div className='flex justify-center h-full w-full items-center'>
            <div className={cn("xl:w-[85rem] xl:max-w-[85rem] w-[98vw]", {

            })}>
                {children}
            </div>
        </div>
    </>
}
