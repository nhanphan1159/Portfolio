import type { FC } from "react";

import AvatarImg from "@src/assets/avatar.png";
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
      value: "22",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Avatar img={AvatarImg} className="size-[200px] absolute -top-[63px]" />
      <div
        className={cn(
          "flex flex-col justify-end items-center rounded-xl w-[369px] h-[696px] pb-[35px] border-2 border-[#B7A261] gap-[34px]",
          className
        )}
      >
        <div className="flex gap-[10px] flex-col justify-center items-center">
          <h1 className="font-bold text-[26px] leading-[150%]">
            Phan Huynh Huun Nhan
          </h1>
          <Job text="Frontend Developer" className="shadow-cms" />
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
            className="bg-black dark:bg-white"
          />
        </div>
        <div className="flex flex-col gap-2.5 p-5 bg-[#F9F6EA] rounded-2xl dark:bg-[#3B3729]">
          {info.map((item, index) => (
            <Info key={index} icon={item.icon} text={item.value} />
          ))}
        </div>
        <Button lable="View Resume" />
      </div>
    </div>
  );
};

export default Profile;
