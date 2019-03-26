import * as React from 'react';

const FIELDS_WITH_FIELD_WRAPPERS = [
  'CheckboxField',
  'InputField',
  'RadioField',
  'RadioGroupField',
  'SelectField',
  'SelectMenuField',
  'SwitchField',
  'TextareaField'
];
const SELECT_MENUS = ['SelectMenu', 'SelectMenuField'];

const bindFns = (...fns: Array<Function>) => (...args: any) => {
  fns.forEach(fn => fn && fn(...args));
};

export function formikField(Component: any) {
  return ({ field, form, ...props }: any) => {
    let overrideProps = {};

    if (FIELDS_WITH_FIELD_WRAPPERS.includes(Component.name)) {
      let state = form.touched[field.name] && form.errors[field.name] ? 'danger' : undefined;
      if (props.state) {
        state = props.state;
      }

      let validationText = form.touched[field.name] && form.errors[field.name] ? form.errors[field.name] : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        state,
        validationText
      };
    }

    let onBlur = field.onBlur;
    let onChange = field.onChange;
    if (SELECT_MENUS.includes(Component.name)) {
      onBlur = () => form.setFieldTouched(field.name);
      // @ts-ignore
      onChange = (value: any, option: any, newValues: any) => form.setFieldValue(field.name, newValues);
    }

    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange)
    };

    return <Component {...props} {...field} {...overrideProps} />;
  };
}

export function reduxFormField(Component: any) {
  return ({ input, meta, ...props }: any) => {
    let overrideProps = {};

    if (FIELDS_WITH_FIELD_WRAPPERS.includes(Component.name)) {
      let state = meta.touched && meta.error ? 'danger' : undefined;
      if (props.state) {
        state = props.state;
      }

      let validationText = meta.touched && meta.error ? meta.error : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        state,
        validationText
      };
    }

    let onBlur = input.onBlur;
    let onChange = input.onChange;
    if (SELECT_MENUS.includes(Component.name)) {
      // @ts-ignore
      onChange = (value: any, option: any, newValues: any) => input.onChange(newValues);
      onBlur = () => input.onBlur(input.value);
    }

    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange)
    };

    return <Component {...props} {...input} {...overrideProps} />;
  };
}
