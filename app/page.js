import Splash from './components/Splash'
import Sections from './components/Sections'
import Descriptions from './components/Descriptions'
import ImageBar from './components/ImageBar'
import CallToAction from './components/CallToAction'
import NavBar from './components/NavBar'
import { Video } from './components/Video'
import { Instructor } from './components/Instructor'
import { SocialProof } from './components/SocialProof'


export default function Home() {
  return (
    <main>
      <Video>
        <NavBar />
        <Splash />
        
        <Sections />
      </Video>

        <Descriptions />
        <Instructor />
        <SocialProof />
        <ImageBar />
        <CallToAction />
    </main>
  )
}
