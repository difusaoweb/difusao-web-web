import * as React from "react";

import { AracoiabaPageSectionHero } from "@/components/ecosystems/AracoiabaPageSectionHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Difusão Aracoiaba | Compre em Aracoiaba sem sair de casa",
  description:
    "Compre em Aracoiaba sem sair de casa, aplicativo de shopping em Aracoiaba.",
};

export default function AracoiabaPage() {
  return (
    <>
      <AracoiabaPageSectionHero />
    </>
  );
}
