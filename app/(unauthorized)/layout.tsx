import { auth } from '@/auth';
import Footer from '@/components/footer/footer';
import MainHeader from '@/components/header/main-header';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log({ session });
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
