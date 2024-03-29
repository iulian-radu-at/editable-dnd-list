# editable-dnd-list ![Weekly downloads](https://img.shields.io/npm/dw/editable-dnd-list 'Weekly downloads')

An editable DnD list.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/editable-dnd-list/).

## Props

| Name     | Type                    | Required | Default | Description                                                     |
| -------- | ----------------------- | -------- | ------- | --------------------------------------------------------------- |
| items    | Task[]                  | no       | []      | The initial list of items                                       |
| onChange | (items: Task[]) => void | yes      | -       | The function called when there are changes in the list of items |

## Props of Task

| Name | Type   | Required | Default | Description                    |
| ---- | ------ | -------- | ------- | ------------------------------ |
| id   | string | yes      | -       | The unique if of the item      |
| text | string | yes      | -       | The text representing the item |

---

## Versions

| EditableDndList _uses_ | Material-ui |      React       |
| ---------------------: | :---------: | :--------------: |
|                  1.0.x |             |      16.8.0      |
|                  1.1.x |             |      16.8.0      |
|                  1.2.x |   4.10.12   |      16.8.0      |
|                  1.3.x |   4.11.0    |      16.8.0      |
|                  1.4.x |   4.11.3    | 16.9.0 or 17.0.0 |
|                  1.5.x |   4.12.3    | 16.9.0 or 17.0.0 |
|                  2.0.x |   5.10.17   |     >=18.0.0     |

### About versioning schema used for EditableDndList

- Major - it will be increased if any major version of any dependat package changes or there are breaking changes in this package
- Minor - it will be increased if any minor or patch version of any dependat package changes or there is added functionality in a backwards compatible manner
- Patch - it will be increased if there are backwards compatible bug fixes

---

## Example

Displaying a list having initially two items:

```js
import * as React from "react";
import EditableDndList from "editable-dnd-list";

class App extends React.Component {
  private items: Task[] = [
    {
      id: '1',
      text: 'Text 1'
    },
    {
      id: '2',
      text: 'Text 2'
    }
  ];

  render() {
    return (
      <div className="App">
        <EditableDndList items={this.items} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (items: Task[]) => console.log({ items });
}

export default App;
```

---

## Changelog

### 1.0.0

- editable-dnd-list is made publicly available

### 1.0.1

- Fixed bug related to missing assets in lib

### 1.1.0

- Updated packages

### 1.2.0

- Updated packages

### 1.2.1

- Updated packages
- Moved from npm to yarn

### 1.2.2

- Updated packages

### 1.2.3

- Updated packages

### 1.3.0

- Updated packages

### 1.3.1

- Fixed crash produced by "export \* from"

### 1.4.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

### 1.5.0

- Updated the packages

### 2.0.0

- Migrated to material-ui 5
- Supports minimum React 18
