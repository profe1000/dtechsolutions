import { Link } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import { Blog } from "../../utils/blog";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-8">

        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h2 className="mt-5 text-2xl font-bold text-blue-950">
          {blog.title}
        </h2>

        <div className="flex gap-4 mt-4 text-gray-500">

          <span>
            <CalendarOutlined /> {blog.publishedAt}
          </span>

          <span>{blog.readingTime}</span>

        </div>

        <p className="mt-5 text-gray-600">
          {blog.excerpt}
        </p>

        <Link
          to={`/blog/${blog.slug}`}
          className="text-blue-950 font-semibold mt-6 inline-block"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}