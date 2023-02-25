import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export const ComposeContext = (props: IComposeContext) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (accumulator, Component: any) => {
          return <Component>{accumulator}</Component>;
        },
        children,
      )}
    </>
  );
};
