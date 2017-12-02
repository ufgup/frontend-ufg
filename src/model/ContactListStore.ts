import { ContactList } from './ContactList';
import { Contact } from './Contact';

export class ContactListStore {
    private readonly key = "contacts";

    store(contacts: ContactList) {
        localStorage.setItem(this.key, JSON.stringify(contacts));
    }

    restore() {
        const storedContactsValue = localStorage.getItem(this.key);

        if (!storedContactsValue) {
            return new ContactList();
        }

        const storedContacts: ContactList = JSON.parse(storedContactsValue);
        const list = new ContactList();
        
        for (const contact of storedContacts.contacts) {
            list.add(new Contact(contact.name, contact.phone));
        }

        return list;
    }
}