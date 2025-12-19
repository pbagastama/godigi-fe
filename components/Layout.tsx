import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-white font-sans'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
