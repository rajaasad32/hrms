// pages/contact.js
import Link from 'next/link';
import Layout from './layout'
export default function Contact() {
  return (
    <div>
      <Layout>
        <h1>Contact Page</h1>
        <p>This is the Contact Page</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </Layout>
    </div>
  );
}
