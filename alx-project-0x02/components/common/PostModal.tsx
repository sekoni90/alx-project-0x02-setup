// components/common/PostModal.tsx
import React, { useState, useEffect } from 'react';

export type PostData = {
  title: string;
  content: string;
};

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Clear form when modal opens
  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setContent('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (!trimmedTitle || !trimmedContent) return;
    onSubmit({ title: trimmedTitle, content: trimmedContent });
    onClose();
  };

  return (
    // backdrop
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* overlay */}
      <div
        onClick={onClose}
        aria-hidden
        className="absolute inset-0 bg-black/40"
      />

      {/* modal panel */}
      <div
        className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md z-10 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="mb-4">
          <h2 className="text-xl font-semibold">Create Post</h2>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="post-title">
              Title
            </label>
            <input
              id="post-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="post-content">
              Content
            </label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter content"
              rows={4}
              required
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;