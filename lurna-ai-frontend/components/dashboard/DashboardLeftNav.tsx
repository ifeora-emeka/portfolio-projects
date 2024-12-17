'use client'
import React from 'react'
import SectionCard from '../session/SectionCard'
import { DollarSign, GraduationCap, Wallet } from 'lucide-react'
import EachNavLink from '../EachNavLink'

export default function DashboardLeftNav() {
  return (
    <>
        <SectionCard
            heading='Menu'
            verient='ghost'
        >
            <div className='py-3'>
              <EachNavLink label='Learning tracks' route='/' Icon={GraduationCap} isActive />
              <EachNavLink label='Wallet' route='/wallet' Icon={Wallet} />
              <EachNavLink label='Usage and billing' route='/billing' Icon={DollarSign} />
            </div>
        </SectionCard>

    </>
  )
}
