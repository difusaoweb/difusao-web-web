"use client";
import * as React from "react";
import {
  IconBrandWhatsapp,
  IconTrendingUp,
  IconPackage,
  IconReceipt,
  IconUsers,
  IconDeviceMobile,
  IconExternalLink,
  IconArrowRight,
  IconCheck,
  IconChartBar,
  IconShoppingCart,
  IconBuildingStore,
  IconClipboardList,
  IconBox,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import { fbq } from "@/lib/metaPixel";

const phoneNumber = "+5585992910554";
const message =
  "Olá! Tenho dúvida sobre o Difusão Operations, vim do site da Difusão Web.";
const WHATSAPP_URL = `https://wa.me/${phoneNumber.replace(
  /\D/g,
  "",
)}?text=${encodeURIComponent(message)}`;

const SIGNUP_URL =
  "https://difusaooperations.com/signup?utm_source=difusaoweb&utm_medium=site&utm_campaign=institucional&utm_content=botao_teste";

const features = [
  {
    icon: IconPackage,
    number: "01",
    title: "Produtos e estoque",
    description:
      "Cadastre seus produtos e mantenha informações de custos, preços normais e promocionais organizadas.",
  },
  {
    icon: IconShoppingCart,
    number: "02",
    title: "Ponto de venda",
    description:
      "Registre as vendas pelo PDV e tenha a atualização automática do estoque.",
  },
  {
    icon: IconChartBar,
    number: "03",
    title: "Relatórios e resultados",
    description:
      "Consulte informações sobre suas vendas e acompanhe resultados em diferentes períodos.",
  },
  {
    icon: IconUsers,
    number: "04",
    title: "Gestão de usuários",
    description:
      "Adicione administradores e usuários comuns, organizando os acessos à plataforma.",
  },
  {
    icon: IconDeviceMobile,
    number: "05",
    title: "Acesso de qualquer lugar",
    description:
      "Utilize o sistema pelo celular ou computador, com uma interface adaptada para diferentes telas.",
  },
];

export const OperationsPage = () => {
  React.useEffect(() => {
    fbq("track", "ViewContent", {
      content_name: "Difusão Operations",
    });
  }, []);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#faf8fc]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-purple-100/60 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
          {/* Hero content */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#9300d3]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#9300d3] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#9300d3]" />
              Gestão para pequenas lojas
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Sua loja merece uma gestão{" "}
              <span className="text-[#9300d3]">mais organizada.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Controle produtos, estoque e vendas em um só lugar. O Difusão
              Operations ajuda você a organizar a rotina da loja e ter mais
              clareza sobre a operação.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9300d3] px-7 py-4 font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-1 hover:bg-[#7d00b5]"
              >
                Testar grátis por 14 dias
                <IconArrowRight size={19} />
              </Link>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-[#9300d3]/30 hover:bg-purple-50"
              >
                <IconBrandWhatsapp size={20} />
                Falar pelo WhatsApp
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <IconCheck size={17} className="text-[#9300d3]" />
                14 dias grátis
              </span>
              <span className="flex items-center gap-2">
                <IconCheck size={17} className="text-[#9300d3]" />
                Sem cartão de crédito
              </span>
            </div>
          </div>

          {/* Visual illustration */}
          <div className="relative mx-auto w-full max-w-[550px]">
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-purple-200/60 via-purple-100/20 to-transparent blur-2xl" />

            <div className="relative rotate-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-purple-900/10 sm:p-5">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#9300d3] text-white">
                    <IconBuildingStore size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Difusão Operations
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Painel de gestão
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-300" />
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-[76px_1fr] gap-3 py-4 sm:grid-cols-[110px_1fr] sm:gap-5">
                {/* Sidebar */}
                <div className="space-y-4 border-r border-slate-100 pr-2">
                  <div className="rounded-lg bg-purple-50 p-2 text-[#9300d3]">
                    <IconChartBar size={19} />
                  </div>

                  {[IconPackage, IconShoppingCart, IconReceipt, IconUsers].map(
                    (Icon, i) => (
                      <div key={i} className="p-2 text-slate-300">
                        <Icon size={19} />
                      </div>
                    ),
                  )}
                </div>

                {/* Main dashboard */}
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">
                    Visão geral
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Acompanhe a operação da sua loja
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      {
                        icon: IconPackage,
                        title: "Produtos",
                        value: "Cadastro",
                      },
                      {
                        icon: IconShoppingCart,
                        title: "Vendas",
                        value: "PDV",
                      },
                      {
                        icon: IconReceipt,
                        title: "Estoque",
                        value: "Controle",
                      },
                      {
                        icon: IconTrendingUp,
                        title: "Relatórios",
                        value: "Resultados",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4"
                      >
                        <item.icon size={19} className="text-[#9300d3]" />
                        <p className="mt-3 text-[10px] font-medium text-slate-400">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs font-bold text-slate-700 sm:text-sm">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-100 p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-700">
                        Organização da loja
                      </p>
                      <IconMenu2 size={16} className="text-slate-400" />
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        { icon: IconPackage, label: "Produtos" },
                        { icon: IconShoppingCart, label: "Vendas" },
                        { icon: IconClipboardList, label: "Estoque" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <div className="rounded-lg bg-purple-50 p-2 text-[#9300d3]">
                            <item.icon size={15} />
                          </div>
                          <span className="text-xs font-medium text-slate-600">
                            {item.label}
                          </span>
                          <span className="ml-auto h-1.5 w-12 rounded-full bg-purple-100">
                            <span className="block h-1.5 w-2/3 rounded-full bg-[#9300d3]" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-[#9300d3]">
                <IconBox size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Tudo organizado
                </p>
                <p className="text-[10px] text-slate-400">Em um só sistema</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / POSITIONING */}
      <section className="px-6 py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9300d3]">
              A rotina de uma loja
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Vender é importante. Saber administrar também.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Anotações, planilhas e controles separados podem dificultar a
              rotina de uma loja. Quando as informações não estão organizadas,
              fica mais difícil acompanhar produtos, estoque e vendas.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              O Difusão Operations reúne ferramentas essenciais para facilitar
              esse controle, sem a complexidade de sistemas voltados a grandes
              operações.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: IconPackage,
                title: "Produtos desorganizados",
                desc: "Informações espalhadas em diferentes lugares.",
              },
              {
                icon: IconReceipt,
                title: "Estoque sem controle",
                desc: "Dificuldade para acompanhar entradas e vendas.",
              },
              {
                icon: IconShoppingCart,
                title: "Vendas manuais",
                desc: "Registros que dependem de anotações.",
              },
              {
                icon: IconTrendingUp,
                title: "Pouca visibilidade",
                desc: "Dificuldade para consultar os resultados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-[#faf9fc] p-6"
              >
                <item.icon size={25} className="text-[#9300d3]" />
                <h3 className="mt-5 font-bold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#faf8fc] px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9300d3]">
              Recursos do sistema
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              O essencial para organizar sua loja.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Ferramentas que trabalham juntas para simplificar as principais
              atividades da sua operação.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.number} className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#9300d3] shadow-sm">
                    <feature.icon size={24} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-purple-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
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

      {/* DIFFERENTIAL */}
      <section className="px-6 py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] bg-[#9300d3] p-8 text-white sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-200">
                Simplicidade na gestão
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                Um sistema pensado para a realidade das pequenas lojas.
              </h2>

              <p className="mt-6 leading-8 text-purple-100">
                Não é necessário começar com ferramentas complicadas. Organize o
                que importa e tenha as informações da sua loja em um só lugar.
              </p>

              <Link
                href={SIGNUP_URL}
                className="mt-8 inline-flex items-center gap-2 font-bold text-white transition hover:gap-4"
              >
                Começar teste grátis
                <IconArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9300d3]">
              Por que Difusão Operations?
            </span>

            <div className="mt-7 space-y-8">
              {[
                {
                  title: "Desenvolvido para pequenas lojas",
                  desc: "Uma proposta de gestão voltada à rotina de quem precisa controlar produtos, estoque e vendas.",
                },
                {
                  title: "Direto ao que importa",
                  desc: "Recursos essenciais sem transformar tarefas simples em processos complicados.",
                },
                {
                  title: "Suporte direto",
                  desc: "Você pode entrar em contato conosco pelo WhatsApp para tirar dúvidas.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-[#9300d3]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-slate-100 bg-[#fafafa] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9300d3]">
              Comece agora
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Sua loja pode começar a se organizar hoje.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Conheça o sistema e veja como ele pode ajudar na rotina da sua
              loja.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Faça seu cadastro",
                desc: "Acesse a plataforma e crie sua conta.",
              },
              {
                number: "02",
                title: "Organize sua loja",
                desc: "Comece a cadastrar produtos e utilizar as ferramentas disponíveis.",
              },
              {
                number: "03",
                title: "Experimente por 14 dias",
                desc: "Conheça o sistema durante o período de teste gratuito, sem cartão de crédito.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-black tracking-widest text-[#9300d3]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#15101b] px-6 py-24 text-white lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#9300d3]/30 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
            Experimente o Difusão Operations
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Mais organização para sua loja começa com uma decisão.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Experimente o Difusão Operations gratuitamente por 14 dias. Sem
            cartão de crédito e sem compromisso.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9300d3] px-8 py-4 font-bold text-white shadow-lg shadow-purple-950/30 transition hover:-translate-y-1 hover:bg-[#a820e5]"
            >
              <IconExternalLink size={20} />
              Testar grátis por 14 dias
            </Link>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              <IconBrandWhatsapp size={20} />
              Tirar dúvida no WhatsApp
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Difusão Operations · Gestão para pequenas lojas
          </p>
        </div>
      </section>
    </main>
  );
};
