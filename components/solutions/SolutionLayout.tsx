interface SolutionLayoutProps {
  title: string;
  badge?: string;
  description: string;
  features: string[];
}

export default function SolutionLayout({
  title,
  badge,
  description,
  features,
}: SolutionLayoutProps) {
  return (
    <main>
      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-center">

          {/* Left content */}
          <div>
            {badge && (
              <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                {badge}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Feature list */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Request Demo →
              </a>
            </div>
          </div>

          {/* Right visual card */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900">
                Why this solution works
              </h3>

              <p className="mt-4 text-gray-600">
                Designed for real operational workflows, scalability, and long-term
                business growth.
              </p>

              <div className="mt-6 grid gap-4 text-sm text-gray-700">
                <div className="rounded-lg bg-gray-50 p-4">
                  ✔ Fast deployment
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  ✔ Secure & scalable architecture
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  ✔ Ongoing support & updates
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


    </main>
  );
}
