
/**
 * @link https://backtobackswe.com/platform/content/implement-text-editor-undo-redo/code
 * @param {Array<Array<string>>} actions
 * @return {string}
 */

const ACTIONS_MAP = {
  'INSERT': 'DELETE',
  'UNDO': 'REDO'
}
const performEditorActions = (actions) => {
  const state = []
  const actionsState = []

  for (const [operation, value] of actions) {
    switch (operation) {
      case 'INSERT':
        state.push(value)
        actionsState.push([ACTIONS_MAP[operation], value])
        break;
      case 'UNDO':
        console.log(value)
        break;
      case 'REDO':
        console.log(value)
        break;
    }
  }
}

performEditorActions([["INSERT", "a"], ["INSERT", "b"], ["DELETE", "b"], ["UNDO"], ["REDO"]])

// Input:
// INSERT 'a'
// INSERT 'b'

// Output: "ab"


// Input:
// INSERT 'a'
// INSERT 'b'
// UNDO

// Output: "a"

// Input:
// INSERT 'a'
// INSERT 'b'
// UNDO
// REDO

// Output: "ab"

// Input:
// INSERT 'a'
// INSERT 'b'
// UNDO
// REDO
// REDO # Does nothing

// Output: "ab"