import Hero from './components/Hero'
import EventCarousel from './components/EventCarousel'
import HowToJoin from './components/HowToJoin'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-ink overflow-x-hidden">
      <Hero />
      <EventCarousel />
      <HowToJoin />
      {/* 18+ notice */}
      <p className="text-center font-body text-ice/20 text-xs px-6 py-6 leading-relaxed pb-24">
        18+ sahaja. Judi dengan bertanggungjawab. i88 menyokong perjudian bertanggungjawab.
        Talian bantuan SG: 1800-6-668-668 · Talian bantuan MY: 1-800-88-3151
      </p>
      <StickyCTA />
    </div>
  )
}
