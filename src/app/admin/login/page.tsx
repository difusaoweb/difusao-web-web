import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { login } from "@/services/Auth/login";

export default function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ mt: 12 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Área Administrativa
        </Typography>

        <Box component="form" action={login}>
          <Stack spacing={3}>
            <TextField name="password" label="Senha" type="password" required />

            <Button type="submit" variant="contained">
              Entrar
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
