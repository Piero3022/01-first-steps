
import Link from 'next/link';
import AboutPage from './(general)/about/page';

export default function HomePage() {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-5xl">
        Hola Mundo
      </span>

      <Link href={'/about'}>AboutPage</Link>
    </main>
  )
}

