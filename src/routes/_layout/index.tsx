import Img1 from "@src/assets/img1.png";
import Img2 from "@src/assets/img2.png";
import Img3 from "@src/assets/img3.png";
import Img4 from "@src/assets/img4.png";
import WorkItem from "@src/components/WorkItem";
import GetApi from "@src/services/GetApi";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = GetApi("about") as unknown as {
    title: string;
    content: string[];
    work: {
      title: string;
      job: {
        title: string;
        content: string;
      }[];
    };
  };
  const imgs: Record<number, string> = {
    0: Img1,
    1: Img2,
    2: Img3,
    3: Img4,
  };
  console.log(data?.content[1]);
  return (
    <div className="flex flex-col gap-3 dark:text-white">
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <div className="flex flex-col gap-2">
        {data?.content.map((item, index) => (
          <div
            className="text-lg"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold">{data?.work?.title}</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-6">
        {data?.work?.job?.map((item, index) => (
          <WorkItem
            className="max-w-[379px]"
            key={index}
            imgUrl={imgs[index]}
            content={item.content}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
