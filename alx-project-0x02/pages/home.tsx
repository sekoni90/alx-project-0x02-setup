// pages/home.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Welcome to ALX Project 2" content="This is a reusable card component. you can pass any content here." />
        <Card title="About this page" content="this page demonstrates how to use the card component with different props." />
        <Card title="learning Next.js" content=" Next.js pages routing, components, and styling with Tailwind CSS." />

      </main>
    </>
  );
};

export default HomePage;