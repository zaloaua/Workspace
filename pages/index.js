/* ./pages/index.js               */
import Head from 'next/head';
import {Navbar} from '../components/NavigationBar';
import {Workspace} from '../components/Workspace';
import {FooterPage} from '../components/Footer'
import {Map} from '../components/map/Map'


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <Workspace/>
      <Map location={location} zoomLevel={17} /> {/* include it here */}
    <FooterPage/>
    </div>
  );
}