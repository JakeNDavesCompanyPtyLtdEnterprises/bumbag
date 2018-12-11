import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import Portal from 'reakit/Portal';

import { isFunction } from '../_utils/assert';
import TrapFocus from '../_utils/TrapFocus';
import Backdrop from '../Backdrop';
import { OverlayProps } from '../Overlay/Overlay';
import ModalContainer, { ModalContainerProps } from './ModalContainer';
import ModalHide, { ModalHideProps } from './ModalHide';
import ModalShow, { ModalShowProps } from './ModalShow';
import _Modal from './styled';
import {
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';

export interface Props {
  children:
    | React.ReactNode
    | ((
        {
          fallbackFocusRef,
          initialFocusRef
        }: { fallbackFocusRef: React.RefObject<HTMLElement>; initialFocusRef: React.RefObject<HTMLElement> }
      ) => React.ReactNode);
  className?: string;
  /** Whether or not to show the modal component */
  isVisible?: boolean;
  hide?(): void;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  type?: 'alert' | void;
}
export type LocalModalProps = Props & RestrictHideProps & AnimateProps;
export type ModalProps = OverlayProps & LocalModalProps;
export interface ModalComponents {
  Container: React.FunctionComponent<ModalContainerProps>;
  Hide: React.FunctionComponent<ModalHideProps>;
  Show: React.FunctionComponent<ModalShowProps>;
}

export const Modal: React.FunctionComponent<LocalModalProps> & ModalComponents = ({
  children,
  delay,
  duration,
  fade,
  hide,
  hideOnEsc,
  hideOnClickOutside,
  isVisible,
  showActionButtons,
  showCloseButton,
  type,
  ...props
}) => (
  <Portal>
    <TrapFocus isActive={isVisible} usesPortal>
      {({ fallbackFocusRef, initialFocusRef }) => (
        <React.Fragment>
          <Backdrop
            delay={delay}
            duration={duration}
            expand={undefined}
            hide={hideOnClickOutside && type !== 'alert' ? hide : undefined}
            fade={fade}
            hideOnEsc={type === 'alert' ? false : hideOnEsc}
            isVisible={isVisible}
            slide={undefined}
            use={hideOnClickOutside && type !== 'alert' ? ModalHide : undefined}
          />
          <_Modal
            aria-modal="true"
            delay={delay}
            duration={duration}
            fade={fade}
            hideOnEsc={type === 'alert' ? false : hideOnEsc}
            hideOnClickOutside={type === 'alert' ? false : hideOnClickOutside}
            isVisible={isVisible}
            {...props}
          >
            {isFunction(children) ? children({ fallbackFocusRef, initialFocusRef }) : children}
          </_Modal>
        </React.Fragment>
      )}
    </TrapFocus>
  </Portal>
);

Modal.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  hide: PropTypes.func,
  showActionButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  type: PropTypes.oneOf(['alert']),
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Modal.defaultProps = {
  className: undefined,
  isVisible: false,
  showActionButtons: false,
  showCloseButton: false,
  type: undefined,
  ...animateDefaultProps,
  ...restrictDefaultProps,
  hideOnClickOutside: true,
  hideOnEsc: true
};

Modal.Container = ModalContainer;
Modal.Hide = ModalHide;
Modal.Show = ModalShow;

const C: React.FunctionComponent<ModalProps> & ModalComponents = Modal;
export default C;
