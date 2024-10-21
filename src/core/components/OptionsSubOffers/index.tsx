import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Divider from "@mui/material/Divider";

interface IPropsOptionsSubOffers {
  options: Array<{
    link: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    text: string;
  }>;
}

const OptionsSubOffers = ({ options }: IPropsOptionsSubOffers) => {
  return (
    <Divider>
      <div className="container flex gap-3 w-full items-center justify-center">
        {options.map((option, index) => {
          return (
            <a
              href={option.link}
              key={index}
              className="hover:text-orange-400 transition duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="bg-black rounded-full flex items-center justify-center p-2">
                  <option.icon
                    fontSize="small"
                    sx={{
                      color: "#fff",
                    }}
                  />
                </span>
                <span className="uppercase whitespace-pre tracking-tighter font-bold text-xs">
                  {option.text}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </Divider>
  );
};
export default OptionsSubOffers;
