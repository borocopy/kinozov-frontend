/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MovieInfo = {
  properties: {
    id: {
      type: 'string',
    },
    title: {
      type: 'string',
      isRequired: true,
    },
    release_date: {
      type: 'string',
      isRequired: true,
      format: 'date',
    },
    poster_path: {
      type: 'string',
      isRequired: true,
      format: 'uri',
    },
    avg_rating: {
      type: 'number',
      isRequired: true,
      format: 'float',
    },
    genres: {
      type: 'array',
      contains: {
        type: 'Genre',
      },
      isRequired: true,
    },
  },
} as const;
