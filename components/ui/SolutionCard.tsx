/**
 * SolutionCard Component
 * ----------------------
 * Used to present a full software system.
 */
import Link from "next/link";

interface SolutionCardProps {
  name: string;
  description: string;
}

export default function SolutionCard({
  name,
  description,
}: SolutionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {name}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
     <Link
       href="/solutions"
      className="inline-block text-sm font-semibold text-blue-600 hover:underline"
     >
      Learn more →
       </Link>

    </div>
  );
}
