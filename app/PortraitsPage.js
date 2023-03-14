'use client';
import { CldImage } from 'next-cloudinary';

export default function PortraitsPage() {
  return (
    <main>
      <CldImage
        width="200"
        height="400"
        src="Art_work_images/random_portrait_zkhlbs.jpg"
      />
    </main>
  );
}
