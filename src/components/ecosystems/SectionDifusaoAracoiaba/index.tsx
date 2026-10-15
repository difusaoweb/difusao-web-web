import * as React from "react";
import Link from "next/link";

export const SectionDifusaoAracoiaba = () => {
  return (
    <div className="bg-black border-t border-[#dfe2e6]">
      <div
        className="container-xxl flex flex-col items-center justify-center pt-10 pb-60 lg:pb-90 bg-no-repeat bg-bottom bg-[length:200%] lg:bg-contain"
        style={{ backgroundImage: 'url("/background-aracoiaba.webp")' }}
      >
        <h2 className="text-center text-white text-3xl lg:text-5xl font-normal lg:leading-tight mb-2">
          Difusão Aracoiaba
        </h2>
        <p className="mb-4 text-center text-[oklab(0.946558-5.96046e-85.96046e-8/0.9)] lg:text-xl lg:font-medium lg:leading-relaxed lg:tracking-wide">
          Rede social local em Aracoiaba
        </p>
        <div className="flex gap-4">
          <Link
            href="/aracoiaba"
            className="inline-flex items-center justify-center px-4 py-2 rounded bg-primary text-white text-sm font-medium shadow-none hover:opacity-90 transition-opacity"
          >
            Saiba mais
          </Link>
          <a
            href="https://difusaoaracoiaba.com.br"
            className="inline-flex items-center justify-center px-4 py-2 rounded border border-primary text-primary text-sm font-medium shadow-none hover:bg-primary/5 transition-colors"
          >
            Testar agora
          </a>
        </div>
      </div>
    </div>
  );
};
