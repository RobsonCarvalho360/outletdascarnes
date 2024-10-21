import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IPropsIconWithText {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  link?: string;
}

const IconWithText = (props: IPropsIconWithText) => {
  return (
    <a href={props.link ?? "#"}>
      <span className="flex items-center justify-center gap-2 hover:text-orange-400 transition duration-300">
        <props.icon fontSize="large" />
        <span className="font-bold whitespace-pre uppercase tracking-tighter text-xs">
          {props.text}
        </span>
      </span>
    </a>
  );
};

export default IconWithText;
