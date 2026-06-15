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
       Anda akan dialihkan secara automatik ke laman web rasmi. Sila jangan risau sekiranya nama jenama kelihatan berbeza, kerana perkara ini adalah disebabkan oleh keperluan polisi.

      </p>
      <StickyCTA />
    </div>
  )
}
