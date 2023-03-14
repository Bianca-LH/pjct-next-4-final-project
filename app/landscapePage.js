'use client';

import { CldImage } from 'next-cloudinary';
import styles from './page.module.scss';

export default function LandscapePage() {
  return (
    <main>
      <CldImage
        width="200"
        height="400"
        src="Art_work_images/heritage_tour_2014_qhfbf8.jpg"
      />
    </main>
  );
}
