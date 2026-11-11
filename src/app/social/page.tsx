import Link from "next/link";

const socialUrl = "https://difusaosocial.com/";

const features = [
  {
    icon: "◉",
    title: "Compartilhe momentos",
    description: "Publique textos, imagens e acontecimentos do seu dia a dia.",
  },
  {
    icon: "♡",
    title: "Interaja com pessoas",
    description: "Curta publicações, comente e participe das conversas.",
  },
  {
    icon: "⌖",
    title: "Conecte-se à comunidade",
    description:
      "Conheça pessoas, descubra novidades e acompanhe o que acontece ao seu redor.",
  },
];

export default function DifusaoSocialPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-100/70 blur-[100px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Brand */}
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-lg shadow-blue-600/20">
              D
            </div>
            <span className="text-xl font-bold tracking-tight">
              Difusão <span className="text-blue-600">Social</span>
            </span>
          </div>

          {/* Label */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Uma nova forma de se conectar
          </span>

          {/* Title */}
          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Sua vida acontece.
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Compartilhe com o mundo.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
            O Difusão Social é um espaço para compartilhar ideias, momentos e
            experiências, conhecer pessoas e acompanhar o que acontece na sua
            comunidade.
          </p>

          {/* CTA */}
          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Conheça o Difusão Social
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Quero fazer parte
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Acesse o Difusão Social e faça parte da comunidade.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Muito além de uma publicação
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Um espaço para compartilhar e se conectar.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Compartilhe o que importa, interaja com outras pessoas e faça
              parte de uma comunidade.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Dark */}
      <section className="relative overflow-hidden bg-[#111827] px-6 py-24 text-white">
        <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Difusão Social
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Tem muita coisa para compartilhar.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            Entre no Difusão Social e descubra um novo espaço para se expressar,
            interagir e conhecer pessoas.
          </p>

          <Link
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-9 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Acessar Difusão Social
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
