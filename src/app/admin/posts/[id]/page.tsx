import { Container } from "@mui/material";
import { PostForm } from "@/components/admin/PostForm";
import { getPost } from "@/services/Post/getPost";
import { updatePost } from "@/services/Post/updatePost";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <Container maxWidth="xxl" sx={{ py: 6 }}>
      <PostForm
        title="Editar Post"
        submitText="Salvar alterações"
        action={updatePost.bind(null, id)}
        defaultValues={post}
        showPublished
      />
    </Container>
  );
}
