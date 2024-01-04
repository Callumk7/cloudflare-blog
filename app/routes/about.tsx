import { Container } from "@/components/layout/container";
import { Separator } from "@/components/layout/separator";
import { SocialLinks } from "@/components/navigation/social-links";

export default function AboutPage() {
  return (
    <div className="mt-28">
      <Container>
        <div className="grid grid-cols-3 items-center gap-8">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="font-syne text-2xl font-bold text-primary-1">
              Callum Kloos
            </h1>
            <Separator />
            <div className="relative aspect-square w-9/12 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                alt="porrtait"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <Separator />
            <SocialLinks />
          </div>
          <div className="col-span-2">
            Amet anim fugiat enim sunt est. Sit aute in cupidatat. Adipisicing
            Lorem sint laborum ut consequat fugiat ipsum mollit exercitation.
            Lorem laboris consectetur culpa ut adipisicing consectetur
            reprehenderit ipsum tempor. Occaecat do eiusmod fugiat ex et
            occaecat irure proident occaecat laboris culpa sunt sint. Eu fugiat
            incididunt pariatur est Lorem est minim officia eiusmod proident et
            deserunt ad. Nulla dolor sit aute Lorem do culpa consequat id nisi.
            Do sit nisi enim quis labore do enim ex. Anim sit est ad non enim
            occaecat minim ad labore. Eu fugiat ut veniam Lorem sint anim aute
            ex veniam pariatur tempor veniam ullamco cupidatat eiusmod.
          </div>
        </div>
      </Container>
    </div>
  );
}
