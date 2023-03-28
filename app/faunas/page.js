import Image from 'next/image';
import Link from 'next/link';
import { faunas } from '../database/faunas';

export default function FaunaPage() {
  return (
    <>
      <h1>Faunas</h1>
      <div className="grid grid-cols-5 gap-5 md:grid-cols-2">
        {faunas.map((fauna) => {
          return (
            <div key={`fauna.id-${fauna.id}`}>
              <Link href={`/faunas/${fauna.id}`}>
                <Image
                  src={fauna.url}
                  width="300"
                  height="250"
                  alt={fauna.faunaTitle}
                />
              </Link>
              <Link href={`/landscapes/${fauna.id}`}>
                <h3>{fauna.faunaTitle}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
