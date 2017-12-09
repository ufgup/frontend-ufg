import { containerless, bindable } from "aurelia-framework";

@containerless
export class UiButton {

  @bindable
  text: string;

  @bindable
  type: "button" | "submit" | "reset" = "button";

  @bindable
  theme: "" | "primary" | "blue" | "red" = "";

}
