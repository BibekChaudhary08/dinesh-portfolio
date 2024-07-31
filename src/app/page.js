import About from '@/components/about/About'
import Awards from '@/components/awards/Awards'
import Events from '@/components/events/Events'
import Hero from '@/components/hero/Hero'
import Motivation from '@/components/motivation/Motivation'
import ViewAll from '@/components/view-all/ViewAll'
import React from 'react'

const page = () => {
  return (
    <div>
       <Hero /> 
       <About />
       <Motivation />
       <Awards />
       <ViewAll />
       {/*<Events /> */}
    </div>
  )
}

export default page