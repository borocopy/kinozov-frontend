/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Review = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    movie_id: {
      type: 'string',
      isRequired: true,
    },
    user: {
      type: 'UserInfo',
      isRequired: true,
    },
    score: {
      type: 'number',
      isRequired: true,
    },
    content: {
      type: 'string',
      isRequired: true,
    },
    created_at: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
  },
} as const;
