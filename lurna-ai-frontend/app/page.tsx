'use client'
import DashboardBody from '@/components/dashboard/DashboardBody'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import CreateTrackModal from '@/components/dashboard/track-list/create-track-modal/CreateTrackModal'
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <>
      <DashboardLayout
        heading='Learning tracks'
        subHeading='Select existing tracks or create a new one'
        Icon={LayoutGrid}
        rightComponent={
          <CreateTrackModal>
            <Button size='sm'>Create new</Button>
          </CreateTrackModal>
        }
      >
        <DashboardBody />
      </DashboardLayout>
    </>
  )
}
