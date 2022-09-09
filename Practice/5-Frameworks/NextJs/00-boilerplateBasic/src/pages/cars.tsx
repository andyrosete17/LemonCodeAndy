import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppLayout, CarListComponent } from '../components';

const CarListPage = () => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.push('/');
  };
  return (
    <>
      <AppLayout>
        <Head>
          <title>Car list</title>
        </Head>
        <CarListComponent />

        <button onClick={onNavigateBack}>Navigate Home</button>
      </AppLayout>
    </>
  );
};

export default CarListPage;
