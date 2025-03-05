import type { FC } from "react";

import AvatarImg from "@src/assets/avatar.webp";
import IconBirthday from "@src/assets/iconBirthday.svg?react";
import IconGithub from "@src/assets/iconGithub.svg?react";
import IconLinked from "@src/assets/iconLinked.svg?react";
import IconLocation from "@src/assets/iconLocation.svg?react";
import IconMail from "@src/assets/iconMail.svg?react";
import IconPhone from "@src/assets/iconPhone.svg?react";
import Avatar from "@src/components/Avatar";
import Button from "@src/components/Button";
import Info from "@src/components/Info";
import Job from "@src/components/Job";
import Social from "@src/components/Social";
import GetApi from "@src/services/GetApi";
import { cn } from "@src/utils/common";

type Props = {
  className?: string;
};

const Profile: FC<Props> = ({ className = "" }) => {
  const data = GetApi("info") as {
    name: string;
    role: string;
    phone: string;
    email: string;
    location: string;
    birth: string;
    linked: string;
    github: string;
  } | null;
  console.log(data);
  const info = [
    {
      icon: <IconPhone />,
      value: data?.phone || "",
    },
    {
      icon: <IconMail />,
      value: data?.email || "",
    },

    {
      icon: <IconLocation />,
      value: data?.location || "",
    },
    {
      icon: <IconBirthday />,
      value: data?.birth || "",
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-col justify-end items-center rounded-xl pb-5 border-2 border-[#B7A261] gap-4 bg-[white] dark:bg-black p-5",
        className
      )}
    >
      <div className="flex gap-2 flex-col justify-center items-center">
        <Avatar img={AvatarImg} className="size-[150px] -mt-[90px]" />

        <h2 className="font-bold text-[18px] leading-[150%] dark:text-[#CCC0C0]">
          {data?.name || ""}
        </h2>
        <Job
          text={data?.role || ""}
          className="shadow-profile dark:text-[#CCC0C0]  bg-[#FEF6DD] dark:bg-[#272522] text-sm leading-[150%]"
        />
      </div>
      <div className="flex gap-5">
        <Social
          icon={<IconLinked />}
          url={data?.linked || ""}
          className="bg-[#3662E3]"
        />
        <Social
          icon={<IconGithub />}
          url={data?.github || ""}
          className="bg-black dark:bg-white dark:text-white"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-3 bg-[#F9F6EA] rounded-2xl dark:bg-[#3B3729] shadow-profile">
        {info.map((item, index) => (
          <Info key={index} icon={item.icon} text={item.value} />
        ))}
      </div>
      <a href="/CV-NhanPhan.pdf" download>
        <Button
          lable="View Resume"
          className="dark:bg-[#C2B293] shadow-profile"
        />
      </a>
    </div>
  );
};

export default Profile;
