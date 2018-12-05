// @flow
import React from 'react';

import type { Size } from '../typesold';
import _Spinner from './styled';

type Props = {
  className?: string,
  color?: string,
  size?: Size
};

const Spinner = ({ className, color, size, ...props }: Props) => (
  <_Spinner className={className} color={color} size={size} {...props} />
);

Spinner.defaultProps = {
  className: undefined,
  color: 'primary',
  size: 'default'
};

export default Spinner;
