import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ReakitBoxProps } from '../types';
// @ts-ignore
import _get from 'lodash/get';

import { Omit, Size, sizePropType } from '../types';
import _ProgressBar, { ProgressBarIndicator } from './styled';

export type LocalProgressBarProps = {
  color?: string;
  maxValue?: number;
  size?: Size;
  value?: number;
};
export type ProgressBarProps = Omit<ReakitBoxProps, 'size'> & LocalProgressBarProps;

function normalizeValue(value: number, maxValue: number) {
  let newValue = value;
  if (newValue > maxValue) newValue = maxValue;
  else if (newValue < 0) newValue = 0;
  return newValue;
}

export const ProgressBar: React.FunctionComponent<LocalProgressBarProps> = ({ maxValue, size, value, ...props }) => {
  let newValue = value || 0;
  let newMaxValue = maxValue || 100;
  newValue = normalizeValue(newValue, newMaxValue);
  const percent = (newValue / newMaxValue) * 100;
  return (
    // @ts-ignore
    <_ProgressBar
      role="progressbar"
      aria-valuenow={newValue}
      aria-valuemin={0}
      aria-valuemax={newMaxValue}
      styledSize={size}
      {...props}
    >
      <ProgressBarIndicator color={props.color} value={percent} />
    </_ProgressBar>
  );
};

export const progressBarPropTypes = {
  color: PropTypes.string,
  maxValue: PropTypes.number,
  size: sizePropType,
  value: PropTypes.number
};
ProgressBar.propTypes = progressBarPropTypes;

export const progressBarDefaultProps: Partial<LocalProgressBarProps> = {
  color: 'primary',
  maxValue: 100,
  size: 'default',
  value: 0
};
ProgressBar.defaultProps = progressBarDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<ProgressBarProps> = ProgressBar;
export default C;
