'use client';
import { CldImage } from 'next-cloudinary';

export default function FloraPage() {
  return (
    <main>
      <CldImage
        width="200"
        height="400"
        src="Art_work_images/the_sunny_side_56_38_nbuxvt.jpg"
      />
    </main>
  );
}
