import * as React from "react";

import { SectionHero } from "@/components/ecosystems/SectionHero";
import { SectionDifusaoAracoiaba } from "@/components/ecosystems/SectionDifusaoAracoiaba";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionDifusaoAracoiaba />
    </>
  );
}
