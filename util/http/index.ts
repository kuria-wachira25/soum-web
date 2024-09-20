import { Service } from "@declarations/service/service.enum";

export const composeAPIUrl = (service: Service, path: string): string => {
  return `${process.env.API_ENDPOINT}${service}${path}`;
};
