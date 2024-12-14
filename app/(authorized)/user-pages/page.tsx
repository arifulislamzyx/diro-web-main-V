'use client';
import { fetchFacebookPages } from '@/lib/fetch/FetchFacebbokPages';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [pages, setPages] = useState([]);

  console.log('pages', pages);

  useEffect(() => {
    if (session?.user?.accessToken) {
      fetchFacebookPages(session?.user?.accessToken)
        .then(setPages)
        .catch((error) => console.error(error));
    }
  }, [session]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Facebook Pages</h1>
      <ul>
        {pages.map((page: any) => (
          <li key={page.id}>{page.name}</li>
        ))}
      </ul>
    </div>
  );
}
