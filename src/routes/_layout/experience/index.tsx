import Company1 from "@src/assets/company1.png";
import EducationItem from "@src/components/EducationItem";
import ExperianceItem from "@src/components/ExperianceItem";
import LoadingPage from "@src/components/Loading";
import GetApi from "@src/services/GetApi";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/experience/")({
  component: Exp,
});

function Exp() {
  const getApi = GetApi("experiance");
  const data = getApi.data as unknown as {
    education: {
      title: string;
      learn: {
        major: string;
        time: string;
        result: string;
      }[];
    };
    work: {
      title: string;
      work: {
        company: string;
        time: string;
        role: string;
      }[];
    };
  };
  return (
    <>
      {getApi.loading && <LoadingPage />}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 dark:text-white">
          <h1 className="text-3xl font-bold">{data?.education.title}</h1>
          <div className="flex justify-between gap-5">
            {data?.education?.learn.map((item) => (
              <EducationItem
                className="flex-1"
                major={item.major}
                time={item.time}
                result={item.result}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 dark:text-white">
            <h1 className="text-3xl font-bold">{data?.work.title}</h1>
            <div className="flex flex-col gap-4">
              {data?.work?.work.map((item) => (
                <ExperianceItem
                  className="flex-1"
                  company={item.company}
                  time={item.time}
                  role={item.role}
                  imgUrl={Company1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
