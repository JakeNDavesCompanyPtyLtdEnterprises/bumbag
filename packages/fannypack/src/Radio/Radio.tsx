import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import { formikField, reduxFormField } from '../adaptors/fields';
import Text from '../Text';
import _Radio, { RadioIcon, HiddenRadio } from './styled';

export type LocalRadioProps = {
  /** An accessible id for the radio */
  a11yId?: string;
  /** Automatically focus on the radio */
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  /** Is the radio checked by default */
  defaultChecked?: boolean;
  /** Disables the radio */
  disabled?: boolean;
  /** Makes the radio required and sets aria-invalid to true */
  isRequired?: boolean;
  /** radio label */
  label: string;
  name?: string;
  radioRef?: React.RefObject<any>;
  /** State of the radio. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type RadioProps = ReakitLabelProps & LocalRadioProps;
export type RadioComponents = {
  Formik: React.FunctionComponent<RadioProps>;
  ReduxForm: React.FunctionComponent<RadioProps>;
};

export const Radio: React.FunctionComponent<LocalRadioProps> & RadioComponents = ({
  a11yId,
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  radioRef,
  state,
  value,
  ...props
}) => (
  <_Radio
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={label}
    aria-required={isRequired}
    {...props}
  >
    <HiddenRadio
      autoFocus={autoFocus}
      checked={checked}
      elementRef={radioRef}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={a11yId}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      state={state}
      type="radio"
      value={value}
    />
    <RadioIcon state={state} />
    <Text id="label" htmlFor={a11yId} marginLeft="minor-2">
      {label}
    </Text>
  </_Radio>
);

Radio.Formik = formikField(Radio, { isCheckbox: true });
Radio.ReduxForm = reduxFormField(Radio, { isCheckbox: true });

export const radioPropTypes = {
  a11yId: PropTypes.string,
  autoFocus: PropTypes.bool,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) as PropTypes.Validator<LocalRadioProps['checked']>,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  radioRef: PropTypes.object as PropTypes.Validator<LocalRadioProps['radioRef']>,
  state: PropTypes.string,
  value: PropTypes.string
};
Radio.propTypes = radioPropTypes;

export const radioDefaultProps = {
  a11yId: undefined,
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  isRequired: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  name: undefined,
  radioRef: undefined,
  state: undefined,
  value: undefined
};
Radio.defaultProps = radioDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<RadioProps> & RadioComponents = Radio;
export default C;
