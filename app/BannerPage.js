'use client';
import { CldImage } from 'next-cloudinary';

export default function BannerPage() {
  return (
    <main>
      <CldImage
        width="1400"
        height="700"
        crop="fill"
        src="Art_work_images/sunrise_vqqhaj.jpg"
      />
    </main>
  );
}
