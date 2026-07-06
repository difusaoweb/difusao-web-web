import * as React from "react";

import { SectionHero } from "@/components/ecosystems/SectionHero";
import { SectionDifusaoOperations } from "@/components/ecosystems/SectionDifusaoOperations";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionDifusaoOperations />
    </>
  );
}
