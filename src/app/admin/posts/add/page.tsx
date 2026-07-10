import { Container } from "@mui/material";
import { PostForm } from "@/components/admin/PostForm";
import { createPost } from "@/services/Post/createPost";

export default function Page() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <PostForm title="Novo Post" submitText="Publicar" action={createPost} />
    </Container>
  );
}
