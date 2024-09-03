// pages/about.js
import Link from 'next/link';
import Layout from './layout';
export default function About() {
  return (
    <div>
      <Layout>
        <h1>About Page</h1>
        <p>This is the About Page</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </Layout>
    </div>
  );
}
