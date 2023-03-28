'use client';
import { CldImage } from 'next-cloudinary';

export default function PortraitsPage() {
  return (
    <main>
      <CldImage
        width="250"
        height="250"
        crop="fill"
        src="Art_work_images/random_portrait_zkhlbs.jpg"
      />
    </main>
  );
}
