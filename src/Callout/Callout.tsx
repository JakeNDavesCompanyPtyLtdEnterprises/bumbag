import * as React from 'react';

import { CardCardProps } from '../Card/CardCard';
import { Box, Flex } from '../primitives';
// @ts-ignore
import { getUniqueId } from '../uniqueId';
import _Callout, { CalloutContent, CalloutFooter, CalloutHeader, CalloutIcon, CalloutTitle } from './styled';
import CalloutClose, { CalloutCloseProps } from './CalloutClose';

export interface LocalCalloutProps {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  closeButtonProps?: CalloutCloseProps;
  footer?: string | React.ReactElement<any>;
  hasTint?: boolean;
  icon?: string;
  onClickClose?: CalloutCloseProps['onClickClose'];
  showCloseButton?: boolean;
  title?: string | React.ReactElement<any>;
  type?: string;
}
export type CalloutProps = CardCardProps & LocalCalloutProps;

export const Callout: React.FunctionComponent<LocalCalloutProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  closeButtonProps,
  footer,
  hasTint,
  icon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}) => {
  return (
    <_Callout a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} hasTint={hasTint} type={type} {...props}>
      <Flex>
        {(type || icon) && (
          <CalloutTitle>
            {/*
              // @ts-ignore */}
            <CalloutIcon icon={(type || icon) as string} color={type} />
          </CalloutTitle>
        )}
        <Box>
          {title && (
            <CalloutHeader>
              {typeof title === 'string' ? <CalloutTitle id={a11yTitleId}>{title}</CalloutTitle> : title}
            </CalloutHeader>
          )}
          <CalloutContent id={a11yDescriptionId}>{children}</CalloutContent>
          {footer && <CalloutFooter>{footer}</CalloutFooter>}
        </Box>
      </Flex>
      {showCloseButton && <CalloutClose onClickClose={onClickClose} {...closeButtonProps} />}
    </_Callout>
  );
};

Callout.defaultProps = {
  a11yDescriptionId: getUniqueId('Callout'),
  a11yTitleId: getUniqueId('Callout'),
  children: undefined,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  hasTint: false,
  icon: undefined,
  onClickClose: undefined,
  showCloseButton: false,
  title: undefined,
  type: undefined
};

export default Callout;
