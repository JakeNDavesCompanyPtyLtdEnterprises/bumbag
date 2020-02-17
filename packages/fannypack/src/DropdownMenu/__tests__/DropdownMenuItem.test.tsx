import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { DropdownMenu } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test" visible>
        {menu => (
          <DropdownMenu {...menu} aria-label="Actions">
            <DropdownMenu.Group>
              <DropdownMenu.Item iconBefore="solid-pen" {...menu}>
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share" {...menu}>
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature" {...menu}>
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger" {...menu}>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test" visible>
        {menu => (
          <DropdownMenu {...menu} aria-label="Actions">
            <DropdownMenu.Group>
              <DropdownMenu.Item backgroundColor="red" iconBefore="solid-pen" {...menu}>
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share" {...menu}>
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature" {...menu}>
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger" {...menu}>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.Item.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test" visible>
        {menu => (
          <DropdownMenu {...menu} aria-label="Actions">
            <DropdownMenu.Group>
              <DropdownMenu.Item
                iconBefore="solid-pen"
                {...menu}
                overrides={{ DropdownMenu: { Item: { css: { root: { backgroundColor: 'red' } } } } }}
              >
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share" {...menu}>
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature" {...menu}>
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger" {...menu}>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.Item.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test" visible>
        {menu => (
          <DropdownMenu {...menu} aria-label="Actions">
            <DropdownMenu.Group>
              <DropdownMenu.Item iconBefore="solid-pen" {...menu}>
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share" {...menu}>
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature" {...menu}>
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger" {...menu}>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu>
        )}
      </DropdownMenu.State>,
      {
        theme: { DropdownMenu: { Item: { css: { root: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test" visible>
        {menu => (
          <DropdownMenu {...menu} aria-label="Actions">
            <DropdownMenu.Group>
              <DropdownMenu.Item iconBefore="solid-pen" {...menu}>
                Edit
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share" {...menu}>
                Share
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature" {...menu}>
                Rename
              </DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger" {...menu}>
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu>
        )}
      </DropdownMenu.State>,
      {
        theme: { DropdownMenu: { Item: { defaultProps: { className: 'test', color: 'primary' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});