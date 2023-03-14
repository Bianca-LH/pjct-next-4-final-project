import Image from 'next/image';
import Link from 'next/link';
import { floras } from '../database/floras';

export default function FlorasPage() {
  return (
    <>
      <h1>Floras</h1>
      <div>
        {floras.map((flora) => {
          return (
            <div key={`flora.id-${flora.floraTitle}`}>
              <Link href={`/flora/${flora.floraTitle}`}>
                <Image
                  src={flora.url}
                  width="300"
                  height="250"
                  alt={flora.floraTitle}
                />
              </Link>
              <Link href={`/flora/${flora.floraTitle}`}>
                <h3>{flora.floraTitle}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
