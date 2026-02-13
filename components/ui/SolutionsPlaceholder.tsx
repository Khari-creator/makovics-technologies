export default function SolutionPlaceholder() {
  return (
    <div className="relative w-full h-52 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden">

      {/* Fake top bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white border-b border-gray-200 flex items-center gap-2 px-3">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
      </div>

      {/* Fake dashboard blocks */}
      <div className="pt-12 px-4 space-y-3">
        <div className="h-3 w-3/4 bg-gray-300/60 rounded" />
        <div className="h-3 w-2/3 bg-gray-300/60 rounded" />

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="h-10 bg-gray-300/50 rounded" />
          <div className="h-10 bg-gray-300/50 rounded" />
          <div className="h-10 bg-gray-300/50 rounded" />
        </div>
      </div>
    </div>
  );
}
