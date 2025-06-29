import { render, screen } from '@testing-library/react';
import useScrollReveal from './useScrollReveal';
import React from 'react';

function TestComponent() {
  const [ref, visible] = useScrollReveal();
  return <div ref={ref} data-testid="box" className={visible ? 'visible' : ''}></div>;
}

test('element becomes visible when observed', () => {
  const observe = jest.fn();
  const disconnect = jest.fn();
  global.IntersectionObserver = class {
    constructor(cb) {
      this.cb = cb;
    }
    observe(target) {
      observe(target);
      this.cb([{ isIntersecting: true, target }]);
    }
    disconnect() {
      disconnect();
    }
  };

  render(<TestComponent />);

  const el = screen.getByTestId('box');
  expect(observe).toHaveBeenCalledWith(el);
  expect(el.className).toBe('visible');
});
