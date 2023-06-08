import ExperiencesBrief from '@/components/home/ExpBrief'
import ProfileBrief from '@/components/home/ProfileBrief'
import ProjectsBrief from '@/components/home/ProjectsBrief'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-30">
       <div> 
        <ProfileBrief/> 
        {/* <ProjectsBrief/>
        <ExperiencesBrief/> */}
        </div>

    </main>
  )
}
