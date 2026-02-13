"use client";

import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  tags?: string[];
  Icon?: LucideIcon;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  Icon,
}) => {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
      {Icon && (
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
          <Icon className="h-6 w-6" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
