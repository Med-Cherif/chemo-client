import { Home, Profile, Saved, Shorts } from "./pages"
import { Route, Routes } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { useEffect } from "react";
import client from "./gql/client";
import { GET_AUTHOR_OR_BOOK } from './gql/queries/BookQueries';
import Authentication from "./pages/Authentication";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
