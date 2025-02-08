import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = usePage().props

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="flex justify-end  gap-4">
          <Link href="/posts">Posts</Link>
          {user ? (
            <>
              <Link href="/session" method="delete">Logout</Link>
            </>
          ) : (
            <>
              <Link href="/session/new">Login</Link>
            </>
          )}
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
};

export default Layout;