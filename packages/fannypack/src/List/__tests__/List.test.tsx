import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { List } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<List>Hello world</List>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <div>
        <List listStyleType="disc" listStylePosition="inside">
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List>
        <List listStyleType="circle" listStylePosition="inside">
          <List.Item>Item 1</List.Item>
          <List.Item listStyleType="georgian">Item 2</List.Item>
          <List listStyleType="circle">
            <List.Item>Item 1</List.Item>
            <List.Item>Item 2</List.Item>
          </List>
        </List>
      </div>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a basic list', () => {
    const { container } = render(
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly as an ordered list', () => {
    const { container } = render(
      <List isOrdered>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly as a horizontal list', () => {
    const { container } = render(
      <List isHorizontal>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<List use="div">Hello world</List>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with List props', () => {
      const { result } = renderHook(() => List.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<List>{ListProps => <div {...ListProps}>Hello world</div>}</List>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('List.root should render correctly', () => {
    const { container } = render(
      <List overrides={{ Link: { css: { root: { backgroundColor: 'red' } } } }}>hello world</List>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('List.root should render correctly', () => {
    const { container } = render(
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { css: { root: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('List.ordered should render correctly', () => {
    const { container } = render(
      <List isOrdered>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { css: { ordered: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('List.ordered should render correctly', () => {
    const { container } = render(
      <List isHorizontal>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { css: { horizontal: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('List.Item.root should render correctly', () => {
    const { container } = render(
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { Item: { css: { root: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for isOrdered', () => {
    const { container } = render(
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { defaultProps: { className: 'test', isOrdered: true } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for List.Item', () => {
    const { container } = render(
      <List>
        <List.Item>Item One</List.Item>
        <List.Item>Item Two</List.Item>
        <List.Item>Item Three</List.Item>
        <List.Item>Item Four</List.Item>
      </List>,
      {
        theme: { List: { Item: { defaultProps: { className: 'test' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
