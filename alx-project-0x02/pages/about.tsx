// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header title="About Page" />
        <main className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">About Page</h1>
          <div className="flex gap-4 flex-wrap">
            <Button size="small" shape="rounded-sm">
              Small Rounded-sm
            </Button>
            <Button size="medium" shape="rounded-md">
              Medium Rounded-md
            </Button>
            <Button size="large" shape="rounded-full">
              Large Rounded-full
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;