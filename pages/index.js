/* ./pages/index.js               */
import Head from 'next/head';
import {Navbar} from '../components/NavigationBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
    </div>
  );
}