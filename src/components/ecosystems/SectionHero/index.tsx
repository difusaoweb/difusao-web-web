import * as React from "react";

export const SectionHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#09090b] text-white">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#9300d3]/20 blur-[140px]" />
        <div className="absolute -bottom-60 -right-40 h-[450px] w-[450px] rounded-full bg-[#9300d3]/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="container-xxl relative mx-auto flex min-h-[600px] flex-col items-center justify-center px-5 py-24 text-center lg:min-h-[680px] lg:py-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#9300d3]/40 bg-[#9300d3]/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#b84aff] shadow-[0_0_12px_#b84aff]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
            Tecnologia para lojistas
          </span>
        </div>

        <h1 className="max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
          Tecnologia e conhecimento para{" "}
          <span className="bg-gradient-to-r from-[#c77aff] via-[#a52be8] to-[#9300d3] bg-clip-text text-transparent">
            impulsionar suas vendas.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
          Desenvolvemos soluções tecnológicas e compartilhamos conhecimento para
          ajudar lojistas a atrair clientes, vender mais e administrar melhor
          suas lojas.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="/operations"
            className="inline-flex items-center justify-center rounded-xl bg-[#9300d3] px-8 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(147,0,211,0.3)] transition-all hover:-translate-y-1 hover:bg-[#a820e5]"
          >
            Conheça nossas soluções
            <span className="ml-2">→</span>
          </a>

          <a
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#9300d3]/60 hover:bg-[#9300d3]/10"
          >
            Acesse nosso conteúdo
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
          <span>Tecnologia</span>
          <span className="h-1 w-1 rounded-full bg-[#9300d3]" />
          <span>Gestão</span>
          <span className="h-1 w-1 rounded-full bg-[#9300d3]" />
          <span>Marketing</span>
          <span className="h-1 w-1 rounded-full bg-[#9300d3]" />
          <span>Conhecimento</span>
        </div>
      </div>
    </section>
  );
};
