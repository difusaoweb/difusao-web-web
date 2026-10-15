import * as React from "react";

export const SectionHero = () => {
  return (
    <section className="bg-[#101010] text-white flex justify-center items-center pt-8 pb-8 lg:pt-16 lg:pb-16">
      <div className="container-xxl flex flex-col items-center justify-center">
        <h3 className="text-center text-base lg:text-[1.3rem] font-semibold uppercase mb-2.5 text-primary">
          Difusão Web é tecnologia e conhecimento
        </h3>
        <h1 className="text-center mb-10 text-4xl lg:text-6xl font-semibold uppercase">
          Tecnologia e conhecimento são vendas
        </h1>
        <p className="text-center lg:text-xl lg:font-medium lg:leading-relaxed lg:tracking-wide">
          Fundada com a missão de impulsionar o sucesso de pequenas lojas, a
          Difusão Web entende que administrar uma loja vai muito além do ato de
          vender produtos.
          <br />É preciso uma gestão forte em todos os setores de uma loja,
          desde de marketing com a atração do público, passando pelo comercial
          para a conversão em vendas, consequentemente no operacional com a
          entrega dos produtos, até o setor financeiro com a gestão de caixa.
        </p>
        <p className="text-center lg:text-xl lg:font-medium lg:leading-relaxed lg:tracking-wide mt-4">
          Com essa visão, a Difusão Web desenvolveu uma solução para auxiliar
          lojistas em todas as áreas de sua loja.
        </p>
      </div>
    </section>
  );
};
