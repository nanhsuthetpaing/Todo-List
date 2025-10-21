import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import {
  DeleteForever as DeleteIcon,
  SquareOutlined as CheckIcon,
  CheckBox as DoneIcon,
} from "@mui/icons-material";

// Define soft, visible colors for both themes
const lightColors = [
  "#ffe5ec", "#e0f7fa", "#e8f5e9", "#fff3e0", "#ede7f6", "#f3e5f5",
];
const darkColors = [
  "#3b3b58", "#354f52", "#3d405b", "#4a4e69", "#2e4a62", "#5a3d55",
];

export default function Item({ item, remove, toggle, darkMode }) {
  // Pick a random color once per item ID (consistent color)
  const colorArray = darkMode ? darkColors : lightColors;
  const bgColor = colorArray[item.id % colorArray.length];

  return (
    <ListItem
      sx={{
        textDecoration: item.done ? "line-through" : "none",
        opacity: item.done ? 0.7 : 1,
        bgcolor: bgColor,
        borderRadius: 2,
        mb: 1,
        boxShadow: darkMode
          ? "0 2px 5px rgba(0,0,0,0.4)"
          : "0 2px 5px rgba(0,0,0,0.1)",
        color: darkMode ? "#f5f5f5" : "#222",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <IconButton onClick={() => toggle(item.id)}>
        {item.done ? (
          <DoneIcon sx={{ color: darkMode ? "#a0ff9f" : "#2e7d32" }} />
        ) : (
          <CheckIcon sx={{ color: darkMode ? "#80cbc4" : "#1976d2" }} />
        )}
      </IconButton>
      <ListItemText
        primary={item.name}
        secondary={
          <Typography
            variant="caption"
            color={darkMode ? "#ccc" : "text.secondary"}
          >
            {item.date}
          </Typography>
        }
      />
      <IconButton onClick={() => remove(item.id)}>
        <DeleteIcon sx={{ color: darkMode ? "#ff8a80" : "#e53935" }} />
      </IconButton>
    </ListItem>
  );
}
