import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ReakitBoxProps } from '../types';

import { ListItem as _ListItem } from './styled';

export type LocalListItemProps = {
  children: React.ReactNode;
  className?: string;
};
export type ListItemProps = ReakitBoxProps & LocalListItemProps;

export const ListItem: React.FunctionComponent<LocalListItemProps> = ({ children, className, ...props }) => (
  <_ListItem use="li" className={className} {...props}>
    {children}
  </_ListItem>
);

export const listItemPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
ListItem.propTypes = listItemPropTypes;

export const listItemDefaultProps = {
  className: undefined
};
ListItem.defaultProps = listItemDefaultProps;

const C: React.FunctionComponent<ListItemProps> = ListItem;
export default C;
