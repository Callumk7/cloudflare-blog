import { Avatar } from "../avatar";
import { Separator } from "../layout/separator";
import { SocialLinks } from "../navigation/social-links";

export default function Profile() {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <h1 className="mb-6 text-6xl font-black lg:text-2xl font-syne">Callum Kloos</h1>
      <Separator />
      <Avatar />
      <Separator />
      <SocialLinks />
    </div>
  );
}
