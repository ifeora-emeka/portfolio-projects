import Container from '@/components/Container'
import DashboardBody from '@/components/dashboard/DashboardBody'
import DashboardLeftNav from '@/components/dashboard/DashboardLeftNav'
import HallOfFameList from '@/components/dashboard/HallOfFameList'
import SessionHeader from '@/components/session/SessionHeader'
import React from 'react'

export default function page() {
  return (
    <>
      <div
        className='min-h-screen bg-background max-h-screen flex flex-col select-none p-2'>
        <SessionHeader />
        <div className='flex-1 py-2'>
          <Container>
            <div className={'flex gap-2'}>
              <div className='xl:w-[20%]'>
                <DashboardLeftNav />
              </div>
              <div className={'flex-1'}>
                <DashboardBody />
              </div>
              <div className={'xl:w-[25%]'}>
                <div className='p-3 rounded-xl'>
                  <HallOfFameList />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
