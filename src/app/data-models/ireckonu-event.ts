import { Member } from './member';

export interface IreckonuEvent {
  dateTime?: string;
  description?: string;
  id?: string;
  image?: string;
  members?: Member[];
  status?: string;
  title?: string;
}
