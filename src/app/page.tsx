import * as React from "react";

import { SectionHero } from "@/components/ecosystems/SectionHero";
import { SectionBlogPage } from "@/components/ecosystems/SectionBlogPage";
import { SectionDifusaoOperations } from "@/components/ecosystems/SectionDifusaoOperations";
import { getPosts } from "@/services/Post/getPosts";

export default async function HomePage() {
  const posts = await getPosts(3);

  return (
    <>
      <SectionHero />
      <SectionBlogPage posts={posts} />
      <SectionDifusaoOperations />
    </>
  );
}
