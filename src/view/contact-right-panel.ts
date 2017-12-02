import { bindable } from 'aurelia-framework';
import { Contact } from '../viewmodel/contact';

export class ContactRightPanel {
  contact: Contact = new Contact();

  @bindable
  contacts: Array<Contact> = [];

  addContact() {
    this.contacts.push(this.contact);
    this.contact = new Contact();
  }
}
