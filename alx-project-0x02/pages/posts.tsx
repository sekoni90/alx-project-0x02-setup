// pages/posts.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header title="Posts" />
        <main className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
          <p>This is the posts page content.</p>
        </main>
      </div>
    </>
  );
};

export default PostsPage;