import { Client } from "typesense";
import { typesenseConfig } from "./typesense.config";

export const typesenseServerClient = new Client(typesenseConfig);
