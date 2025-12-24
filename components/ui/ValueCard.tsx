/**
 * ValueCard Component
 * -------------------
 * Highlights a core reason clients trust the company.
 */

interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 hover:bg-white transition-colors">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
