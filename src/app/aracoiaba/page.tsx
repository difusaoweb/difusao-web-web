export default function DifusaoAracoiabaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-5xl">
          <header className="mb-20 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-xl font-black">
              D
            </div>
            <span className="text-lg font-bold tracking-tight">
              Difusão Aracoiaba
            </span>
          </header>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Uma rede social para Aracoiaba
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Aracoiaba tem
              <span className="block text-blue-400">muito a compartilhar.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              O Difusão Aracoiaba é um espaço para as pessoas da nossa cidade
              compartilharem ideias, publicações e momentos do dia a dia,
              conectando a comunidade em um só lugar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://difusaoaracoiaba.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-bold text-white transition hover:bg-blue-400"
              >
                Conheça a rede social
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://difusaoaracoiaba.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-white/5"
              >
                Quero fazer parte
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400">
                ◉
              </div>
              <h2 className="text-lg font-bold">Compartilhe</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Publique textos, imagens e acontecimentos do seu dia a dia.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-xl text-purple-400">
                ♡
              </div>
              <h2 className="text-lg font-bold">Interaja</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Curta publicações, comente e participe das conversas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-xl text-emerald-400">
                ⌖
              </div>
              <h2 className="text-lg font-bold">Conecte-se</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Faça parte de um espaço digital dedicado à nossa cidade.
              </p>
            </div>
          </div>

          <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
            <span>Feito para quem vive Aracoiaba.</span>
            <a
              href="https://difusaoaracoiaba.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              difusaoaracoiaba.com.br
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
