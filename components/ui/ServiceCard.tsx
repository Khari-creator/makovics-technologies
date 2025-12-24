/**
 * ServiceCard Component
 * ---------------------
 * Reusable UI element for displaying a single service.
 */

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
