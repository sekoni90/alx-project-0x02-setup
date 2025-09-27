// components/common/PostCard.tsx
import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <article className="bg-white shadow rounded-lg p-4">
      <header className="mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">User ID: {userId}</p>
      </header>
      <p className="text-gray-700">{content}</p>
    </article>
  );
};

export default PostCard;