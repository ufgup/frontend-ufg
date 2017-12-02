import { Contact } from './Contact';

export class ContactList {
    readonly contacts = Array<Contact>();

    get isEmpty() {
        return this.contacts.length == 0;
    }

    add(contact: Contact) {
        this.contacts.push(contact);
    }

    remove(contact: Contact) {
        const index = this.contacts.indexOf(contact);
        
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
    }
}
