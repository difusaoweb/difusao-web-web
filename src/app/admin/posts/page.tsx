import Link from "next/link";
import {
  IconClock,
  IconPlus,
  IconCalendar,
  IconEdit,
  IconEye,
} from "@tabler/icons-react";

import { prisma } from "@/lib/prisma";
import { difficultyChipClass, difficultyLabel } from "@/constants/difficulty";

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      publishedAt: "desc",
    },
  });

  const statusLabel = {
    publish: "Publicado",
    future: "Futuro",
    draft: "Rascunho",
  } as const;

  const statusClass = {
    publish: "bg-green-100 text-green-800",
    future: "bg-blue-100 text-blue-800",
    draft: "bg-gray-100 text-gray-800",
  } as const;

  return (
    <div className="container-xxl py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Posts</h1>
          <p className="text-gray-600">Gerencie os artigos do blog.</p>
        </div>
        <Link
          href="/admin/posts/add"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-opacity"
        >
          <IconPlus size={18} />
          Novo Post
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <input
          type="text"
          placeholder="Pesquisar..."
          disabled
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Título
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Slug
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Leitura
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Dificuldade
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                Publicação
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 font-semibold">{post.title}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{post.slug}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm">
                    <IconClock size={16} stroke={1.5} />
                    {post.readingTime} min
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      difficultyChipClass[post.difficulty] ??
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {difficultyLabel[post.difficulty]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      statusClass[post.status as keyof typeof statusClass] ??
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {statusLabel[post.status as keyof typeof statusLabel] ??
                      post.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-sm">
                    <IconCalendar size={16} stroke={1.5} />
                    {post.publishedAt?.toLocaleDateString("pt-BR") ?? "—"}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="inline-flex p-1.5 rounded hover:bg-gray-100 text-gray-600"
                    title="Ver"
                  >
                    <IconEye size={18} />
                  </Link>
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="inline-flex p-1.5 rounded hover:bg-gray-100 text-gray-600"
                    title="Editar"
                  >
                    <IconEdit size={18} />
                  </Link>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-12 text-center text-gray-500"
                >
                  Nenhum post cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
