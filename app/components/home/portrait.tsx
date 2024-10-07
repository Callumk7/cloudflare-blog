import { Avatar } from "../avatar";
import { Title } from "../layout/title";

export default function Portrait() {
  return (
    <div className="flex flex-col pt-10 gap-y-9 place-items-center">
      <Title title="Callum Kloos" centered />
      <Avatar />
    </div>
  );
}
