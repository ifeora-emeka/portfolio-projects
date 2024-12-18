import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft } from 'lucide-react'
import TrackSuggestion from './TrackSuggestion'


const formSchema = z.object({
    track: z.string().min(1, { message: "Track name is required" }),
    level: z.string().min(1, { message: "Level of understanding is required" }),
})

type LearningPreferencesFormProps = {
    onSubmit: (data: z.infer<typeof formSchema>) => void
    isLoading: boolean
}

export default function CreateTrackModal({
    children
}: {
    children: React.ReactNode
}) {
    const [step, setStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            track: "",
            level: "",
        },
    })

    const onSubmit = () => {
        if (step === 0) {
            setStep(1)
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className='flex items-center gap-3'>
                            {
                                step > 0 ? <button onClick={() => setStep(0)}>
                                    <ChevronLeft />
                                </button> : null
                            }
                            <div>
                                <DialogTitle>
                                    Are you ready to start learning?
                                </DialogTitle>
                                <DialogDescription>
                                    You're about to begin your new learning journey.
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    {
                        step === 0 ? <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="track"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Track</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Frontend Development" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="level"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Level of Understanding</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your level" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="beginner">Beginner</SelectItem>
                                                    <SelectItem value="experienced">Experienced</SelectItem>
                                                    <SelectItem value="expert">Expert</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? "Getting Suggestions..." : "Fine, Get Suggestions"}
                                </Button>
                            </form>
                        </Form> : null
                    }
                    {
                        step === 1 ? <TrackSuggestion userInput={userInput} experienceLevel={experienceLevel} />: null
                    }
                </DialogContent>
            </Dialog>

        </>
    )
}
