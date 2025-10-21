import { useState, useEffect } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Item from "../components/Item";
import { Container, Divider, List, Button, Stack } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setData(JSON.parse(saved));
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [data, darkMode]);

  const add = (name) => {
    if (!name) return;
    const id = data.length > 0 ? data[0].id + 1 : 1;
    const newTodo = {
      id,
      name,
      done: false,
      date: new Date().toLocaleString(),
    };
    setData([newTodo, ...data]);
  };

  const toggle = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const filteredData = data.filter((item) => {
    if (filter === "Done") return item.done;
    if (filter === "Not Done") return !item.done;
    return true;
  });

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#f5f5f5",
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Header
        count={data.filter((item) => !item.done).length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Form add={add} />
        <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2 }}>
          <Button
            variant={filter === "All" ? "contained" : "outlined"}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant={filter === "Not Done" ? "contained" : "outlined"}
            onClick={() => setFilter("Not Done")}
          >
            Not Done
          </Button>
          <Button
            variant={filter === "Done" ? "contained" : "outlined"}
            onClick={() => setFilter("Done")}
          >
            Done
          </Button>
        </Stack>
        <List>
          {filteredData.map((item) => (
            <Item
              key={item.id}
              item={item}
              remove={remove}
              toggle={toggle}
              darkMode={darkMode}
            />
          ))}
        </List>
        <Divider />
      </Container>
    </div>
  );
}
