import React, { useContext, useEffect } from 'react';
import { Context } from '../context';

interface Props {
  dataPath: string;
  width?: number;
  render?: (value: any) => JSX.Element;
}

export const Column = ({ dataPath, width, render }: Props) => {
  return null;
};
