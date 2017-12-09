import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    "./value-converters/PhoneValueConverter",
    "./elements/ui-form",
    "./elements/ui-field",
    "./elements/ui-button",
  ]);
}
