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
import { cn } from "@src/utils/common";

type Props = {
  className?: string;
};

const Profile: FC<Props> = ({ className = "" }) => {
  const info = [
    {
      icon: <IconPhone />,
      value: "0383283926",
    },
    {
      icon: <IconMail />,
      value: "nhanphan1159@gmail.com",
    },

    {
      icon: <IconLocation />,
      value: "HCM, Vietnam",
    },
    {
      icon: <IconBirthday />,
      value: "21/08/2000",
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
          Phan Huynh Huu Nhan
        </h2>
        <Job
          text="Frontend Developer"
          className="shadow-profile dark:text-[#CCC0C0]  bg-[#FEF6DD] dark:bg-[#272522] text-sm leading-[150%]"
        />
      </div>
      <div className="flex gap-5">
        <Social
          icon={<IconLinked />}
          url="https://www.facebook.com"
          className="bg-[#3662E3]"
        />
        <Social
          icon={<IconGithub />}
          url="https://www.facebook.com"
          className="bg-black dark:bg-white dark:text-white"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-3 bg-[#F9F6EA] rounded-2xl dark:bg-[#3B3729] shadow-profile">
        {info.map((item, index) => (
          <Info key={index} icon={item.icon} text={item.value} />
        ))}
      </div>
      <a href="/CV.pdf" download="CVNhanPhan.pdf">
        <Button
          lable="View Resume"
          className="dark:bg-[#C2B293] shadow-profile"
        />
      </a>
    </div>
  );
};

export default Profile;
