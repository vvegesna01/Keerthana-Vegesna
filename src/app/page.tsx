import ProfileBrief from '@/components/home/ProfileBrief'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-30">
       <div> 
        <ProfileBrief/> 
        </div>

    </main>
  )
}
