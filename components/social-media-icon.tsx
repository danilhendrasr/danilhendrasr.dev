import Image from "next/image";

type Props = {
  link: string;
  iconPath: string;
};

export const SocialMediaIcon: React.FC<Props> = (props) => {
  return (
    <a href={props.link}>
      <div className="p-2 w-fit h-fit rounded-xl cursor-pointer hover:bg-white/25 transition-all active:scale-90">
        <Image src={props.iconPath} width={20} height={20} alt="Github icon" />
      </div>
    </a>
  );
};
