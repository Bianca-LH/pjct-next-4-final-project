import Image from 'next/image';
import Link from 'next/link';
import { portraits } from '../database/portraits';

export default function PortraitsPage() {
  return (
    <>
      <h1>Portraits</h1>
      <div>
        {portraits.map((portrait) => {
          return (
            <div key={`portrait.id-${portrait.id}`}>
              <Link href={`/portraits/${portrait.id}`}>
                <Image
                  src={portrait.url}
                  width="300"
                  height="250"
                  alt={portrait.portraitsTitle}
                />
              </Link>
              <Link href={`/portraits/${portrait.id}`}>
                <h3>{portrait.portraitTitle}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
