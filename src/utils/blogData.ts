import { Blog } from "./blog";


export const blogs: Blog[] = [
  {
    id: 1,
    slug: "how-to-choose-paint-finish",
    title: "How to Choose the Right Paint Finish",
    excerpt:
      "Learn which paint finish works best for every room in your home.",

    content: `
Choosing the correct paint finish is just as important as choosing the right colour.

Matt finishes provide a smooth appearance.

Satin paints offer better durability.

Gloss paints are excellent for trim and doors.
    `,

    image: `${process.env.PUBLIC_URL}/images/blog/blog1.jpg`,

    author: "Glow Paints",

    category: "Painting Tips",

    publishedAt: "July 10, 2026",

    readingTime: "5 min read",
  },
  {
  id: 2,
  slug: "best-exterior-paint-colours",
  title: "5 Exterior Paint Colours That Never Go Out of Style",
  excerpt:
    "Discover timeless exterior paint colours that enhance curb appeal and protect your property for years to come.",

  content: `
Choosing the right exterior paint colour is one of the most important decisions when improving your property's appearance.

Neutral colours such as white, cream, light grey, and beige remain timeless choices because they complement almost every architectural style.

Earth tones create a warm and welcoming appearance while blending beautifully with natural surroundings.

Before painting, ensure the surface is properly cleaned, repaired, and primed. Proper preparation improves paint adhesion and extends the life of the coating.

For long-lasting results, always use premium exterior paints that provide excellent UV resistance, weather protection, and colour retention.

At Glow Paints, our exterior paint solutions are formulated to withstand Nigeria's varying weather conditions while maintaining their beauty for years.
  `,

  image: `${process.env.PUBLIC_URL}/images/blog/blog2.jpg`,

  author: "Glow Paints",

  category: "Colour Inspiration",

  publishedAt: "July 8, 2026",

  readingTime: "6 min read",
},
{
  id: 3,
  slug: "preparing-walls-before-painting",
  title: "Preparing Your Walls Before Painting",
  excerpt:
    "Proper wall preparation is the key to achieving a smooth, durable, and professional-looking paint finish.",

  content: `
A beautiful paint finish starts long before the first coat is applied.

Begin by removing dust, grease, loose paint, and dirt from the surface. Clean walls allow paint to bond properly.

Inspect the surface for cracks, holes, or imperfections. Fill damaged areas using quality fillers or putty and sand the surface until smooth.

Applying a suitable primer creates a uniform surface, improves paint adhesion, and helps reduce paint consumption.

Always allow each layer to dry according to the manufacturer's recommendations before applying the next coat.

Using premium products such as Glow Paints and Bexcoat Paints ensures better coverage, excellent durability, and a beautiful finish that lasts for years.
  `,

  image: `${process.env.PUBLIC_URL}/images/blog/blog3.jpg`,

  author: "Glow Paints",

  category: "Painting Tips",

  publishedAt: "July 5, 2026",

  readingTime: "4 min read",
},

];