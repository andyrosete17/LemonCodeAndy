import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Rent a car</title>
      </Head>
      <h2>Hello from NextJs</h2>
      <Link href="/cars">Navigate to cars list</Link>
    </>
  );
};

export default HomePage;
