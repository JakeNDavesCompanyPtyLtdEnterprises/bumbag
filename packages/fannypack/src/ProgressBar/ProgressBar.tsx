import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';
// @ts-ignore
import _get from 'lodash/get';

import _ProgressBar, { ProgressBarIndicator } from './styled';

export type LocalProgressBarProps = {
  color?: string;
  maxValue?: number;
  size?: string;
  value?: number;
};
export type ProgressBarProps = ReakitBoxProps & LocalProgressBarProps;

function normalizeValue(value: number, maxValue: number) {
  let newValue = value;
  if (newValue > maxValue) newValue = maxValue;
  else if (newValue < 0) newValue = 0;
  return newValue;
}

export const ProgressBar: React.FunctionComponent<LocalProgressBarProps> = ({ maxValue, value, ...props }) => {
  let newValue = value || 0;
  let newMaxValue = maxValue || 100;
  newValue = normalizeValue(newValue, newMaxValue);
  const percent = (newValue / newMaxValue) * 100;
  return (
    // @ts-ignore
    <_ProgressBar role="progressbar" aria-valuenow={newValue} aria-valuemin={0} aria-valuemax={newMaxValue} {...props}>
      <ProgressBarIndicator color={props.color} value={percent} />
    </_ProgressBar>
  );
};

ProgressBar.propTypes = {
  color: PropTypes.string,
  maxValue: PropTypes.number,
  size: PropTypes.string,
  value: PropTypes.number
};

ProgressBar.defaultProps = {
  color: 'primary',
  maxValue: 100,
  size: undefined,
  value: 0
};

// @ts-ignore
const C: React.FunctionComponent<ProgressBarProps> = ProgressBar;
export default C;
