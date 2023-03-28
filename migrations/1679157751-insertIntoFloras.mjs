const floras = [
  {
    id: 1,
    flora_title: 'Sunrise',
    year: '2020',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677854631/Art_work_images/sunrise_vqqhaj.jpg',
  },
  {
    id: 2,
    flora_title: 'Spring',
    year: '2017',
    media: 'Watercolor on air-dried paper',
    size: '56 x 38 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677855766/Art_work_images/spring_38x56_lqqt4x.jpg',
  },
  {
    id: 3,
    flora_title: 'Bloom',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947879/Art_work_images/bloom_38_56_2019_g2704d.jpg',
  },
  {
    id: 4,
    flora_title: 'Morning Glory',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '38 x 56 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947884/Art_work_images/morning_glory_38_56_2019_gv0syn.jpg',
  },
  {
    id: 5,
    flora_title: 'The Sunny Side',
    year: '2019',
    media: 'Watercolor on air-dried paper',
    size: '56 x 38 cm',
    url: 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947892/Art_work_images/the_sunny_side_56_38_nbuxvt.jpg',
  },
];

export async function up(sql) {
  await sql`
INSERT INTO floras ${sql(floras, 'flora_title', 'year', 'media', 'size', 'url')}
--  (flora_title, year, media, size, url)
-- VALUES
--   ('Sunrise', '2020', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677854631/Art_work_images/sunrise_vqqhaj.jpg'),
--   ('Spring', '2017', 'Watercolor on air-dried paper', '56 x 38 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677855766/Art_work_images/spring_38x56_lqqt4x.jpg'),
--   ('Bloom', '2019', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947879/Art_work_images/bloom_38_56_2019_g2704d.jpg'),
--   ('Morning Glory', '2019', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947884/Art_work_images/morning_glory_38_56_2019_gv0syn.jpg'),
--   ('The Sunny Side', '2019', 'Watercolor on air-dried paper', '56 x 38 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947892/Art_work_images/the_sunny_side_56_38_nbuxvt.jpg')
`;
}

export async function down(sql) {
  for (const flora of floras) {
    await sql`
  DELETE FROM
    floras
  WHERE
  id = ${flora.id}
  `;
  }
}
