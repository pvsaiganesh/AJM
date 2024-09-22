import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE5124",
    },
    secondary: {
      main: "#EDF2EE",
    },
    text: {
      primary: "#black",
    },
    action: {
      active: "#EE5124",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
