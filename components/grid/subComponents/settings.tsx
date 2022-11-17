import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import { DataSourceItem } from '../types';

interface Props {
  dataSource: DataSourceItem[];
}
export const Settings = ({ dataSource }: Props) => {
  const { setDataSource } = useContext(Context)!;

  useEffect(() => {
    setDataSource && setDataSource(dataSource);
  }, [dataSource]);

  return <></>;
};
