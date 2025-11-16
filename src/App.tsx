import { Suspense } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Toaster } from 'react-hot-toast'; // ✅ Toast import
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import PageNotFound from './pages/PageNotFound';

function App() {
  const allRoutes = [
    ...routes,
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(allRoutes)}</Suspense>
      <Toaster position="top-center" reverseOrder={false} /> {/* ✅ Toast container */}
    </>
  );
}

export default App;
