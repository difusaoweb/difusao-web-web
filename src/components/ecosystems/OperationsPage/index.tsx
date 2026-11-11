"use client";
import * as React from "react";
import {
  IconAlertTriangle,
  IconBrandWhatsapp,
  IconTrendingUp,
  IconPackage,
  IconReceipt,
  IconUsers,
  IconDeviceMobile,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";

import { fbq } from "@/lib/metaPixel";

const phoneNumber = "+5585992910554"; // Replace with your WhatsApp number
const message =
  "Olá! Tenho dúvida sobre o Difusão Operations, vim do site da Difusão Web.";
const WHATSAPP_URL = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const OperationsPage = () => {
  const colors = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    danger: "#e74c3c",
    background: "#f9f9f9",
    text: "#333333",
  };

  React.useEffect(() => {
    fbq("track", "ViewContent", {
      content_name: "Difusão Operations",
    });
  }, []);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* HEADER */}
      <div
        className="text-white py-12 md:py-16 text-center shadow-md"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
      >
        <div className="container-sm">
          <h1 className="font-bold mb-2 text-3xl md:text-4xl">
            Difusão Operations
          </h1>
          <p className="font-light opacity-95 text-base md:text-xl">
            Gestão simples. Lucro visível.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-md py-8 md:py-12">
        {/* SEÇÃO: O PROBLEMA */}
        <div className="bg-white p-6 md:p-8 mb-8 rounded-lg shadow-sm">
          <h2
            className="font-bold mb-4 pb-4 border-b-[3px] text-2xl md:text-3xl"
            style={{ color: colors.primary, borderColor: colors.primary }}
          >
            O Problema
          </h2>
          <p className="mb-6 text-[#333] leading-relaxed">
            Pequenos lojistas enfrentam desafios diários que impedem o
            crescimento:
          </p>

          <ul className="space-y-4 list-none p-0 m-0">
            {[
              {
                title: "Não sabem quanto realmente lucram",
                desc: "Vendem bastante, mas desconhecem a margem real",
              },
              {
                title: "Perdem tempo gerenciando estoque manualmente",
                desc: "Planilhas, anotações, falta de sincronização",
              },
              {
                title: "Não têm visibilidade de operações",
                desc: "Sem controle de produtos, preços, vendas",
              },
              {
                title: "Precisam de ferramenta simples",
                desc: "Não querem sistemas complexos, querem algo que funcione no celular",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <IconAlertTriangle
                  size={24}
                  className="shrink-0 mt-0.5"
                  style={{ color: colors.danger }}
                />
                <div>
                  <p className="font-semibold text-[#333]">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* SEÇÃO: A SOLUÇÃO */}
        <div className="bg-white p-6 md:p-8 mb-8 rounded-lg shadow-sm">
          <h2
            className="font-bold mb-4 pb-4 border-b-[3px] text-2xl md:text-3xl"
            style={{ color: colors.primary, borderColor: colors.primary }}
          >
            A Solução: Difusão Operations
          </h2>
          <p className="mb-6 text-[#333] leading-relaxed">
            Um sistema de gestão simples, intuitivo e poderoso para pequenos
            lojistas.
          </p>

          <h3 className="font-bold mb-6 text-lg text-[#333]">
            O que você ganha:
          </h3>

          <div className="space-y-4">
            {[
              {
                icon: <IconPackage size={24} />,
                title: "Controle Total do Estoque",
                desc: "Cadastre produtos uma única vez. Veja preço de custo, preço normal e preço de promoção. Tudo sincronizado em tempo real.",
              },
              {
                icon: <IconReceipt size={24} />,
                title: "Visibilidade de Lucro",
                desc: "Saiba exatamente quanto você lucrou essa semana, esse mês. Relatórios customizáveis por período — 7 dias, 30 dias, 90 dias, ou o período que quiser.",
              },
              {
                icon: <IconTrendingUp size={24} />,
                title: "Vendas Organizadas",
                desc: "Registre cada venda no painel de PDV. O estoque atualiza automaticamente. Sem erros. Sem papel.",
              },
              {
                icon: <IconUsers size={24} />,
                title: "Gestão de Equipe",
                desc: "Adicione administradores ou usuários comuns. Controle quem acessa o quê.",
              },
              {
                icon: <IconDeviceMobile size={24} />,
                title: "Tudo no Celular ou Computador",
                desc: "Interface simples, design mobile-first. Trabalhe de qualquer lugar.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 bg-[#f5f5f5] rounded border-l-4"
                style={{ borderColor: colors.primary }}
              >
                <div
                  className="shrink-0 pt-0.5"
                  style={{ color: colors.primary }}
                >
                  {benefit.icon}
                </div>
                <div>
                  <p
                    className="font-bold mb-1"
                    style={{ color: colors.primary }}
                  >
                    {benefit.title}
                  </p>
                  <p className="text-sm text-[#333]">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO: POR QUE */}
        <div className="bg-white p-6 md:p-8 mb-8 rounded-lg shadow-sm">
          <h2
            className="font-bold mb-6 pb-4 border-b-[3px] text-2xl md:text-3xl"
            style={{ color: colors.primary, borderColor: colors.primary }}
          >
            Por Que Difusão Operations
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "Construído para lojista de verdade.",
                desc: "Não é um sistema genérico. É desenvolvido observando operação real de pequenas lojas. Cada feature existe porque lojista pediu, porque resolve um problema real.",
              },
              {
                title: "Simples, não complexo.",
                desc: "Sem botões desnecessários. Sem features que ninguém usa. Apenas o essencial: produtos, estoque, vendas, lucro.",
              },
              {
                title: "Suporte direto.",
                desc: "Não é chatbot. Não é ticket infinito. Você fala conosco, a gente resolve.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded border-l-4"
                style={{
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                  borderColor: colors.primary,
                }}
              >
                <p className="font-bold text-[#333] mb-1">{item.title}</p>
                <p className="text-sm text-[#333]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMO COMEÇAR */}
        <div className="bg-white p-6 md:p-8 mb-8 rounded-lg shadow-sm">
          <h2
            className="font-bold mb-6 pb-4 border-b-[3px] text-2xl md:text-3xl"
            style={{ color: colors.primary, borderColor: colors.primary }}
          >
            Como Começar
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Clique no botão abaixo",
                desc: "Você será direcionado para o WhatsApp.",
              },
              {
                step: "2",
                title: "Fale conosco",
                desc: "Conte um pouco sobre sua loja. Nós configuramos tudo.",
              },
              {
                step: "3",
                title: "Teste grátis por 14 dias",
                desc: "Sem cartão. Sem compromisso. Veja se funciona para você.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold shrink-0"
                  style={{ backgroundColor: colors.primary }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-[#333]">{item.title}</p>
                  <p className="text-sm text-[#666]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          className="text-white text-center p-8 md:p-12 rounded-lg mb-8 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          }}
        >
          <h2 className="font-bold mb-4 pb-4 border-b-[3px] border-white/30 text-2xl md:text-3xl">
            Próximo Passo
          </h2>
          <p className="mb-1 leading-relaxed">
            Clique abaixo e teste{" "}
            <strong>Difusão Operations grátis por 14 dias.</strong>
          </p>
          <p className="mb-6 opacity-95">
            Acompanhe seu negócio crescer com clareza.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://difusaooperations.com/signup?utm_source=difusaoweb&utm_medium=site&utm_campaign=institucional&utm_content=botao_teste"
              className="w-[calc(50%-8px)] text-center justify-center inline-flex items-center gap-2 px-8 py-3 rounded bg-[#9300d3] font-bold text-base text-white transition-all shadow-md hover:bg-[#9300d3]/90 hover:-translate-y-0.5"
            >
              <IconExternalLink size={22} stroke={1.5} />
              Testar agora
            </Link>
            <Link
              href={WHATSAPP_URL}
              className="w-[calc(50%-8px)] text-center justify-center inline-flex items-center gap-2 px-8 py-3 rounded bg-[rgb(37,211,102)] font-bold text-base transition-all shadow-md hover:bg-[rgb(37,211,102)]/90 hover:-translate-y-0.5"
            >
              <IconBrandWhatsapp size={22} stroke={1.5} />
              Tirar dúvida no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
