/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Genre } from './Genre';
export type Movie = {
  id?: string;
  title: string;
  tagline: string;
  synopsis: string;
  release_date: string;
  poster_path: string;
  avg_rating: number;
  genres: Array<Genre>;
};

