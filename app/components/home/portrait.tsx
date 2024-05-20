import { Avatar } from "../avatar";
import { Title } from "../layout/title";

export default function Portrait() {
  return (
    <div className="flex flex-col place-items-center justify-center gap-y-9">
      <Title title="Callum Kloos" centered />
      <Avatar />
    </div>
  );
}
