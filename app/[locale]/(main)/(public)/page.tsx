import { TypenseProvider } from "@providers/typesense/typesense.client";

export const dynamic = "force-static";

export default (): JSX.Element => {
  return <TypenseProvider indexName="products_staging-sa"></TypenseProvider>;
};
