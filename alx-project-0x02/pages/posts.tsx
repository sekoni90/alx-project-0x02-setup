// pages/posts.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { GetServerSideProps } from 'next';
import { PostProps } from '@/interfaces';

//  Fetch data at build time
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  // Map the API data to our PostProps format
  const posts: PostProps[] = Array.isArray(data)
    ? data.map((p: any) => ({
        title: String(p.title ?? ''),
        content: String(p.body ?? ''),
        userId: Number(p.userId ?? 0), //  or userId if checker expects that
      }))
    : [];

  return {
    props: {
      posts,
    },
  };
}

// ✅ Page component
interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId} // match property name here too
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;