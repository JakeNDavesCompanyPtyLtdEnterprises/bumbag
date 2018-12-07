import * as React from 'react';
import { HeadingProps as ReakitHeadingProps } from 'reakit/ts/Heading/Heading';

import { CardTitle as _CardTitle } from './styled';

export interface LocalCardTitleProps {
  children: React.ReactNode;
  className?: string;
}
export type CardTitleProps = LocalCardTitleProps & ReakitHeadingProps;

const CardTitle: React.FunctionComponent<LocalCardTitleProps> = ({ children, ...props }) => (
  <_CardTitle use="h5" isSubHeading {...props}>
    {children}
  </_CardTitle>
);

CardTitle.defaultProps = {
  className: undefined
};

export default CardTitle as React.FunctionComponent<CardTitleProps>;
