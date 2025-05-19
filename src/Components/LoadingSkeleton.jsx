export default function LoadingSkeleton() {
  return (
    <div className="p-6 animate-pulse space-y-4">
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/4"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}
