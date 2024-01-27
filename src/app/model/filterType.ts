import { TemplateRef } from '@angular/core';
import { Status } from './issue';
import { User } from './user';

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
  inputType: string;
}

export type InputType = 'Select' | 'Date' | 'Text';
