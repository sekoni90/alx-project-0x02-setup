// pages/posts.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { GetServerSideProps } from 'next';
import { PostProps } from '@/interfaces';

type PostsPageProps = {
  posts: PostProps[];
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header title="Posts" />

        <main className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Posts</h1>

          <section className="grid gap-4 md:grid-cols-2">
            {posts.map((p, idx) => (
              <PostCard key={idx} title={p.title} content={p.content} userId={p.userId} />
            ))}
          </section>
        </main>
      </div>
    </>
);
};

export default PostsPage;

// Server-side fetch to satisfy "fetch data from an API" requirement
export const getServerSideProps: GetServerSideProps<PostsPageProps> = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
    const data = await res.json();

    // Map API shape { userId, id, title, body } -> PostProps { title, content, userId }
    const posts: PostProps[] = Array.isArray(data)
      ? data.map((p: any) => ({
          title: String(p.title ?? ''),
          content: String(p.body ?? ''),
          userId: Number(p.userId ?? 0),
        }))
      : [];

    return { props: { posts } };
  } catch (error) {
    // On error, return empty list — page will still render
 return { props: { posts: [] } };
  }
};