// pages/home.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '../components/common/Card';
import PostModal, { PostData } from '../components/common/PostModal';

const HomePage: React.FC = () => {
  // initial posts (example)
  const [posts, setPosts] = useState<PostData[]>([
    { title: 'Welcome', content: 'This is the first example post.' },
    { title: 'Getting started', content: 'Click "New Post" to add more posts.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    // Prepend to show newest first
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project 2</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header title="ALX Project 2" />

        <main className="max-w-6xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Home</h1>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded bg-blue-600 text-white"
                type="button"
              >
                New Post
              </button>
            </div>
          </div>

          <section className="grid gap-4 md:grid-cols-2">
            {posts.map((p, idx) => (
              <Card key={idx} title={p.title} content={p.content} />
            ))}
          </section>
        </main>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
};

export default HomePage;