// components/common/UserCard.tsx
import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, }) => {
  return (
    <article className="bg-white shadow rounded-lg p-4">
      <header className="mb-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </header>
      <p className="text-gray-700">{address}</p>
     </article>
  );
};

export default UserCard;