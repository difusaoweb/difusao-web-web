import Link from "next/link";
import {
  IconPlus,
  IconArticle,
  IconWorld,
  IconMail,
  IconEye,
  IconExternalLink,
} from "@tabler/icons-react";

import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [totalPosts, publishedPosts, draftPosts, futurePosts, latestPosts] =
    await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { status: "publish" } }),
      prisma.post.count({ where: { status: "draft" } }),
      prisma.post.count({ where: { status: "future" } }),
      prisma.post.findMany({
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
    ]);

  const statusLabel = {
    publish: "Publicado",
    future: "Futuro",
    draft: "Rascunho",
  } as const;

  const statusClass = {
    publish: "bg-green-100 text-green-800",
    future: "bg-blue-100 text-blue-800",
    draft: "bg-yellow-100 text-yellow-800",
  } as const;

  return (
    <div className="container-xxl py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Bem-vindo ao painel administrativo da Difusão Web.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Total de posts</p>
              <p className="text-3xl font-bold">{totalPosts}</p>
            </div>
            <IconArticle size={36} className="text-primary" stroke={1.5} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Publicados</p>
              <p className="text-3xl font-bold">{publishedPosts}</p>
            </div>
            <IconWorld size={36} className="text-green-600" stroke={1.5} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Futuros</p>
              <p className="text-3xl font-bold">{futurePosts}</p>
            </div>
            <IconMail size={36} className="text-blue-500" stroke={1.5} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Visualizações</p>
              <p className="text-3xl font-bold">—</p>
            </div>
            <IconEye size={36} className="text-gray-500" stroke={1.5} />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Ações rápidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Link
          href="/admin/posts/add"
          className="flex items-center justify-center gap-2 py-4 px-4 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-opacity"
        >
          <IconPlus size={20} />
          Novo Post
        </Link>
        <Link
          href="/admin/posts"
          className="flex items-center justify-center gap-2 py-4 px-4 rounded-md border border-gray-300 bg-white font-medium hover:bg-gray-50 transition-colors"
        >
          <IconArticle size={20} />
          Gerenciar Posts
        </Link>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 py-4 px-4 rounded-md border border-gray-300 bg-white font-medium hover:bg-gray-50 transition-colors"
        >
          <IconEye size={20} />
          Ver Blog
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-4 px-4 rounded-md border border-gray-300 bg-white font-medium hover:bg-gray-50 transition-colors"
        >
          <IconExternalLink size={20} />
          Ver Site
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4">Últimos posts</h2>
      <div className="space-y-3">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/admin/posts/${post.id}`}
            className="block bg-white rounded-lg shadow-sm p-4 no-underline text-inherit hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{post.title}</p>
                <p className="text-sm text-gray-600">/blog/{post.slug}</p>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  statusClass[post.status as keyof typeof statusClass] ??
                  "bg-gray-100 text-gray-800"
                }`}
              >
                {statusLabel[post.status as keyof typeof statusLabel] ??
                  post.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
