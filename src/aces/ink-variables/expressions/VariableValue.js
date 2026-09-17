import { InkList } from "inkjs";

export const config = {
  id: "var-value",
  highlight: false,
  isDeprecated: false,
  returnType: "any",
  description: "The value of an ink variable. Returns an empty string if the variable does not exist (see the 'Variable exists' condition).",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The ink variable to fetch the value for",
      type: "string",
    },
  ],
};

export const expose = true;

export default function (name) {
    if (!this._story || !this._story.variablesState.GlobalVariableExistsWithName(name)) {
        return "";
    }
    let value = this._story.variablesState[name];
    if (value instanceof InkList) {
        return value.maxItem.Key.itemName;
    } else {
        return this.toConstructAllowedValue(value);
    }
}
