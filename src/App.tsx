import { Home, Profile, Saved, Shorts } from "./pages"
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
