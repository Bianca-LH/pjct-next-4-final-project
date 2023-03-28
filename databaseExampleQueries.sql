CREATE TABLE floras (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  flora_title varchar(50) NOT NULL,
  year varchar(10) NOT NULL,
  media varchar(80) NOT NULL,
  size varchar(30) NOT NULL,
  url varchar(180) NOT NULL
);

INSERT INTO floras
 (flora_title, year, media, size, url)
VALUES
  ('Sunrise', '2020', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677854631/Art_work_images/sunrise_vqqhaj.jpg'),
  ('Spring', '2017', 'Watercolor on air-dried paper', '56 x 38 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677855766/Art_work_images/spring_38x56_lqqt4x.jpg'),
  ('Bloom', '2019', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947879/Art_work_images/bloom_38_56_2019_g2704d.jpg'),
  ('Morning Glory', '2019', 'Watercolor on air-dried paper', '38 x 56 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947884/Art_work_images/morning_glory_38_56_2019_gv0syn.jpg'),
  ('The Sunny Side', '2019', 'Watercolor on air-dried paper', '56 x 38 cm', 'https://res.cloudinary.com/dz58qwduu/image/upload/v1677947892/Art_work_images/the_sunny_side_56_38_nbuxvt.jpg');

SELECT * FROM floras;
