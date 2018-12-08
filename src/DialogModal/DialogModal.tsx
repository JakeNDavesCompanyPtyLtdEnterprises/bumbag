import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { ActionButtonsProps } from '../Button/ActionButtons';
// @ts-ignore
import { getUniqueId } from '../uniqueId';
import Dialog from '../Dialog';
import Modal, { LocalModalProps } from '../Modal/Modal';
import {
  Omit,
  AnimateProps,
  animateDefaultProps,
  animatePropTypes,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';

export interface Props {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  actionButtonsProps?: ActionButtonsProps;
  children:
    | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
    | React.ReactNode;
  className?: string;
  footer?:
    | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode)
    | string
    | React.ReactElement<any>;
  hide?(): void;
  /** Whether or not to show the modal component */
  isVisible?: boolean;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  title?: string | React.ReactElement<any>;
  type?: 'alert';
}
export type LocalDialogModalProps = AnimateProps & RestrictHideProps & Omit<LocalModalProps, 'children'> & Props;

export const DialogModal: React.FunctionComponent<LocalDialogModalProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  actionButtonsProps,
  children,
  footer,
  hide,
  showActionButtons,
  showCloseButton,
  title,
  type,
  ...props
}) => (
  <Modal hide={hide} type={type} {...props}>
    {({ fallbackFocusRef, initialFocusRef }) => (
      <Dialog
        a11yDescriptionId={a11yDescriptionId}
        a11yTitleId={a11yTitleId}
        actionButtonsProps={{
          cancelProps: {
            elementRef: initialFocusRef,
            use: Modal.Hide,
            // @ts-ignore
            hide,
            ...(actionButtonsProps || {}).cancelProps
          },
          ...actionButtonsProps
        }}
        closeButtonProps={{ elementRef: initialFocusRef }}
        elementRef={fallbackFocusRef}
        // @ts-ignore
        footer={typeof footer === 'function' ? footer({ initialFocusRef }) : footer}
        onClickClose={hide}
        role={type === 'alert' ? 'alertdialog' : 'dialog'}
        showActionButtons={showActionButtons}
        showCloseButton={showCloseButton}
        tabIndex={-1}
        // @ts-ignore
        title={title}
        width="100%"
      >
        {/*
         // @ts-ignore */}
        {typeof children === 'function' ? children({ initialFocusRef }) : children}
      </Dialog>
    )}
  </Modal>
);

DialogModal.propTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  actionButtonsProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.element]),
  hide: PropTypes.func,
  isVisible: PropTypes.bool,
  showActionButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['alert']),
  ...animatePropTypes,
  ...restrictHidePropTypes
};
DialogModal.defaultProps = {
  actionButtonsProps: {},
  a11yDescriptionId: getUniqueId('Modal'),
  a11yTitleId: getUniqueId('Modal'),
  className: undefined,
  footer: undefined,
  isVisible: false,
  showActionButtons: false,
  showCloseButton: false,
  title: undefined,
  type: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnEsc: true,
  hideOnClickOutside: true
};

export default DialogModal;
