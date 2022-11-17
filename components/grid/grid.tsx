import React, { useState, Children } from 'react';
import { Settings, Column } from './subComponents';
import { Context } from './context';
import { DataSourceItem } from './types';

export interface Props {
  children: JSX.Element[];
}

const GridComponent = ({ children }: Props) => {
  const [dataSource, setDataSource] = useState<DataSourceItem[]>();

  const renderSettings = () => {
    return Children.map(children, (child) =>
      child.type.name === 'Settings' ? child : null
    );
  };

  const renderHeader = () => {
    return Children.map(children, (child) =>
      child.type.name === 'Column' ? (
        <td width={child.props.width}>{child.props.dataPath}</td>
      ) : null
    );
  };

  const renderDataRow = (item: DataSourceItem) => {
    return Children.map(children, (child) =>
      child.type.name === 'Column' ? (
        <td>
          {child.props.render
            ? child.props.render(item[child.props.dataPath])
            : item[child.props.dataPath].toString()}
        </td>
      ) : null
    );
  };

  const renderBody = () => {
    return dataSource?.map((item) => {
      return <tr>{renderDataRow(item)}</tr>;
    });
  };

  return (
    <Context.Provider value={{ dataSource, setDataSource }}>
      {renderSettings()}
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </Context.Provider>
  );
};

export const Grid = Object.assign(GridComponent, {
  Settings,
  Column,
});
