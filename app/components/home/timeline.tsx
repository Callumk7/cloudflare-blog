import { Card } from "../layout/card";

export default function Timeline() {
  return (
    <div className="flex w-full items-center divide-x divide-primary-1">
      <div className="flex w-full flex-col gap-y-7">
        <div className="flex w-full items-center">
          <Card className="ml-20 w-full" flex>
            <h1 className="font-syne font-black">Product Manager</h1>
            <p>
              Velit ipsum ut et id laboris excepteur esse ullamco dolore tempor veniam.
              Velit labore aliquip do nostrud ex irure ad voluptate reprehenderit est
              excepteur ad incididunt. Ipsum cupidatat consectetur ea. Amet sint laborum
              sit quis nulla ex proident excepteur deserunt adipisicing ipsum consequat
              sunt. Magna commodo amet dolore voluptate do nulla adipisicing ex. Et
              pariatur sunt et tempor ullamco dolore consectetur labore deserunt qui magna
              et minim nostrud.
            </p>
          </Card>
          <div className="w-20 border-t border-primary-1" />
        </div>
        <div className="flex w-full items-center">
          <Card className="ml-20 w-full">
            <h1 className="font-syne font-black">Strategy</h1>
            <p>
              Non consequat velit id do laboris qui minim do. Ipsum ex veniam culpa quis
              aliqua. Velit sint irure qui elit amet. Mollit elit nisi incididunt ea minim
              esse esse ut culpa. Enim velit laboris non minim mollit duis adipisicing in
              eu.
            </p>
          </Card>
          <div className="w-20 border-t border-primary-1" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-7">
        <div className="flex items-center">
          <div className="w-10 border-t border-primary-1" />
          <Card className="mr-20 w-full">
            <h1 className="font-syne font-black">UX Design</h1>
            <p>
              Culpa voluptate aliquip magna elit irure consequat est aliquip et. Do do
              elit cillum duis culpa aliquip aliqua commodo aute est. In sint ex est
              proident ex elit do ex exercitation magna culpa. Veniam magna laboris
              laboris veniam culpa commodo ullamco laboris. Ea nisi non culpa occaecat
              aliqua laborum. Do mollit irure ut quis proident eiusmod elit ea sint irure
              veniam do aute mollit.
            </p>
          </Card>
        </div>
        <div className="mt-10 flex items-center">
          <div className="w-10 border-t border-primary-1" />
          <Card className="mr-20 w-full">
            <h1 className="font-syne font-black">Web Development</h1>
            <p>
              Commodo minim officia nisi in pariatur. Nisi duis ea est esse officia labore
              do consectetur. Dolor cillum aliqua in esse qui nostrud et labore est et ad
              sint magna Lorem mollit. Et ut amet nulla sunt proident sint proident
              exercitation officia anim anim eu nulla voluptate. Lorem sint veniam esse
              dolore est cupidatat ea do ex culpa consequat velit ut velit. Reprehenderit
              duis do ullamco deserunt anim. Excepteur nostrud consectetur duis nostrud
              Lorem velit officia ipsum.
            </p>
            <p>
              Commodo minim officia nisi in pariatur. Nisi duis ea est esse officia labore
              do consectetur. Dolor cillum aliqua in esse qui nostrud et labore est et ad
              sint magna Lorem mollit. Et ut amet nulla sunt proident sint proident
              exercitation officia anim anim eu nulla voluptate. Lorem sint veniam esse
              dolore est cupidatat ea do ex culpa consequat velit ut velit. Reprehenderit
              duis do ullamco deserunt anim. Excepteur nostrud consectetur duis nostrud
              Lorem velit officia ipsum.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
