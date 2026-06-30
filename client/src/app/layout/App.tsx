import Container from "@mui/material/Container/Container";
import NavBar from "./NavBar";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
/*
https://localhost:3000 is the frontend app
http://localhost:5263 is the backend API
fetch('/api/products') uses the frontend origin
Vite proxy sends api requests to the actual API port
The API returns the seeded products from the database
*/
function App() {
  //const [products, setProducts] = useState<Product[]>([]);//receives the data and updates state: setProducts(data)
  const [darkMode, setDarkMode] = useState(false);
  const palleteType=darkMode ? 'light' : 'dark'
  const theme=createTheme({
    palette: {
      mode: palleteType,
      background:{
        default: (palleteType ==='light') ? '#eaeaea' : '#D3D3D3'
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  
 
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <Box 
      sx={{
        minHeight: '100vh',
        background: darkMode 
        ? 'radial-gradient(circle, #1e3aBa, #111B27'
        : 'radial-gradient(circle, #BAECF9, #F0F9FF',
        py:6
      }}
    >
      <Container maxWidth="xl" sx={{mt:8}}>
        <Outlet  />
    </Container>
    </Box>
    </ThemeProvider>
    
  )
}

export default App
