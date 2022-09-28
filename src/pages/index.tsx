import * as React from 'react'

import { HeaderBar } from '../components/ecosystems/Header'
import { Hero } from '../components/ecosystems/Hero'
import { Services } from '../components/ecosystems/Services'
import { Budget } from '../components/ecosystems/Budget'
import { Cases } from '../components/ecosystems/Cases'
import { Clients } from '../components/ecosystems/Clients'
import { About } from '../components/ecosystems/About'
import { Contact } from '../components/ecosystems/Contact'
import { Footer } from '../components/ecosystems/Footer'
import { FloatButton } from '../components/atoms/FloatButton'

export const Home = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <Hero />
        <Services />
        <Budget />
        <Cases />
        <Budget />
        <Clients />
        <Budget />
        <About />
        <Budget />
        <Contact />
      </main>
      <Footer />
      <FloatButton />
    </>
  )
}
