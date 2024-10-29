import {Layout, Spinner} from '@ui-kitten/components';
import React from 'react';

export const FullScreenLoader = () => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spinner size="giant" />
    </Layout>
  );
};
