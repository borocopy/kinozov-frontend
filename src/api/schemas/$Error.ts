/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Error = {
  properties: {
    type: {
      type: 'ErrorType',
      isRequired: true,
    },
    title: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'number',
      isRequired: true,
    },
    detail: {
      type: 'string',
      isRequired: true,
    },
    instance: {
      type: 'string',
      isRequired: true,
      format: 'uri',
    },
  },
} as const;
