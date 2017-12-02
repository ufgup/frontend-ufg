import { ContactList } from './../model/ContactList';
import { ContactListView } from "../view/ContractListView";


export class ContactListController {
    private readonly _view = new ContactListView();
    private _model = new ContactList();

    initialize() {
        this._view.showContacts(this._model);
    }
}
