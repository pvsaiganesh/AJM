import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductPage from "./pages/Product/ProductPage";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fafafa",
    },
    primary: {
      main: "#EE5124",
    },
    info: {
      light: "#008ECC33",
      main: "#008ECC33",
      dark: "#1D6383",
      darker: "#008ECC33",
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
  typography: {
    fontFamily: `"Poppins", system-ui`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
