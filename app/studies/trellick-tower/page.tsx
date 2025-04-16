import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TrellickTowerStudy() {
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
          src="/trellick-detail.jpg" 
          alt="Trellick Tower detail" 
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
              TRELLICK TOWER
            </h1>
            <div className="w-24 h-1 bg-white mt-4 mb-4"></div>
            <p className="text-xl text-white max-w-2xl">
              A brutalist masterpiece by architect Ernő Goldfinger, completed in 1972
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-xs bg-black/50 p-1">
          Photo by <a href="https://unsplash.com/@theblowup" className="underline">the blowup</a> on <a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-oIOLbe6A4Bs" className="underline">Unsplash</a>
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
                Standing at 31 stories tall (98 meters), Trellick Tower is one of London's most recognizable brutalist landmarks. Designed by Hungarian-born architect Ernő Goldfinger and completed in 1972, the building exemplifies the raw concrete aesthetic and bold structural expression that defines brutalist architecture.
              </p>
              <p>
                The tower's most distinctive feature is its separate service tower, connected to the main building by walkways at every third floor. This design element not only creates a striking visual composition but also serves a practical purpose by isolating noisy elevator machinery and services from the residential units.
              </p>
              <p>
                Despite initial criticism and a period of decline, Trellick Tower has experienced a remarkable renaissance. It received Grade II* listed status in 1998, recognizing its architectural significance, and has become a cultural icon featured in numerous films, music videos, and artworks.
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
                <span className="block text-lg">1972</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">HEIGHT</span>
                <span className="block text-lg">98 meters (31 floors)</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">LOCATION</span>
                <span className="block text-lg">North Kensington, London</span>
              </li>
              <li className="border-b border-black/10 pb-2">
                <span className="block text-sm text-black/60">STYLE</span>
                <span className="block text-lg">Brutalism</span>
              </li>
              <li>
                <span className="block text-sm text-black/60">HERITAGE STATUS</span>
                <span className="block text-lg">Grade II* listed (1998)</span>
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
              src="/trellick-lego-1.jpg" 
              alt="Trellick Tower LEGO model" 
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              LEGO MODEL - FRONT VIEW
            </div>
          </div>
          <div className="relative h-[400px] border border-black">
            <Image 
              src="/trellick-lego-2.jpg" 
              alt="Trellick Tower LEGO model detail" 
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              LEGO MODEL - SERVICE TOWER DETAIL
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto space-y-8">
          <p>
            Our LEGO interpretation of Trellick Tower focuses on capturing the distinctive silhouette and structural elements that make this building iconic. The model emphasizes the relationship between the main residential tower and the separate service tower, connected by the characteristic walkways.
          </p>
          <p>
            Using a limited palette of gray bricks, we've recreated the textured concrete surfaces and geometric patterns of the façade. The model maintains the brutalist principle of honest expression of materials and structure, with each LEGO element serving both an aesthetic and structural purpose.
          </p>
          <p>
            The challenge in recreating Trellick Tower in LEGO form was balancing detail with abstraction. We chose to emphasize the building's most distinctive elements—the service tower, the walkways, and the rhythmic pattern of windows and balconies—while simplifying other aspects to create a recognizable yet stylized representation.
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
                The process of translating Trellick Tower into LEGO form began with extensive research and architectural drawings. We studied the building's proportions, structural elements, and distinctive features to determine how best to represent them using LEGO bricks.
              </p>
              <p>
                Several prototypes were developed, each refining the representation of key elements like the service tower and connecting walkways. The final model uses approximately 2,500 pieces and stands 60cm tall.
              </p>
              <p>
                The model is designed to be viewed from multiple angles, with each perspective revealing different aspects of the building's architectural composition.
              </p>
            </div>
          </div>
          <div className="md:col-span-7 relative h-[500px] border border-black">
            <Image 
              src="/trellick-sketch.jpg" 
              alt="Trellick Tower design sketch" 
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-2">
              DESIGN SKETCH AND PLANNING
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-white/20 pt-8">
            <div className="md:col-span-4">
              <p className="text-2xl font-bold tracking-tight font-bebas">BRUTAL BRICKS</p>
              <Link href="/" className="text-white/70 hover:text-white mt-2 inline-block">
                Return to home
              </Link>
            </div>
            <div className="md:col-span-4 md:border-l md:border-r border-white/20 md:px-4">
              <p className="text-sm">© {new Date().getFullYear()}</p>
            </div>
            <div className="md:col-span-4 text-right">
              <p className="text-sm tracking-wide">CELEBRATING BRUTALIST ARCHITECTURE THROUGH LEGO</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/50">
            <p>Image Credits:</p>
            <p className="mt-1">Trellick Tower: Photo by <a href="https://unsplash.com/@theblowup" className="underline">the blowup</a> on <a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-oIOLbe6A4Bs" className="underline">Unsplash</a></p>
            <p className="mt-1">Note: LEGO model and sketch images are placeholders and would need to be replaced with actual project images.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 