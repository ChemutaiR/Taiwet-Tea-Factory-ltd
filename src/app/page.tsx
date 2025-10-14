import FeaturedCarousel from "@/components/shared/FeaturedCarousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section with background image and overlay text */}
      <section
        className="relative min-h-[50vh] w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/backgorund.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-16 sm:px-6">
          <div className="max-w-2xl text-white bg-black/35 rounded-md p-4 sm:p-6">
            <p className="mb-2 inline-block rounded bg-white/20 px-3 py-1 text-xs uppercase tracking-wide">Taiwet • Sustainably Sourced</p>
            <h1 className="text-3xl font-semibold sm:text-5xl">Welcome to Taiwet</h1>
            <p className="mt-3 text-sm sm:text-base text-white/90">
              Premium tea leaves from around the world, carefully sourced and expertly processed.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#featured" className="rounded bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b]">Explore Collection</a>
              <a href="#about" className="rounded border border-white/70 px-4 py-2 text-white hover:bg-white/10">About Taiwet</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">About Taiwet</h2>
        <div className="mt-6 space-y-4 text-gray-800">
          <p>
            Since 2023, Taiwet combines modern technology with traditional craftsmanship to produce premium tea leaves. 
            Our state-of-the-art facility uses precision steam treatment, automated cutting, and climate-controlled fermentation 
            to ensure consistent quality while preserving the natural essence of each tea variety.
          </p>
          <p>
            We source directly from premium tea gardens and maintain strict quality control throughout our processing pipeline. 
            Our commitment to sustainability and innovation makes us a trusted partner for tea enthusiasts and businesses worldwide.
          </p>
        </div>
      </section>

      {/* Factory Process Sections (alternating image/text) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl text-gray-900">How Our Tea Is Made</h2>
        <p className="mt-2 text-gray-600">A step-by-step look at our modern process from leaf to cup.</p>
        <div className="mb-12"></div>
        {/* 1. Plucking */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div>
            <img src="/picking.jpg" alt="Plucking tea leaves" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div>
            <h3 className="text-lg font-medium">1. Plucking (Harvesting)</h3>
            <p className="mt-2 text-sm text-gray-700">Young shoots — the top two leaves and a bud — are carefully picked at peak freshness from Camellia sinensis bushes. Skilled harvesters select only tender leaves to ensure clean flavor and balanced astringency. The timing of the pluck, weather conditions, and elevation all influence the eventual aroma and quality in the cup.</p>
          </div>
        </div>

        {/* 2. Withering */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div className="md:order-2">
            <img src="/withering.jpg" alt="Withering tea leaves" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div className="md:order-1">
            <h3 className="text-lg font-medium">2. Withering</h3>
            <p className="mt-2 text-sm text-gray-700">Fresh leaves are spread on withering troughs where cool, controlled air reduces moisture by 30–50%. This gentle dehydration makes the leaves supple for shaping and helps activate natural enzymes. Proper withering develops foundational aromas and prevents grassy notes from dominating.</p>
          </div>
        </div>

        {/* 3. Rolling / Cutting */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div>
            <img src="/sorting.jpg" alt="Rolling and cutting tea leaves" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div>
            <h3 className="text-lg font-medium">3. Rolling / Cutting</h3>
            <p className="mt-2 text-sm text-gray-700">Leaves are shaped using traditional rolling or modern CTC (Crush–Tear–Curl) equipment. This step gently breaks cell walls to release essential juices and expose polyphenols to oxygen. The chosen method and pressure determine particle size, texture, and the body of the final infusion.</p>
          </div>
        </div>

        {/* 4. Fermentation (Oxidation) */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div className="md:order-2">
            <img src="/fermenting.jpg" alt="Fermentation of tea" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div className="md:order-1">
            <h3 className="text-lg font-medium">4. Fermentation (Oxidation)</h3>
            <p className="mt-2 text-sm text-gray-700">Rolled leaves rest in carefully managed humidity and temperature so natural oxidation can unfold. Polyphenols transform, turning the leaf from green to coppery brown while building signature malt, floral, or fruity notes. Precision control here defines the character of black tea and keeps flavors clean and consistent.</p>
          </div>
        </div>

        {/* 5. Drying (Firing) */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div>
            <img src="/dryer.jfif" alt="Drying tea leaves" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div>
            <h3 className="text-lg font-medium">5. Drying (Firing)</h3>
            <p className="mt-2 text-sm text-gray-700">Warm, filtered air passes through the leaves to halt enzymatic activity and reduce moisture to roughly 2–3%. This locks in the desired flavor profile, improves shelf stability, and produces the familiar deep brown to black appearance. Even drying protects against bitterness and preserves a smooth finish.</p>
          </div>
        </div>

        {/* 6. Sorting and Grading */}
        <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
          <div className="md:order-2">
            <img src="/sorting.jpg" alt="Sorting and grading tea" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div className="md:order-1">
            <h3 className="text-lg font-medium">6. Sorting & Grading</h3>
            <p className="mt-2 text-sm text-gray-700">After firing, teas are sifted through graded meshes and inspected for size, shape, and appearance. Lots are separated into whole leaf, broken, fannings, and dust to match different brewing methods and strength preferences. Consistent grading ensures reliable flavor and infusion times across batches.</p>
          </div>
        </div>

        {/* 7. Packing and Storage */}
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <img src="/backgorund.jpg" alt="Packing and storage" className="h-60 w-full rounded-lg object-cover md:h-72" />
          </div>
          <div>
            <h3 className="text-lg font-medium">7. Packing & Storage</h3>
            <p className="mt-2 text-sm text-gray-700">Finished teas are sealed in moisture- and light-resistant packaging to protect delicate aromatics. Warehouses maintain cool, dry conditions to prevent flavor drift and humidity damage. Each lot is labeled for traceability so quality remains verifiable from garden to cup.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Featured Products</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Discover our most popular tea selections.
        </p>
        <div className="mt-8">
          <FeaturedCarousel />
        </div>
      </section>

      {/* Contact Area: form left, info cards stacked right */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Form (left, spans two columns) */}
          <div className="md:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold sm:text-3xl">Get in Touch</h2>
              <p className="mt-2 text-gray-600">
                Interested in our tea products or wholesale opportunities? Send us an enquiry.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                  <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]" />
                </div>
                <div>
                  <label htmlFor="enquiry-type" className="block text-sm font-medium text-gray-700">Enquiry Type</label>
                  <select id="enquiry-type" name="enquiry-type" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]">
                    <option value="">Select an option</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="retail">Retail Products</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Information</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#2e7d32] focus:outline-none focus:ring-1 focus:ring-[#2e7d32]" placeholder="Tell us about your tea needs or any questions you have..."></textarea>
                </div>
                <button type="submit" className="w-full rounded-md bg-[#2e7d32] px-4 py-2 text-white hover:bg-[#276a2b] focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:ring-offset-2 sm:w-auto">Send Enquiry</button>
              </form>
            </div>
          </div>
          {/* Info cards (right, stacked vertically) */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">info@taiwet.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-gray-600">123 Tea Garden Lane<br />Processing City, TC 12345</p>
              <p className="text-sm text-gray-500">Visit by appointment</p>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
