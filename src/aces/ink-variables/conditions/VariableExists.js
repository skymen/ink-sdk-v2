export const config = {
  id: "var-exists",
  highlight: false,
  isDeprecated: false,
  listName: "Variable exists",
  displayText: "Variable {0} exists",
  description: "Check whether a global ink variable with the given name exists in the story.",
  params: [
    {
      id: "var",
      name: "Variable",
      desc: "The name of the ink variable to check for",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name) {
  return !!this._story && this._story.variablesState.GlobalVariableExistsWithName(name);
}
