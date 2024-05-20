import { Avatar } from "../avatar";
import { Separator } from "../layout/separator";
import { SocialLinks } from "../navigation/social-links";

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="mb-6 font-syne text-6xl font-black lg:text-2xl">Callum Kloos</h1>
      <Separator />
      <Avatar />
      <Separator />
      <SocialLinks />
    </div>
  );
}
