import React from 'react';
import render from '../../_utils/tests/render';
import Text from '../Text';
import 'jest-styled-components';

it('renders correctly for a basic text', () => {
  const { container } = render(<Text>test</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for text with a color', () => {
  const { container } = render(<Text color="primary">test</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for text with a another element', () => {
  const { container } = render(
    <Text use="strong" color="primary">
      test
    </Text>
  );
  expect(container.firstChild).toMatchSnapshot();
});
