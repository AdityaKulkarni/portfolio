import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`flex flex-col flex-1 items-center z-10 min-h-screen relative ${className}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" />
      {children}
    </div>
  );
};

export default PageLayout; 