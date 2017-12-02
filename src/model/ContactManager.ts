import { ContactListStore } from './ContactListStore';
import { Contact } from './Contact';

export class ContactManager {
    private _store = new ContactListStore();
    private _contacts = this._store.restore();

    get contacts() {
        return this._contacts;
    }

    addContact(name: string, phone: string) {
        const contact = new Contact(name, phone);
        
        this._contacts.add(contact);
        console.log("Added contact", contact);
    }
}