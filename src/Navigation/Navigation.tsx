import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { NavigationProps as ReakitNavigationProps } from 'reakit/ts';

import _Navigation from './styled';

export interface LocalNavigationProps {
  a11yTitle?: string;
  children: React.ReactNode;
  className?: string;
  use?: any;
}
export type NavigationProps = ReakitNavigationProps & LocalNavigationProps;

const Navigation: React.FunctionComponent<LocalNavigationProps> = ({ a11yTitle, children, className, ...props }) => (
  <_Navigation aria-label={a11yTitle} {...props} role={props.use ? 'navigation' : null}>
    {children}
  </_Navigation>
);

Navigation.propTypes = {
  a11yTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  use: PropTypes.any
};
Navigation.defaultProps = {
  a11yTitle: undefined,
  className: undefined,
  use: undefined
};

const C: React.FunctionComponent<NavigationProps> = Navigation;
export default C;
