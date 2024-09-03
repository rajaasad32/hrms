import Link from 'next/link';
import Layout from './layout';
export default function Home() {
  return (
    <div>
      <Layout>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      </Layout>
    </div>
  );
}
