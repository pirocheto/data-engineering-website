import Link from "next/link"
import { blog } from "@/lib/source"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const { lang } = await params
  const posts = blog.getPages(lang)

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Les articles les plus récents</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="block bg-fd-secondary rounded-lg shadow-md overflow-hidden p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
            <p className="mb-4">{post.data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
