import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export default function SessionOptions() {
    return <>
        <div className={'flex flex-col gap-2'}>
            <h6 className={'text-xl pb-1 font-bold'}>Your answer is?</h6>
            <div className={'flex flex-col gap-2'}>
                <EachOption heading={'Option 1'} subHeading={'This is the correct answer'} index={0}/>
                <EachOption heading={'Option 2'} subHeading={'This is the correct answer'} index={1} mode={'correct'}/>
                <EachOption heading={'Option 3'} subHeading={'This is the correct answer'} index={2} mode={'wrong'}/>
                <EachOption heading={'Option 4'} subHeading={'This is the correct answer'} index={3}/>
            </div>
            <div className={'h-16 border-t items-center justify-end flex'}>
                <Button>
                    Submit
                </Button>
            </div>
        </div>
    </>
}


const EachOption = ({heading, subHeading, index, mode = 'default', isSelected}: { heading: string; subHeading: string; index: number; mode?: 'default' | 'wrong' | 'correct'; isSelected?:boolean; }) => {
    return <>
        <button className={cn('flex gap-3 border-2 rounded-xl px-4 py-2', {
            "border-green-400 bg-green-50": mode === 'correct',
            "border-red-400 bg-red-50": mode === 'wrong',
            "hover:border-primary": mode === 'default' && !isSelected,
            "border-primary": mode === 'default' && isSelected
        })}>
            <div>
                <strong className={'font-semibold text-4xl'}>{index + 1}</strong>
            </div>
            <div className={'flex-1 flex-col flex'}>
                <div>
                    <p className={'font-bold text-start'}>{heading}</p>
                </div>
                <div>
                    <p className={'text-start'}>{subHeading}</p>
                </div>
            </div>
        </button>
    </>
}
