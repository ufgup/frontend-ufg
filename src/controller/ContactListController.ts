import { ContactManager } from '../model/ContactManager';
import { ContactListView } from "../view/ContractListView";


export class ContactListController {
    private readonly _view = new ContactListView(this);
    private readonly _manager = new ContactManager();

    initialize() {
        this._view.showContacts(this._manager.contacts);
    }

    addContact(name: string, phone: string) {
        this._manager.addContact(name, phone);
        this._view.showContacts(this._manager.contacts);
    }
}
