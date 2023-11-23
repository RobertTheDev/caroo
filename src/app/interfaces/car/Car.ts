export default interface ICar {
  id: string;
  images: { url: string; alt: string }[];
  make: string;
  model: string;
  year: number;
}
