import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function ToastRackStudy() {
  const imageCredits = [
    {
      name: "Toast Rack",
      credit: <>By <a href="https://commons.wikimedia.org/wiki/User:Cjc13" className="underline">Cjc13</a> - Own work, <a href="https://creativecommons.org/licenses/by-sa/3.0" className="underline">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7315475" className="underline">Wikimedia Commons</a></>
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] border-b border-black">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-black/10"></div>
          ))}
        </div>
        <Image 
          src="/toast-rack.jpg" 
          alt="The Toast Rack building" 
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
              THE TOAST RACK
            </h1>
            <div className="w-24 h-1 bg-white mt-4 mb-4"></div>
            <p className="text-xl text-white max-w-2xl">
              A modernist architectural icon in Manchester, designed by Leonard Cecil Howitt
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 p-1">
          Photo by <a href="https://commons.wikimedia.org/wiki/User:Cjc13" className="underline">Cjc13</a> - <a href="https://creativecommons.org/licenses/by-sa/3.0" className="underline">CC BY-SA 3.0</a>
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
                The Toast Rack, officially known as the Hollings Building, is a distinctive modernist structure in Fallowfield, Manchester. Completed in 1960 and designed by the city architect Leonard Cecil Howitt, it earned its nickname due to its unique shape resembling a toast rack.
              </p>
              <p>
                While not technically a brutalist building, the Toast Rack represents an important example of post-war modernist architecture in Britain. It falls more accurately into the categories of modernism or pop architecture, with its playful, almost whimsical structural form that contrasts with the typically more severe and monolithic brutalist style.
              </p>
              <p>
                The building's most distinctive feature is its series of nine concrete arches that form the "rack" structure, connected to a central "spine." Originally built as the Domestic Trades College (later becoming part of Manchester Metropolitan University), the building has since been redeveloped for residential and commercial use after the university relocated in 2013.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 border-l border-black pl-8">
            <h3 className="text-2xl font-bold mb-4 font-bebas">SPECIFICATIONS</h3>
            <ul className="space-y-4">
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">ARCHITECT</span>
                <span className="block text-lg">Leonard Cecil Howitt</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">COMPLETED</span>
                <span className="block text-lg">1960</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">LOCATION</span>
                <span className="block text-lg">Fallowfield, Manchester, UK</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">STYLE</span>
                <span className="block text-lg">Modernist / Pop Architecture</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">ORIGINAL USE</span>
                <span className="block text-lg">Domestic Trades College</span>
              </li>
              <li>
                <span className="block text-sm text-black/60">HERITAGE STATUS</span>
                <span className="block text-lg">Grade II listed (1998)</span>
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
          <div className="relative h-[400px] border border-black bg-gray-100 flex items-center justify-center">
            <p className="text-xl font-bold text-black/30">LEGO MODEL - COMING SOON</p>
          </div>
          <div className="relative h-[400px] border border-black bg-gray-100 flex items-center justify-center">
            <p className="text-xl font-bold text-black/30">LEGO MODEL - COMING SOON</p>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto space-y-8">
          <p>
            While not a brutalist structure, the Toast Rack presents a fascinating challenge for our LEGO interpretation series. Its inclusion represents our interest in expanding beyond strictly brutalist architecture to explore other distinctive modernist buildings that offer unique building challenges.
          </p>
          <p>
            The building's series of concrete arches presents a particularly interesting challenge for LEGO construction. Creating curved structures with rectangular LEGO bricks requires innovative building techniques and careful planning to capture the distinctive silhouette that earned the building its nickname.
          </p>
          <p>
            Our approach will focus on capturing the playful, almost sculptural quality of the building, which stands in contrast to the more severe brutalist structures in our collection. This modernist/pop architecture example will provide an interesting counterpoint to our brutalist studies and demonstrate how different architectural styles can be interpreted through the medium of LEGO.
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
                The process of translating the Toast Rack into LEGO form begins with studying the building's unique structural elements. The primary challenge lies in recreating the curved arches that give the building its distinctive appearance using primarily rectangular LEGO elements.
              </p>
              <p>
                We're exploring various techniques for creating smooth curves with LEGO, including the use of hinge pieces, specialized curved elements, and clever stacking methods that can create the illusion of a curve through small incremental offsets.
              </p>
              <p>
                The model will also need to capture the relationship between the arched "rack" structure and the adjoining buildings, creating a balanced composition that highlights the building's playful yet functional design. We estimate the final model will use approximately 1,800 pieces and stand 40cm in length.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[500px] border border-black bg-gray-100 flex items-center justify-center">
            <p className="text-2xl font-bold text-black/30">DESIGN SKETCHES - COMING SOON</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentPage="toast-rack" imageCredits={imageCredits} />
    </main>
  );
} 