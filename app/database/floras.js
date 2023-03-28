import { cache } from 'react';
import { sql } from './connect';

export const floras1 = [
  {
    id: 1,
    floraTitle: 'Sunrise',
    year: '2020',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677854631/Art_work_images/sunrise_vqqhaj.jpg',
  },
  {
    id: 2,
    floraTitle: 'Spring',
    year: '2017',
    media: 'Watercolor on air-dried paper',
    size: '56 x 38 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677855766/Art_work_images/spring_38x56_lqqt4x.jpg',
  },
  {
    id: 3,
    floraTitle: 'Bloom',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947879/Art_work_images/bloom_38_56_2019_g2704d.jpg',
  },
  {
    id: 4,
    floraTitle: 'Morning Glory',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947884/Art_work_images/morning_glory_38_56_2019_gv0syn.jpg',
  },
  {
    id: 5,
    floraTitle: 'The Sunny Side',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '56 x 38 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947892/Art_work_images/the_sunny_side_56_38_nbuxvt.jpg',
  },
];

// SELECT * FROM floras;
// console.log(
//   sql`
//   SELECT * FROM floras`.then((data) => console.log(data)),
// );
export const getFloras = cache(async () => {
  const floras = await sql`
  SELECT * FROM floras
  `;
  return floras;
});

// export async function getFloras() {
//   const floras = await sql`
//   SELECT * FROM floras
//   `;
//   return floras;
// }

// get single item

export const getFlora = cache(async (floraTitle) => {
  const flora = await sql`
  SELECT
   *
   FROM floras
   WHERE floraTitle = ${floraTitle}
   `;
  return flora;
});
