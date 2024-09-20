import { AppStoreButton } from "@components/AppStoreButton";
import { GooglePlayButton } from "@components/GooglePlayButton";

export default (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 font-light text-sm mx-0 md:mx-auto">
      <span className="font-medium mb-1 text-base">Download App</span>
      <GooglePlayButton />
      <AppStoreButton />
    </div>
  );
};
