import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Input } from '../Input';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Input ref={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Input backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container } = render(<Input disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when loading', () => {
    const { container } = render(<Input isLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('types', () => {
    ['number', 'tel', 'date', 'email', 'password', 'search', 'time', 'url'].forEach(type => {
      it(`should render ${type} correctly`, () => {
        const { container } = render(<Input type={type} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('sizes', () => {
    ['small', 'medium', 'large'].forEach(size => {
      it(`should render ${size} correctly`, () => {
        const { container } = render(<Input size={size as Size} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('states', () => {
    ['danger', 'success', 'warning', 'primary'].forEach(state => {
      it(`should render ${state} correctly`, () => {
        const { container } = render(<Input state={state} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('overrides', () => {
  it('Input.root should render correctly', () => {
    const { container } = render(<Input overrides={{ Input: { css: { root: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.Wrapper.root should render correctly', () => {
    const { container } = render(
      <Input overrides={{ Input: { Wrapper: { css: { root: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.Spinner.root should render correctly', () => {
    const { container } = render(
      <Input overrides={{ Input: { Spinner: { css: { root: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.placeholder.root should render correctly', () => {
    const { container } = render(<Input overrides={{ Input: { css: { placeholder: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Input.root should render correctly', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: { Input: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.Wrapper.root should render correctly', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: { Input: { Wrapper: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.Spinner.root should render correctly', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: { Input: { Spinner: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.placeholder.root should render correctly', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: { Input: { css: { placeholder: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: {
        Input: { defaultProps: { className: 'test', color: 'primary' } }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isLoading', () => {
    const { container } = render(<Input />, {
      // @ts-ignore
      theme: {
        Input: { defaultProps: { isLoading: true } }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
