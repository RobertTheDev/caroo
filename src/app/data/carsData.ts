import ICar from '../interfaces/car/Car';

const carsData: ICar[] = [
  {
    id: '1',
    images: [
      {
        url: '2014-bmw-series-1/2014-bmw-series-1-1.jpg',
        alt: 'ddd',
      },
    ],
    make: 'BMW',
    model: 'Series 1',
    year: 2014,
  },
  {
    id: '2',
    images: [
      {
        url: '2015-ford-focus/2015-ford-focus-1.jpg',
        alt: 'ddd',
      },
    ],
    make: 'Ford',
    model: 'Focus',
    year: 2015,
  },
  {
    id: '3',
    images: [
      {
        url: '2010-bmw-520d/2010-bmw-520d-1.jpg',
        alt: 'ddd',
      },
    ],
    make: 'BMW',
    model: '520-D',
    year: 2010,
  },
];

export default carsData;
