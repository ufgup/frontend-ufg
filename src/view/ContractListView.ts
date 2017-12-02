import "./ContractListView.scss";
import { ContactList } from '../model/ContactList';
import { ContactListController } from '../controller/ContactListController';

function elementOf<T extends Element>(id: string) {
    return <T>document.querySelector(id);
}

export class ContactListView {
    private readonly _contactList =
        elementOf<HTMLUListElement>("#contactList");

    private readonly _contactItemTemplate =
        elementOf<Element>("#contactItemTemplate");

    private readonly _nameInput =
        elementOf<HTMLInputElement>("#name");

    private readonly _phoneInput =
        elementOf<HTMLInputElement>("#phone");

    private readonly _addButton =
        elementOf<HTMLButtonElement>("#addButton");

    constructor(private readonly _controller: ContactListController) {
        this._contactItemTemplate.remove();
        this._addButton.addEventListener("click", () => this.onAddButtonClick());
    }

    showContacts(contacts: ContactList) {
        if (contacts.isEmpty) {
            this.showNoItems();
            return;
        }
    }

    showNoItems() {
        this.clearItems();

        const item = document.createElement("li");

        item.textContent = "Sem contatos registrados";
        this._contactList.appendChild(item);
    }

    clearItems() {
        while (this._contactList.children.length) {
            const child = this._contactList.children.item(0);
            this._contactList.removeChild(child);
        }
    }

    private onAddButtonClick() {
        const name = this._nameInput.value;
        const phone = this._phoneInput.value;
        
        this._controller.addContact(name, phone);
    }
}
