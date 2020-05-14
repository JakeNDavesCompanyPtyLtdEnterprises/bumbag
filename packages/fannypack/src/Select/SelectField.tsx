import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';
// @ts-ignore
import _omit from 'lodash/omit';

import Group from '../Group';
import Select, { LocalSelectProps, SelectProps, selectPropTypes, selectDefaultProps } from './Select';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperPropTypes,
  fieldWrapperDefaultProps
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';
import { formikField, reduxFormField } from '../adaptors/fields';

export type LocalSelectFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalSelectProps & {
    /** Addon component to the input (before). Similar to the addon components in Input. */
    addonBefore?: React.ReactElement<any>;
    /** Addon component to the input (after). Similar to the addon components in Input. */
    addonAfter?: React.ReactElement<any>;
    /** If addonBefore or addonAfter exists, then the addons will render vertically. */
    isVertical?: boolean;
    selectProps?: Omit<LocalSelectProps, 'options'>;
  };
export type SelectFieldProps = LocalSelectFieldProps & SelectProps;
export type SelectFieldComponents = {
  Formik: React.FunctionComponent<SelectFieldProps>;
  ReduxForm: React.FunctionComponent<SelectFieldProps>;
};

export const SelectField: React.FunctionComponent<LocalSelectFieldProps> & SelectFieldComponents = ({
  a11yLabel,
  a11yId,
  addonBefore,
  addonAfter,
  autoComplete,
  autoFocus,
  className,
  description,
  defaultValue,
  disabled,
  hint,
  isLoading,
  isFullWidth,
  isOptional,
  isRequired,
  isVertical,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  selectProps,
  selectRef,
  size,
  state,
  validationText,
  value,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
    {...props}
  >
    {({ elementProps }) => (
      <ConditionalWrap
        condition={addonBefore || addonAfter}
        wrap={(children: React.ReactNode) => <Group isVertical={isVertical}>{children}</Group>}
      >
        {addonBefore}
        <Select
          a11yId={a11yId}
          a11yLabel={a11yLabel}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={className}
          defaultValue={defaultValue}
          disabled={disabled}
          isFullWidth={isFullWidth}
          isLoading={isLoading}
          isRequired={isRequired}
          name={name}
          options={options}
          placeholder={placeholder}
          selectProps={selectProps}
          selectRef={selectRef}
          size={size}
          state={state}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          {...elementProps}
        />
        {addonAfter}
      </ConditionalWrap>
    )}
  </FieldWrapper>
);

SelectField.Formik = formikField(SelectField, { hasFieldWrapper: true });
SelectField.ReduxForm = reduxFormField(SelectField, { hasFieldWrapper: true });

export const selectFieldPropTypes = {
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  isVertical: PropTypes.bool,
  selectProps: PropTypes.shape(selectPropTypes),
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...selectPropTypes
};
SelectField.propTypes = selectFieldPropTypes;

export const selectFieldDefaultProps = {
  addonBefore: undefined,
  addonAfter: undefined,
  isVertical: false,
  selectProps: {},
  ...fieldWrapperDefaultProps,
  ...selectDefaultProps
};
SelectField.defaultProps = selectFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SelectFieldProps> & SelectFieldComponents = SelectField;
export default C;
