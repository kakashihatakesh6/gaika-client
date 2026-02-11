import { HeroSlider } from "@/components/features/HeroSlider";
import { Zap, BarChart3, Settings2 } from "lucide-react";
import { getHeroes } from "@/lib/services";

export default async function Home() {
  let heroes = undefined;
  try {
    heroes = await getHeroes();
  } catch (error) {
    console.error("Failed to fetch heroes:", error);
  }

  return (
    <div className="flex flex-col gap-0 font-sans">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSlider heroes={heroes} />
      </section>

      {/* Intro Text */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-normal leading-relaxed max-w-5xl mx-auto text-gray-700">
          At <span className="text-blue-600 font-bold">Giakaa</span>, we empower enterprises to compete with industry giants by
          delivering world-class technology solutions, streamlined operations, and
          specialized expertise, without the overhead of building it all in-house.
        </h2>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="bg-[#020617] text-white py-24 border-y border-white/5">
        <div className="container mx-auto px-8">
          <h3 className="text-white font-bold mb-16 text-lg tracking-wide">
            Global Scale. Local Expertise. Proven Results.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-normal">20+</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">Countries<br /><span className="text-green-500 font-bold text-xs uppercase tracking-wider">+5 This Year</span></p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-normal">24/7</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">Global<br />Support</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-normal">240+</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">Projects Delivered<br /><span className="text-green-500 font-bold text-xs uppercase tracking-wider">+20% Growth YoY</span></p>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-normal">40+</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">Industries<br />Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Giakaa Section */}
      <section className="bg-white text-black py-32">
        <div className="container mx-auto px-8">
          <div className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Why Giakaa</h3>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">The intelligent partner for your digital transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-10 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-blue-600">
                <Settings2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Built for the AI Era</h3>
              <p className="text-gray-500 text-sm leading-7">
                Unlike legacy firms retrofitting AI into outdated methodologies, Giakaa was purpose-built with artificial intelligence at our core. Every solution leverages AI, machine learning, and intelligent automation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 border border-indigo-50 rounded-2xl bg-indigo-50/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100/50 rounded-xl flex items-center justify-center mb-8 text-indigo-600">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rapid, High-Impact Delivery</h3>
              <p className="text-gray-500 text-sm leading-7">
                We combine agile methodologies, pre-built AI accelerators, and modern engineering practices to deliver production-ready solutions 3-5x faster than traditional consultancies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-blue-600">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">ROI-Focused Results</h3>
              <p className="text-gray-500 text-sm leading-7">
                Every engagement is designed with clear KPIs and success metrics. We focus relentlessly on outcomes that matter: revenue growth, cost reduction, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
