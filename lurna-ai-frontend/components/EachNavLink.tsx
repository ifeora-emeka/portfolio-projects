import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

type Props = {
    label: string;
    isActive?:boolean;
    route: string;
    Icon: LucideIcon;
}

export default function EachNavLink({label, route, isActive, Icon}:Props) {
  return (
    <>
        <Link href={route} className={cn('flex gap-2 items-center p-2 rounded-xl hover:bg-primary/5', {
            "bg-primary/5 font-semibold": isActive
        })}>
            <Icon />
            <p>{label}</p>
        </Link>
    </>
  )
}
