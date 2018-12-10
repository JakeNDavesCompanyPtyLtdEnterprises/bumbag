import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { ParagraphProps as ReakitParagraphProps } from 'reakit/ts';

import _Paragraph from './styled';

export interface LocalParagraphProps {
  children: React.ReactNode;
  className?: string;
}
export type ParagraphProps = ReakitParagraphProps & LocalParagraphProps;

export const Paragraph: React.FunctionComponent<LocalParagraphProps> = ({ children, className, ...props }) => (
  <_Paragraph className={className} {...props}>
    {children}
  </_Paragraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Paragraph.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<ParagraphProps> = Paragraph;
export default Paragraph;
