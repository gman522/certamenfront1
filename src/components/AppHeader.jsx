import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./../styles/AppHeader.css";

function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar className="app-header">
        <Typography variant="h6" component="div">
          Anillo Único
        </Typography>

        <Typography variant="subtitle1" component="div">
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
