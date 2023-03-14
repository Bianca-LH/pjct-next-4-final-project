import Image from 'next/image';
import Link from 'next/link';
import { landscapes } from '../database/landscapes';

export default function LandscapesPage() {
  return (
    <>
      <h1>Landscapes</h1>
      <div>
        {landscapes.map((landscape) => {
          return (
            <div key={`landscape.id-${landscape.id}`}>
              <Link href={`/landscapes/${landscape.id}`}>
                <Image
                  src={landscape.url}
                  width="300"
                  height="250"
                  alt={landscape.landscapeTitle}
                />
              </Link>
              <Link href={`/landscapes/${landscape.id}`}>
                <h3>{landscape.landscapeTitle}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
