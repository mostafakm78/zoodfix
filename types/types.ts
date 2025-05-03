import { StaticImageData } from 'next/image';

export type BlogsList = {
  image: string;
  title: string;
  view: string;
  content: string;
  id: number | string;
  category: string;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  category: string | null;
};

export interface ExperienceRow {
  place: string;
  position: string;
  duration: string;
}

export type ProductItem = {
  id: number | string;
  title: string;
  image: string;
  category: string;
  weight: string;
};

export type ProductsItemSliderHome = {
  image: StaticImageData;
  link: string;
  title: string;
};

export type formItemProduct = {
  namePerson: string;
  phone: string;
  email: string;
  title: string;
  comment: string;
};

export type AccordionItemType = {
  question: string;
  answer?: string;
  Link?: string;
};

export type ContactUsFormItem = {
  fullName: string;
  phone: string;
  title: string;
  message: string;
};
