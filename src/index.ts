import { ContactListController } from './controller/ContactListController';

const controller = new ContactListController();

controller.initialize();

declare const module: any;

if (module.hot) {
    module.hot.accept();
}
