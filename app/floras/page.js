import Image from 'next/image';
import Link from 'next/link';
import { getFlora, getFloras } from '../database/floras';

export const dynamic = 'force-dynamic';

export default async function FlorasPage({}) {
  const floras = await getFloras();
  return (
    <>
      <h1>Floras</h1>
      <br />

      <div className="grid grid-cols-5 gap-5 md:grid-cols-2">
        {floras.map((flora) => {
          return (
            <div title="center" key={`flora.id-${flora.id}`}>
              <Link href={`/flora/${flora.floraTitle}`}>
                <Image
                  src={flora.url}
                  width="250"
                  height="250"
                  crop="fill"
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
