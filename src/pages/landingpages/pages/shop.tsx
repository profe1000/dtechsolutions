import { blogs } from "../../../utils/blogData";
import BlogCard from "../../../components/blog/blogCards";


export default function ProductList() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-amber-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-blue-950">
            Our Shop
          </h1>

          <p className="mt-5 text-gray-600">
            Buyt your paint directly from us and get the best quality products at affordable prices.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          No Item Found

        </div>

      </div>

    </section>
  );
}