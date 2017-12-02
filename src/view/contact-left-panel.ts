import { bindable } from 'aurelia-framework';
import { Contact } from '../viewmodel/contact';

export class ContactLeftPanel {
  @bindable
  contacts: Contact[] = [];
}
