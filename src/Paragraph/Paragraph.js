// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Paragraph from './styled';

type Props = {
  children: Node,
  className?: string,
  color?: Palette
};

const Paragraph = ({ children, className, ...props }: Props) => (
  <_Paragraph className={className} {...props}>
    {children}
  </_Paragraph>
);

Paragraph.defaultProps = {
  className: undefined,
  color: undefined
};

export default Paragraph;
