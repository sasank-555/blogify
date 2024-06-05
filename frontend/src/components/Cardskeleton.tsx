import { Card, CardContent } from "@/components/ui/card";

export default function CardSkeleton() {
  return (
    <div className="group font-Inter">
      <Card className="h-full flex items-center justify-center pt-3 animate-pulse w-full">
        <CardContent className="space-y-2 w-full">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
            <span>•</span>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
