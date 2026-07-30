import { useParams } from "react-router-dom";
import { blogs } from "../../../utils/blogData";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-5">

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-3xl mb-10"
        />

        <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
          {blog.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold text-blue-950">
          {blog.title}
        </h1>

        <div className="flex gap-6 mt-5 text-gray-500">

          <span>{blog.author}</span>

          <span>{blog.publishedAt}</span>

          <span>{blog.readingTime}</span>

        </div>

        <article className="mt-10 whitespace-pre-line leading-9 text-lg text-gray-700">
          {blog.content}
        </article>

      </div>

    </section>
  );
}