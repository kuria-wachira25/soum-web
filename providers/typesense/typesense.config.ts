import { ConfigurationOptions } from "typesense/lib/Typesense/Configuration";

export const typesenseConfig: ConfigurationOptions = {
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY!,
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST!,
      port: Number(process.env.NEXT_PUBLIC_TYPESENSE_PORT),
      protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL!,
    },
  ],
  cacheSearchResultsForSeconds: 60,
};
