import Splash from './components/Splash'
import Sections from './components/Sections'
import Descriptions from './components/Descriptions'
import ImageBar from './components/ImageBar'
import CallToAction from './components/CallToAction'
import NavBar from './components/NavBar'


export default function Home() {
  return (
    <main>
      <NavBar />
        <Splash />
        <Sections />
        <Descriptions />
        <ImageBar />
        <CallToAction />
    </main>
  )
}
