// pages/about.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold">About This Project</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the /about route.
        </p>
      </main>
    </>
  );
};

export default AboutPage;