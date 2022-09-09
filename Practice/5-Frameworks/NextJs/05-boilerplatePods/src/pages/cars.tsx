 
import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppLayout } from 'layouts';
import { CarListContainer, api } from 'pods/car-list';

interface Props {
  carList: api.Car[];
}

const CarListPage: React.FC<Props> = (props) => {
  const { carList } = props;
  console.log(`Car list on component: `, { carList });

  return (
    <AppLayout>
      <Head>
        <title>Rent a car - Car list</title>
      </Head>
      <CarListContainer carList={carList} />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const carList = await api.getCarList();
  console.log('Car list build time:', { carList });
  return {
    props: {
      carList,
    },
  };
};

export default CarListPage;
