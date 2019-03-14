// @flow

import * as React from 'react' // eslint-disable-line no-unused-vars

export type TextInputPropsType = {
  /** The class to use for the root element. */
  className?: string,

  /** Children to put inside this component. */
  children?: React.Node,

  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete?: string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus?: boolean,

  /**
   * The default value of the `Input` element.
   */
  defaultValue?: string | number,

  /**
   * If `true`, the input will be disabled.
   */
  disabled?: boolean,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean,

  /**
   * Properties applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps?: Object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean,

  /**
   * The helper text content.
   */
  helperText?: React.Node,

  /**
   * The id of the `input` element.
   * Use this property to make `label` and `helperText` accessible for screen readers.
   */
  id?: string,

  /**
   * Properties applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps?: Object,

  /**
   * Properties applied to the `Input` element.
   */
  InputProps?: Object,

  /**
   * Attributes applied to the native `input` element.
   */
  inputProps?: Object,

  /**
   * Use this property to pass a ref callback to the native input component.
   */
  inputRef?: Function | Object,

  /**
   * The label content.
   */
  label?: React.Node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin?: 'none' | 'dense' | 'normal',

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline?: boolean,

  /**
   * Name attribute of the `input` element.
   */
  name?: string,

  /**
   * @ignore
   */
  onBlur?: Function,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange?: Function,

  /**
   * @ignore
   */
  onFocus?: Function,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string,

  /**
   * If `true`, the label is displayed as required and the input will be required.
   */
  required?: boolean,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number,

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax?: string | number,

  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select?: boolean,

  /**
   * Properties applied to the [`Select`](/api/select/) element.
   */
  SelectProps?: Object,

  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type?: string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value?: string | number | boolean | Array<string | number | boolean>,

  /**
   * The variant to use.
   */
  variant?: 'standard' | 'outlined' | 'filled'
}
