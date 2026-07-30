import { blogs } from "../../../utils/blogData";
import BlogCard from "../../../components/blog/blogCards";


export default function BlogList() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-amber-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-blue-950">
            Our Blog
          </h1>

          <p className="mt-5 text-gray-600">
            Painting Tips, Inspiration & Expert Advice
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}

        </div>

      </div>

    </section>
  );
}