import * as React from "react";
import { Grid } from './components'
import "./style.css";

/**
 * Implements the Grid Component to display the source according to the template.
 * The component should be used exactly the way the code is provided.
 * No external library should be added.
 *
 * This component is a datagrid, that should display rows, with cells, following the
 * column definition.
 *
 * The component SHOULD NOT draw in a column container, but in separated rows like a table or a datagrid
 * will do. Each item in the datasource must be rendered as row.
 *
 * ------------------------------------
 * |    name    |  age  |  LastLogin  |
 * ------------------------------------
 * |   name 01  |  22   | 2022-04-08  |
 * ------------------------------------
 * |   name 02  |  19   | 2022-04-08  |
 * ------------------------------------
 * |   name 03  |  28   | 2022-04-08  |
 * ------------------------------------
 *
 * The template must not be changed. The template is the final result expected.
 * You need to implement this component and make this template works without ANY modification.
 *
 * Any column can accept an optional size, and an optional render function.
 * If the render function is passed, the cell should use this function, if not it should render the
 * content as is.
 *
 * The datapath attribute defines the field name to access the value in a datasource item
 */

export default function App() {
  const source = [
    { name: "name 01", age: 22, lastLogin: new Date() },
    { name: "name 02", age: 19, lastLogin: new Date() },
    { name: "name 03", age: 28, lastLogin: new Date() },
  ];

  return (
    <div>
      <Grid>
        <Grid.Settings dataSource={source} />
        <Grid.Column dataPath="name" width={120} />
        <Grid.Column dataPath="age" />
        <Grid.Column
          dataPath="lastLogin"
          render={(value: Date) => <span>{value.toLocaleDateString()}</span>}
        />
      </Grid>
      <hr />
      <Grid>
        <Grid.Settings dataSource={source} />
        <Grid.Column
          dataPath="name"
          render={(value: string) => <span>{value.toUpperCase()}</span>}
        />
        <Grid.Column dataPath="age" width={200} />
        <Grid.Column
          dataPath="lastLogin"
          render={(value: Date) => <span>{value.toLocaleDateString()}</span>}
        />
      </Grid>
    </div>
  );
}
