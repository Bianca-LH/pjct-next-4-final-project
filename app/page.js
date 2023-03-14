import Image from 'next/image';
import Link from 'next/link';
import BannerPage from './BannerPage';
import { arts } from './database/arts';
import FaunaPage from './FaunaPage';
import FloraPage from './FloraPage';
import LandscapePage from './landscapePage';
import PortraitsPage from './PortraitsPage';

// import styles from './page.module.scss';
// import { categories } from './database/categories';

export default function HomePage() {
  return (
    <>
      <BannerPage />
      <br />
      <main>
        {/* {categories.map((category) => {
          return (
            <h2 key={`category-${category.id}`}>{category.categoryName}</h2>
          );
        })} */}
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
          <Image
            src="https://res.cloudinary.com/dz58qwduu/image/upload/v1677947879/Art_work_images/bloom_38_56_2019_g2704d.jpg"
            width="300"
            height="250"
          />
        </div>
        {/* <div>
          {arts.map((art) => {
            return (
              <div key={art.id}>
                <Link href={`/arts/${art.id}`}>
                  <Image
                    src={art.url}
                    width="300"
                    height="250"
                    alt={art.artTitle}
                  />
                </Link>
                <Link href={`/arts/${art.id}`}>
                  <h3>{art.artTitle}</h3>
                </Link>
              </div>
            );
          })}
        </div> */}
      </main>
    </>
  );
}

{
  /* <CldImage
      width="960"
      height="600"
      src="Art_work_images/sunrise_vqqhaj.jpg"
    /> */
}

{
  /* <div key={category.id}>
<Link href={`/categories/${categories.categoryName}`}>
  <InfoPage />
</Link>
<Link href={`/categories/${categories.categoryName}`}>
  <h3>{categories.categoryName}</h3>
</Link>
</div> */
}
