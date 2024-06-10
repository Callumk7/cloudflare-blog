import { Avatar } from "../avatar";
import { Title } from "../layout/title";

export default function Portrait() {
  return (
    <div className="flex flex-col gap-y-9 justify-center place-items-center">
      <Title title="Callum Kloos" centered />
      <Avatar />
    </div>
  );
}
