import { Box as ReakitBox, useGroup as useReakitGroup } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { LayoutBreakpoint } from '../types';

import * as styles from './styles';

export type LocalGroupProps = {
  borderRadius?: string;
  orientation?: 'vertical' | 'horizontal';
  verticalBelow?: LayoutBreakpoint;
};
export type GroupProps = BoxProps & LocalGroupProps;

const useProps = createHook<GroupProps>(
  (props, { themeKey, themeKeyOverride }) => {
    let htmlProps = props;
    const groupProps = useReakitGroup({}, htmlProps);
    htmlProps = Box.useProps({ ...props, ...groupProps });

    const className = useClassName({
      style: styles.Group,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { defaultProps: { borderRadius: 'default' }, themeKey: 'Group' }
);

export const Group = createComponent<GroupProps>(
  (props) => {
    const groupProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: groupProps });
  },
  {
    attach: { useProps, displayName: 'Group' },
    themeKey: 'Group',
  }
);
