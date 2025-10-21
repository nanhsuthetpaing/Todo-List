import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Stack,
} from "@mui/material";
import { DarkMode, LightMode, Checklist } from "@mui/icons-material";

export default function Header({ count, darkMode, setDarkMode }) {
  return (
    <AppBar position="static" color={darkMode ? "default" : "primary"}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Checklist sx={{ fontSize: 30 }} />
          <Typography variant="h6">Todo List</Typography>
          <Badge badgeContent={count} color="error"/>
        </Stack>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
