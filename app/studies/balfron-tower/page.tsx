import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function BalfronTowerStudy() {
  const imageCredits = [
    {
      name: "Balfron Tower",
      credit: <>By <a href="https://commons.wikimedia.org/wiki/User:Cianboy" className="underline">Cianboy</a> - Own work, <a href="https://creativecommons.org/licenses/by-sa/4.0" className="underline">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=37863765" className="underline">Wikimedia Commons</a></>
    },
    {
      name: "LEGO Models",
      credit: <>Original creations by Brutal Bricks</>
    }
  ];

  return (
    <main className="min-h-screen text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] border-b border-black">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-black/10"></div>
          ))}
        </div>
        <Image 
          src="/balfron-tower.jpg" 
          alt="Balfron Tower detail" 
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-8 md:p-16">
          <div>
            <Link href="/" className="inline-block mb-6 border border-white/50 px-4 py-2 text-white hover:bg-white/10 transition-colors">
              ← BACK TO HOME
            </Link>
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white font-bebas leading-[0.85]">
              BALFRON TOWER
            </h1>
            <div className="w-24 h-1 bg-white mt-4 mb-4"></div>
            <p className="text-xl text-white max-w-2xl">
              Ernő Goldfinger's first tower block and the prototype for Trellick Tower, completed in 1967
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 p-1">
          Photo by <a href="https://commons.wikimedia.org/wiki/User:Cianboy" className="underline">Cianboy</a> - <a href="https://creativecommons.org/licenses/by-sa/4.0" className="underline">CC BY-SA 4.0</a>
        </div>
      </div>

      {/* Study Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-5xl font-bold tracking-tight mb-8 font-bebas">THE BUILDING</h2>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <div className="prose prose-lg max-w-none space-y-8">
              <p>
                Balfron Tower, standing at 26 stories tall (84 meters), is a significant brutalist residential building in Poplar, East London. Designed by architect Ernő Goldfinger and completed in 1967, it served as the prototype for his later and more famous Trellick Tower.
              </p>
              <p>
                Like its successor, Balfron Tower features a distinctive separate service tower connected to the main building by walkways. This innovative design separates the lifts and services from the residential units, reducing noise and creating a striking architectural silhouette that has become emblematic of post-war brutalist architecture in Britain.
              </p>
              <p>
                Goldfinger famously moved into Flat 130 on the 26th floor for two months after the building's completion to experience the living conditions firsthand and gather feedback from residents. This unusual approach demonstrated his commitment to social housing that was both functional and aesthetically significant.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 border-l border-black pl-8">
            <h3 className="text-2xl font-bold mb-4 font-bebas">SPECIFICATIONS</h3>
            <ul className="space-y-4">
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">ARCHITECT</span>
                <span className="block text-lg">Ernő Goldfinger</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">COMPLETED</span>
                <span className="block text-lg">1967</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">HEIGHT</span>
                <span className="block text-lg">84 meters (26 floors)</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">LOCATION</span>
                <span className="block text-lg">Poplar, East London</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">STYLE</span>
                <span className="block text-lg">Brutalism</span>
              </li>
              <li>
                <span className="block text-sm text-black/60">HERITAGE STATUS</span>
                <span className="block text-lg">Grade II* listed (1996)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEGO Interpretation */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-black">
        <h2 className="text-5xl font-bold tracking-tight mb-8 font-bebas">LEGO INTERPRETATION</h2>
        <div className="w-24 h-1 bg-black mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] border border-black">
            <Image 
              src="/balfron-p1-lego-w-aspect.jpg" 
              alt="Balfron Tower LEGO prototype - west aspect" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              PROTOTYPE - WEST ASPECT
            </div>
          </div>
          <div className="relative h-[400px] border border-black">
            <Image 
              src="/balfron-p1-lego-e-aspect.jpg" 
              alt="Balfron Tower LEGO prototype - east aspect" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              PROTOTYPE - EAST ASPECT
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto space-y-8">
          <p>
            Our LEGO interpretation of Balfron Tower aims to capture the distinctive architectural elements that make this building a brutalist icon. The model emphasizes the relationship between the main residential tower and the separate service tower, connected by the characteristic walkways.
          </p>
          <p>
            Using primarily light and dark gray bricks, we've recreated the textured concrete surfaces and geometric patterns of the façade. The model maintains the brutalist principle of honest expression of materials and structure, with each LEGO element serving both an aesthetic and structural purpose.
          </p>
          <p>
            A particular focus has been placed on the distinctive top of the service tower, with its boiler room and unique silhouette, as well as the rhythmic pattern of the balconies that give the building its distinctive visual identity.
          </p>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-bold tracking-tight mb-8 font-bebas">DESIGN PROCESS</h2>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <div className="prose prose-lg space-y-8">
              <p>
                The process of translating Balfron Tower into LEGO form began with extensive research into the building's history, architectural drawings, and photographs from various angles. We studied the building's proportions, structural elements, and distinctive features to determine how best to represent them using LEGO bricks.
              </p>
              <p>
                Our approach involved creating several prototypes, each refining the representation of key elements like the service tower, connecting walkways, and the distinctive balcony pattern. The final model uses approximately 100 pieces and stands 9cm tall.
              </p>
              <p>
                The model is designed to be viewed from multiple angles, with each perspective revealing different aspects of the building's architectural composition and its relationship to Goldfinger's later work on Trellick Tower.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[500px] border border-black">
            <Image 
              src="/balfron-notes-1.jpg" 
              alt="Balfron Tower LEGO model - front view" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              INITIAL NOTES ON SCALE AND DISTINCTIVE FEATURES
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentPage="balfron-tower" imageCredits={imageCredits} />
    </main>
  );
} 