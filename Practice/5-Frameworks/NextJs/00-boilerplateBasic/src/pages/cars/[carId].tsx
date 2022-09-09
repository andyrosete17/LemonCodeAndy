import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const CarPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Car details {router.query.carId}</title>
      </Head>
      <h2>Car detail page</h2>
      <p>{router.query.carId}</p>
    </>
  );
};

export default CarPage;
