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
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSlider heroes={heroes} />
      </section>

      {/* Intro Text */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto text-muted-foreground">
          At <span className="text-primary font-bold">Giakaa</span>, we empower enterprises to compete with industry giants by
          delivering world-class technology solutions, streamlined operations, and
          specialized expertise, without the overhead of building it all in-house.
        </h2>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 text-white border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">20+</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Countries<br /><span className="text-green-500">+5 This Year</span></p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">24/7</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Global</p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">240+</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Projects Delivered<br /><span className="text-green-500">+20% Growth YoY</span></p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">40+</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Industries Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Giakaa Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Why Giakaa</h3>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">The intelligent partner for your digital transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Built for the AI Era</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike legacy firms retrofitting AI into outdated methodologies, Giakaa was purpose-built with artificial intelligence at our core. Every solution leverages AI, machine learning, and intelligent automation to deliver adaptive systems that learn and improve over time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-gray-200 rounded-lg bg-blue-50/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid, High-Impact Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We combine agile methodologies, pre-built AI accelerators, and modern engineering practices to deliver production-ready solutions 3-5x faster than traditional consultancies—without compromising quality, security, or scalability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">ROI-Focused Results</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every engagement is designed with clear KPIs and success metrics. We focus relentlessly on outcomes that matter: revenue growth, cost reduction, operational efficiency, customer satisfaction, and competitive differentiation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
