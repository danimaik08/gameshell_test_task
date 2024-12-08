import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.h1`
  color: #00f;
`;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="App">
      <div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/shop">shop</Link>
        </div>
      </div>
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
      <Outlet />
    </div>
  );
}
