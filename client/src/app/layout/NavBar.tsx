import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

type Props = {
    toggleDarkMode: () => void;
    darkMode:boolean;
}

export default function NavBar({darkMode, toggleDarkMode}: Props) {
    
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">Martha Garcia Portfolio</Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode sx={{color:"#000"}}/> : <LightMode sx={{color:"yellow"}} />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}