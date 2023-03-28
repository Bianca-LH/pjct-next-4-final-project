'use client';
import { CldImage } from 'next-cloudinary';

export default function ArtInFramePage() {
  return (
    <main>
      <CldImage
        width="254"
        height="128"
        src="Art_work_images/watercolor_logo_color_hsv0wz.jpg"
      />
    </main>
  );
}
