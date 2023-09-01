import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Homepage_about from '@/components/Homepage_about'
import Why_chatter from '@/components/Why_chatter'
import Testimonial from '@/components/Testimonial'
import Write_section from '@/components/Write'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Homepage_about />
      <Why_chatter />
      <Testimonial/>
      <Write_section />
      
    </Layout>
  )
}
