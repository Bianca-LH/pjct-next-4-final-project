'use client';
import { CldImage } from 'next-cloudinary';

export default function FaunaPage() {
  return (
    <main>
      <CldImage
        width="250"
        height="250"
        crop="fill"
        src="Art_work_images/grandmoms_backyard_76_57_yhxzrx.jpg"
      />
    </main>
  );
}
