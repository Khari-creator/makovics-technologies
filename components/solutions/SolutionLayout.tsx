import CallToAction from "@/components/sections/CallToAction";

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  audience: string[];
  benefits: string[];
}

export default function SolutionLayout({
  title,
  subtitle,
  description,
  features,
  audience,
  benefits,
}: SolutionLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
          <p className="mt-4 text-xl text-blue-400">{subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            {description}
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Core System Modules
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-gray-200 p-5 bg-gray-50"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Who This Solution Is For
          </h2>

          <ul className="mt-8 space-y-3 text-lg text-gray-700">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Business Benefits
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-xl bg-blue-50 p-5 text-blue-900"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
