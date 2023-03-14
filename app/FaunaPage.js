'use client';
import { CldImage } from 'next-cloudinary';

export default function FaunaPage() {
  return (
    <main>
      <CldImage
        width="200"
        height="400"
        src="Art_work_images/royalty_57_76_sxdpo6.jpg"
      />
    </main>
  );
}
