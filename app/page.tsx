import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  const imageCredits = [
    {
      name: "Shakespeare Tower",
      credit: <>Photo by <a href="https://unsplash.com/@blackprojection" className="underline">Max Letek</a> on <a href="https://unsplash.com/photos/grey-ladder-4inn20RqF4k" className="underline">Unsplash</a></>
    },
    {
      name: "Trellick Tower",
      credit: <>Photo by <a href="https://unsplash.com/@theblowup" className="underline">the blowup</a> on <a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-oIOLbe6A4Bs" className="underline">Unsplash</a></>
    },
    {
      name: "Balfron Tower",
      credit: <>By <a href="https://commons.wikimedia.org/wiki/User:Cianboy" className="underline">Cianboy</a> - Own work, <a href="https://creativecommons.org/licenses/by-sa/4.0" className="underline">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=37863765" className="underline">Wikimedia Commons</a></>
    },
    {
      name: "Toast Rack",
      credit: <>By <a href="https://commons.wikimedia.org/wiki/User:Cjc13" className="underline">Cjc13</a> - Own work, <a href="https://creativecommons.org/licenses/by-sa/3.0" className="underline">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7315475" className="underline">Wikimedia Commons</a></>
    },
    {
      name: "Creative Workspace",
      credit: <>Photo by Brutal Bricks</>
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full h-screen border-b border-black">
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-black/10"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-full border-b border-black/10"></div>
          ))}
        </div>
        <Image 
          src="/shakespear-tower-detail.jpg" 
          alt="Shakespeare Tower brutalist architecture" 
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center border-t border-b border-white/30 bg-black/20 backdrop-blur-sm w-full py-8">
            <h1 className="text-[25vw] md:text-[20vw] font-bold tracking-wider text-white font-bebas leading-[0.85] mb-6">
              BRUTAL BRICKS
            </h1>
            <div className="w-full h-px bg-white/50 max-w-4xl mx-auto"></div>
            <p className="text-xl md:text-2xl text-white font-light tracking-wide max-w-3xl mx-auto py-6">
              BRUTALIST ARCHITECTURE REIMAGINED IN LEGO
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 p-1">
          Photo by <a href="https://unsplash.com/@blackprojection" className="underline">Max Letek</a> on <a href="https://unsplash.com/photos/grey-ladder-4inn20RqF4k" className="underline">Unsplash</a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 border-r md:border-r-black pr-8">
            <div className="border-t border-l border-black pt-4 pl-4">
              <h2 className="text-5xl font-bold tracking-tight mb-8">THE PROJECT</h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="text-xl leading-relaxed mb-6">
                Brutal Bricks celebrates the raw, geometric beauty of brutalist architecture through the medium of LEGO bricks.
              </p>
              <p className="text-xl leading-relaxed">
                We explore how the modular nature of LEGO perfectly complements the bold, concrete forms of brutalist buildings, creating a dialogue between playfulness and architectural seriousness.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[500px] w-full border border-black">
            <Image 
              src="/trellick-detail.jpg" 
              alt="Trellick Tower detail" 
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              TRELLICK TOWER, LONDON
            </div>
            <div className="absolute top-0 left-0 bg-black text-white text-xs p-1">
              Photo by <a href="https://unsplash.com/@theblowup" className="underline">the blowup</a> on <a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-oIOLbe6A4Bs" className="underline">Unsplash</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Barbican Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative h-[500px] w-full border border-black order-2 md:order-1">
            <Image 
              src="/barbican-detail.jpg" 
              alt="Barbican Estate detail" 
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              BARBICAN ESTATE, LONDON
            </div>
            <div className="absolute top-0 left-0 bg-black text-white text-xs p-1">
              Photo by <a href="https://unsplash.com/@leozog" className="underline">Leo Zoghaib</a> on <a href="https://unsplash.com/photos/brown-and-white-concrete-building-TBhJiv9zP0o" className="underline">Unsplash</a>
            </div>
          </div>
          <div className="md:col-span-5 border-l md:border-l-black pl-8 order-1 md:order-2">
            <div className="border-t border-r border-black pt-4 pr-4">
              <h2 className="text-5xl font-bold tracking-tight mb-8">ICONIC FORMS</h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="text-xl leading-relaxed mb-6">
                The Barbican Estate stands as one of London's most distinctive brutalist landmarks, with its textured concrete surfaces and geometric forms creating a unique urban landscape.
              </p>
              <p className="text-xl leading-relaxed">
                Our LEGO interpretations capture the distinctive barrel-vaulted roofs and layered balconies that make this complex an architectural treasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-black text-white border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-12">
            <div className="w-12 h-px bg-white mr-4"></div>
            <h2 className="text-5xl font-bold tracking-tight">FEATURED WORKS</h2>
            <div className="w-12 h-px bg-white ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px">
            {/* First gallery item - Shakespeare Tower (Coming Soon) */}
            <div className="relative h-[400px] border border-white/10 p-px mb-6 md:mb-0">
              <div className="absolute inset-0 grid grid-cols-8 pointer-events-none z-10">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-full border-r border-white/5"></div>
                ))}
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                <div className="border border-white/30 px-6 py-3">
                  <p className="font-bebas text-2xl tracking-wider text-white">COMING SOON</p>
                </div>
              </div>
              <Image 
                src="/shakespear-tower-detail.jpg" 
                alt="Shakespeare Tower LEGO creation" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs tracking-wider">
                SHAKESPEARE TOWER STUDY
              </div>
            </div>
            
            {/* Second gallery item - Balfron Tower */}
            <Link href="/studies/balfron-tower" className="block cursor-pointer">
              <div className="relative h-[400px] border border-white/10 p-px mb-6 md:mb-0 transition-all duration-300 hover:border-white/30">
                <div className="absolute inset-0 grid grid-cols-8 pointer-events-none z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-full border-r border-white/5"></div>
                  ))}
                </div>
                <Image 
                  src="/balfron-tower.jpg" 
                  alt="Balfron Tower LEGO creation" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs tracking-wider">
                  BALFRON TOWER STUDY
                </div>
              </div>
            </Link>
            
            {/* Third gallery item - Toast Rack */}
            <Link href="/studies/toast-rack" className="block cursor-pointer">
              <div className="relative h-[400px] border border-white/10 p-px transition-all duration-300 hover:border-white/30">
                <div className="absolute inset-0 grid grid-cols-8 pointer-events-none z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-full border-r border-white/5"></div>
                  ))}
                </div>
                <Image 
                  src="/toast-rack.jpg" 
                  alt="Toast Rack LEGO creation" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs tracking-wider">
                  TOAST RACK STUDY
                </div>
              </div>
            </Link>
          </div>
          <div className="text-xs text-white/50 mt-4 text-right">
            Images: Max Letek, the blowup, Cianboy (CC BY-SA 4.0) & Cjc13 (CC BY-SA 3.0)
          </div>
        </div>
      </section>

      {/* Our Brick Philosophy / Brutal Fun */}
      <section className="py-20 px-6 border-b border-black">
        <div className="max-w-4xl mx-auto">
          <div className="pl-8">
            <h2 className="text-5xl font-bold tracking-tight mb-12">BRUTAL FUN</h2>
            <div className="text-xl leading-relaxed space-y-6 relative">
              <div className="absolute left-[-2.5rem] top-0 bottom-0 w-px bg-black/20"></div>
              <p className="border-t border-black/10 pt-6">
                Brutalism emerged in the 1950s as an honest expression of materials, structure, and function. Its name derives from the French term "béton brut" (raw concrete), championed by architects like Le Corbusier.
              </p>
              <p className="border-t border-black/10 pt-6">
                At Brutal Bricks, we believe these monumental concrete forms deserve celebration. Their bold geometries, textural qualities, and uncompromising presence represent an important architectural movement that continues to influence design today.
              </p>
              
              <div className="border-t border-black/10 pt-6">
                <div className="relative h-[500px] border border-black mb-6">
                  <Image 
                    src="/messy-desk.jpg" 
                    alt="Creative workspace with LEGO bricks and architectural sketches" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
                    THE CREATIVE PROCESS
                  </div>
                </div>
              </div>
              
              <p className="border-t border-black/10 pt-6">
                Through LEGO, we find a perfect medium to explore and interpret these structures—both are modular, both celebrate their materiality, and both challenge us to think about space in new ways.
              </p>
              <p className="border-t border-black/10 pt-6">
                Beyond architectural exploration, we've discovered that LEGO is a powerful creative outlet that expands the mind. The process of translating complex brutalist forms into these small plastic bricks forces us to think differently about scale, proportion, and essential design elements—a wonderfully challenging exercise that brings joy through creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentPage="home" imageCredits={imageCredits} />
    </main>
  );
} 