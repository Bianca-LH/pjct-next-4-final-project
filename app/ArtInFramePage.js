'use client';
import { CldImage } from 'next-cloudinary';

export default function ArtInFramePage() {
  return (
    <main>
      <CldImage
        width="500"
        height="500"
        src="Art_work_images/the_sunny_side_homeart_zbpdiy.jpg"
      />
    </main>
  );
}
