import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

// @ts-ignore
import { getUniqueId } from '../uniqueId';
import CardCard, { CardCardProps } from './CardCard';
import CardContent, { CardContentProps } from './CardContent';
import CardHeader, { CardHeaderProps } from './CardHeader';
import CardFooter, { CardFooterProps } from './CardFooter';
import CardTitle, { CardTitleProps } from './CardTitle';

export interface LocalCardProps {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  footer?: string | React.ReactElement<any>;
  headerActions?: React.ReactElement<any>;
  isFullWidth?: boolean;
  title?: string | React.ReactElement<any>;
}
export interface CardComponents {
  Card: React.SFC<CardCardProps>;
  Header: React.SFC<CardHeaderProps>;
  Content: React.SFC<CardContentProps>;
  Footer: React.SFC<CardFooterProps>;
  Title: React.SFC<CardTitleProps>;
}

export const Card: React.SFC<LocalCardProps> & CardComponents = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  footer,
  headerActions,
  title,
  ...props
}) => (
  <CardCard a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} {...props}>
    {title && (
      <CardHeader>
        {typeof title === 'string' ? <CardTitle id={a11yTitleId}>{title}</CardTitle> : title}
        {headerActions && <div>{headerActions}</div>}
      </CardHeader>
    )}
    <CardContent id={a11yDescriptionId}>{children}</CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </CardCard>
);

Card.Card = CardCard;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;

Card.propTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  headerActions: PropTypes.element,
  isFullWidth: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
Card.defaultProps = {
  a11yDescriptionId: getUniqueId('Card'),
  a11yTitleId: getUniqueId('Card'),
  children: undefined,
  className: undefined,
  footer: undefined,
  headerActions: undefined,
  isFullWidth: false,
  title: undefined
};

export default Card;
