// pages/index.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Scaffolded Next.js + TypeScript + Tailwind CSS" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header title="ALX Project 2" />

        <main className="max-w-4xl mx-auto p-6">
          
          <h1 className="text-4xl font-bold">Welcome to ALX Project 2</h1>
          <p className="mt-4 text-lg text-gray-700">
            This Next.js app uses TypeScript, ESLint and Tailwind CSS. You're good to go!
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
