import { ContactList } from './../model/ContactList';

function elementOf<T extends Element>(id: string) {
    return <T>document.querySelector(id);
}

export class ContactListView {
    private readonly _contactList =
        elementOf<HTMLUListElement>("#contactList");

    private readonly _contactListTemplate =
        elementOf<HTMLUListElement>("#contactListTemplate");

    constructor() {
        
    }

    showContacts(contacts: ContactList) {
        
    }
}
