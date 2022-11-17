import React, { createContext } from 'react';
import { DataSourceItem } from './types';

interface GridContext {
  dataSource: DataSourceItem[] | undefined;
  setDataSource: (dataSource: DataSourceItem[]) => void;
}

const Context = createContext<GridContext | null>(null);

export { Context };
