import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f7",
      }}
    >
      {children}
    </Box>
  );
}
