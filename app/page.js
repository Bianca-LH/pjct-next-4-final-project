import Image from 'next/image';
import Link from 'next/link';
import BannerPage from './BannerPage';
import { arts } from './database/arts';
import FaunaPage from './FaunaPage';
import FloraPage from './FloraPage';
import LandscapePage from './landscapePage';
import styles from './page.module.css';
import PortraitsPage from './PortraitsPage';

// import { categories } from './database/categories';

export default function HomePage() {
  return (
    <>
      <BannerPage />
      <br />
      <main flex="">
        <div className="grid grid-flow-col">
          <div className="col-span-2">
            <Link href="/landscapes">
              <LandscapePage />
              Landscapes
            </Link>
          </div>
          <br />
          <div className="col-span-2">
            <Link href="/floras">
              <FloraPage />
              Floras
            </Link>
          </div>
          <br />
          <Link href="/faunas">
            <FaunaPage />
            Faunas
          </Link>
          <br />
          <Link href="/portraits">
            <PortraitsPage />
            Portraits
          </Link>
          {/*   */}
        </div>

        <div></div>
      </main>
    </>
  );
}
