import Company1 from "@src/assets/company1.png";
import LoadingPage from "@src/components/Loading";
import ProjectItem from "@src/components/ProjectItem";
import GetApi from "@src/services/GetApi";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/project/")({
  component: Project,
});

function Project() {
  const getApi = GetApi("experiance");
  const data = getApi.data as unknown as {
    education: {
      title: string;
    };
    work: {
      work: { role: string }[];
    };
  };
  console.log(data);

  return (
    <>
      {getApi.loading && <LoadingPage />}
      <div className="flex flex-col gap-5 dark:text-white">
        <h1 className="text-3xl font-bold">{data?.education.title}</h1>
        <div className="grid grid-cols-2 grid-flow-row gap-x-[52px] gap-y-7 place-items-center">
          {data?.work?.work.map((item) => (
            <ProjectItem title={item.role} imgUrl={Company1} />
          ))}
          {data?.work?.work.map((item) => (
            <ProjectItem title={item.role} imgUrl={Company1} />
          ))}
          {data?.work?.work.map((item) => (
            <ProjectItem title={item.role} imgUrl={Company1} />
          ))}
        </div>
      </div>
    </>
  );
}
