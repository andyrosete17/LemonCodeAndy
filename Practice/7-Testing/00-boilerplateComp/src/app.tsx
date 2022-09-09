import { NameEdit } from './name-edit';
import * as React from 'react';
import { SayHello } from './say-hello';
import { NameCollection } from './name-collection';
import { Router } from './router';
import { CookiesDialog } from './cookies-dialog';

export const App: React.FunctionComponent = () => {
  return (
    <>
      {/* <h1>05-Testing / 01 React</h1>
      <SayHello person="Andy" />
      <NameEdit />
      <NameCollection /> */}

      <Router />
      <CookiesDialog
        onAgreeClick={() => {
          console.log('click here');
        }}
      />
    </>
  );
};
