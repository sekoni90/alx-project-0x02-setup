// pages/home.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the /home route.
        </p>
      </main>
    </>
  );
};

export default HomePage;