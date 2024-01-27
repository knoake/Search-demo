import { User } from './user';

export interface Issue {
  /**
   * Title of the issue
   */
  title: string;

  /**
   * Description of the issue
   */
  description?: string;

  /**
   * Assignee of the issue
   */
  assignee?: User;

  /**
   * Assignee of the issue
   */
  creator: User;

  /**
   * Status of the issue
   */
  status: Status;

  /**
   * Creation date of the issue
   */
  creationDate: Date;

  /**
   * Due date of the issue
   */
  dueDate?: Date;

  /**
   * Subscribers of the issue
   */
  subscribers?: User[];
}

export type Status = 'Resolved' | 'Unresolved';
