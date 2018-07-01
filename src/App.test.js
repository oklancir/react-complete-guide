import React from 'react'(prettier/prettier);
import ReactDOM from 'react-dom'(prettier/prettier);
import App from './App'(prettier/prettier);

it('renders without crashing'(prettier/prettier), () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
