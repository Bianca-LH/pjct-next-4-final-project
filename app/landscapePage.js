'use client';

import { CldImage } from 'next-cloudinary';
import styles from './page.module.css';

export default function LandscapePage() {
  return (
    <main>
      <CldImage
        width="250"
        height="250"
        crop="fill"
        src="Art_work_images/heritage_tour_2014_qhfbf8.jpg"
      />
    </main>
  );
}
