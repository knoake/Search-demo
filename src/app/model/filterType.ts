export interface FilterType {
  /**
   * The type of the filter
   */
  key: string;

  /**
   * Text to display for the filter
   */
  displayName: string;

  /**
   * Type of input to use in the UI
   */
  inputType: InputType;
}

export interface FilterValue {
  /**
   * The type of the filter
   */
  key: string;

  /**
   * Search criteria for the type
   */
  criteria: string;

  /**
   * Value of input
   */
  value: InputType;
}

export type InputType = 'user' | 'single-select' | 'date' | 'text';
