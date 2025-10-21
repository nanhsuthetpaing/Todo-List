import { useRef } from "react";
import { OutlinedInput, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function Form({ add, darkMode }) {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(inputRef.current.value);
        e.currentTarget.reset();
      }}
    >
      <OutlinedInput
        fullWidth
        placeholder="Add Item"
        inputRef={inputRef}
        sx={{
          bgcolor: darkMode ? "#2a2a2a" : "#fff",
          color: darkMode ? "#fff" : "#000",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: darkMode ? "#555" : "#ccc",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: darkMode ? "#888" : "#888",
          },
          "& .MuiInputAdornment-root": {
            color: darkMode ? "#fff" : "#000",
          },
          "& input::placeholder": {
            color: darkMode ? "#bbb" : "#555",
            opacity: 1,
          },
        }}
        endAdornment={
          <IconButton type="submit" sx={{ color: darkMode ? "#90caf9" : "#1976d2" }}>
            <AddIcon />
          </IconButton>
        }
      />
    </form>
  );
}
