// pages/home.tsx
import Head from 'next/head';
import React from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <>
       <Header title="ALX Project" />
      <main className="p-6 space-y-4">
        <Card title="First Card" content="This is the content of the first card." />
        <Card title="Second Card" content="Here’s some more content for the second card." />
      </main>
    </>
  );
};

export default HomePage;