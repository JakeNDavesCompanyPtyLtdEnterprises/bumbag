import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Avatar } from '../Avatar';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Avatar src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Avatar alt="Bean" backgroundColor="red" src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with kind circle', () => {
    const { container } = render(<Avatar alt="Bean" kind="circle" src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'default', 'medium', 'large'].forEach(size => {
    it(`should render correctly for size ${size}`, () => {
      const { container } = render(<Avatar alt="Bean" size={size} src="test.png" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly for initials', () => {
    const { container } = render(<Avatar initials="JM" palette="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Avatar.base should render correctly', () => {
    const { container } = render(
      <Avatar src="test.png" overrides={{ Avatar: { css: { root: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.circle.base should render correctly', () => {
    const { container } = render(
      <Avatar src="test.png" overrides={{ Avatar: { css: { circle: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.small should render correctly', () => {
    const { container } = render(
      <Avatar
        src="test.png"
        size="small"
        overrides={{ Avatar: { css: { sizes: { small: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.default should render correctly', () => {
    const { container } = render(
      <Avatar src="test.png" overrides={{ Avatar: { css: { sizes: { default: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.medium should render correctly', () => {
    const { container } = render(
      <Avatar
        src="test.png"
        size="medium"
        overrides={{ Avatar: { css: { sizes: { medium: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.large should render correctly', () => {
    const { container } = render(
      <Avatar
        src="test.png"
        size="large"
        overrides={{ Avatar: { css: { sizes: { large: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Avatar.base should render correctly', () => {
    const { container } = render(<Avatar src="test.png" />, {
      theme: { Avatar: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.circle.base should render correctly', () => {
    const { container } = render(<Avatar src="test.png" />, {
      theme: { Avatar: { css: { circle: { base: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.small should render correctly', () => {
    const { container } = render(<Avatar src="test.png" size="small" />, {
      theme: { Avatar: { css: { sizes: { small: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.default should render correctly', () => {
    const { container } = render(<Avatar src="test.png" size="default" />, {
      theme: { Avatar: { css: { sizes: { default: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.medium should render correctly', () => {
    const { container } = render(<Avatar src="test.png" size="medium" />, {
      theme: { Avatar: { css: { sizes: { medium: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Avatar.sizes.large should render correctly', () => {
    const { container } = render(<Avatar src="test.png" size="large" />, {
      theme: { Avatar: { css: { sizes: { large: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Avatar src="test.png" />, {
      theme: { Avatar: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
