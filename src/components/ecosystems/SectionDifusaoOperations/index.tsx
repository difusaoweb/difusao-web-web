import * as React from "react";
import Link from "next/link";

export const SectionDifusaoOperations = () => {
  return (
    <div className="bg-[#fafbfc] border-t border-[#dfe2e6]">
      <div
        className="container-xxl flex flex-col items-center justify-center pt-10 pb-60 lg:pb-90 bg-no-repeat bg-bottom bg-[length:200%] lg:bg-contain"
        style={{ backgroundImage: 'url("/background-tela-smarphone.png")' }}
      >
        <h2 className="text-center text-3xl lg:text-5xl font-normal lg:leading-tight mb-2">
          Difusão Operations
        </h2>
        <p className="mb-4 text-center lg:text-xl lg:font-medium lg:leading-relaxed lg:tracking-wide">
          Um sistema de gestão simples, intuitivo e poderoso para pequenos
          lojistas.
        </p>
        <div className="flex gap-4">
          <Link
            href="/operations"
            className="inline-flex items-center justify-center px-4 py-2 rounded bg-primary text-white text-sm font-medium shadow-none hover:opacity-90 transition-opacity"
          >
            Saiba mais
          </Link>
          <a
            href="https://operations.difusaoweb.com"
            className="inline-flex items-center justify-center px-4 py-2 rounded border border-primary text-primary text-sm font-medium shadow-none hover:bg-primary/5 transition-colors"
          >
            Testar agora
          </a>
        </div>
      </div>
    </div>
  );
};
