import { SectionHero } from "@/components/ecosystems/SectionHero";
import { SectionBlogPage } from "@/components/ecosystems/SectionBlogPage";
import { SectionDifusaoOperations } from "@/components/ecosystems/SectionDifusaoOperations";
import { getPosts } from "@/services/Post/getPosts";
import { SectionDifusaoSocial } from "@/components/ecosystems/SectionDifusaoSocial";

export default async function HomePage() {
  const posts = await getPosts(3);

  return (
    <>
      <SectionHero />
      <SectionDifusaoOperations />
      <SectionDifusaoSocial />
      <SectionBlogPage posts={posts} />
    </>
  );
}
