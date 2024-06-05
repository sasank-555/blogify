/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UyRNXnyZgmJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
interface BlogCardProps {
  id: string;
  autherName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export default function CardComp({
  id,
  autherName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className="group font-Inter">
      <Card className="h-full flex items-center justify-center pt-3">
        <CardContent className="space-y-2">
          <h3 className="text-lg font-bold group-hover:underline">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
            {content}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{autherName}</span>
            <span>•</span>
            <span>{publishedDate}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
