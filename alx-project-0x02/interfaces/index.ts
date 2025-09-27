// interfaces/index.ts

// Already created CardProps above:
export interface CardProps {
  title: string;
  content: string;
}
export interface HeaderProps {
  title: string;
}

// Add ButtonProps below
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}
// postprops required by checker: exact property names and types
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}