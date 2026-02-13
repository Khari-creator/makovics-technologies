 import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function SolutionCard({
  title,
  description,
  slug,
}: SolutionCardProps) {
  return (
    <Link
      href={`/solutions/${slug}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      
      {/* Text Content */}
      <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

     
    </Link>
  
  
  );
}
