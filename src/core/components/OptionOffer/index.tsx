interface IpropsOptionOffer {
  title: string;
  text: string;
  link: string;
}

const OptionOffer = ({ title, text, link }: IpropsOptionOffer) => {
  return (
    <a
      href={link}
      className="hover:text-orange-400 transition duration-300"
    >
      <span className="flex flex-col leading-none">
        <span className="uppercase tracking-lighter font-bold">{title}</span>
        <span className="whitespace-pre tracking-tighter text-xs">{text}</span>
      </span>
    </a>
  );
};

export default OptionOffer;
