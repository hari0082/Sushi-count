import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #2c3e50;
  font-family: "Arial", sans-serif;
  color: #ecf0f1;
`;

const Header = styled.header`
  position: absolute;
  top: 20px;
  font-size: 24px;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Button = styled(motion.button)`
  font-size: 24px;
  padding: 15px 30px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
`;

const CountDisplay = styled.div`
  font-size: 96px;
  font-weight: bold;
  color: #f39c12;
  margin: 20px 0;
`;

const EndButton = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e74c3c;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultDisplay = styled(motion.div)`
  font-size: 144px;
  font-weight: bold;
  color: #f39c12;
  text-align: center;
`;

function App() {
  const [page, setPage] = useState("home");
  const [count, setCount] = useState(0);

  const addSushi = () => setCount(count + 1);

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <Content>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sushi Counter
            </motion.h1>
            <Button
              onClick={() => setPage("counter")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start
            </Button>
          </Content>
        );
      case "counter":
        return (
          <Content>
            <CountDisplay>🍣 {count} 🍣</CountDisplay>
            <Button
              onClick={addSushi}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Tilføj Sushi
            </Button>
            <EndButton
              onClick={() => setPage("result")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </EndButton>
          </Content>
        );
      case "result":
        return (
          <Content>
            <ResultDisplay
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {count}
            </ResultDisplay>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Godt gået!
            </motion.p>
            <Button
              onClick={() => {
                setPage("home");
                setCount(0);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start Forfra
            </Button>
          </Content>
        );
      default:
        return null;
    }
  };

  return (
    <AppContainer>
      <Header>🍣</Header>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;
