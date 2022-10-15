import { Alert } from 'flowbite-react'
import AboutSection from '../components/About/AboutSection'
import EventSection from '../components/Events/EventSection'
import ExcosSections from '../components/Excos/ExcosSections'
import GallerySection from '../components/Gallery/GallerySection'
import HeroSection from '../components/HeroSection/HeroSection'
import IndexNavbar from '../components/Navbar/Navbar'
import ResponsilbiltySection from '../components/Responsibility/ResponsilbiltySection'

export default function Home() {
  return (
    <>
      <IndexNavbar/>
      <HeroSection/>
      <AboutSection/>
      <GallerySection/>
      <ResponsilbiltySection/>
      <EventSection/>
      <ExcosSections/>
    </>
  )
}
