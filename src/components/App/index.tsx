import { useState } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: #00f;
`;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="App">
      <Header>React</Header>
      <div style={{ display: 'flex', gap: 8 }}>
        <div>Counter: {count}</div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
