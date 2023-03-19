import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import KanvasCore from '@kanvas/core';

export const {  client, ...core } = new KanvasCore({
  url: 'https://graphapidev.kanvas.dev/graphql',
  key: '7d0488b2-632e-4045-9d2d-370d9161644a',
});

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
