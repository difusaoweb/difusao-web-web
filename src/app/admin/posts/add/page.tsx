import { PostForm } from "@/components/admin/PostForm";
import { createPost } from "@/services/Post/createPost";

export default function Page() {
  return (
    <div className="container-xxl py-12">
      <PostForm title="Novo Post" submitText="Publicar" action={createPost} />
    </div>
  );
}
