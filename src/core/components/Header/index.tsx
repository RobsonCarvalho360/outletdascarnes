import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import IconWithText from "@components/IconWithText";
import OptionOffer from "@components/OptionOffer";
import OptionsSubOffers from "@components/OptionsSubOffers";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import gifVemdeZap from "/assets/vem-de-zap.gif";
import logo from "/assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="cotainer mx-auto px-20 py-4 flex gap-6 place items-center w-full justify-center">
        <span>
          <a href="#" target="_blank">
            <img
              src={logo}
              alt="Vem de Zap"
              width={80}
              height={34}
              className="rounded-full"
            />
          </a>
        </span>
        <span>
          <OptionOffer
            title="Categorias"
            text=" Veja nossos Produtos"
            link="#"
          />
        </span>
        <span>
          <OptionOffer
            title="Super Kits"
            text=" Combinações exclusivas"
            link="#"
          />
        </span>
        <span>
          <a
            href="https://api.whatsapp.com/send/?phone=5511958881903&text=Olá vim pelo site!&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img src={gifVemdeZap} alt="Vem de zap" width={100} height={34} />
          </a>
        </span>
        <span className="flex-initial w-72">
          <FormControl variant="standard" className="w-full">
            <OutlinedInput
              sx={{
                backgroundColor: "#fff",
                borderRadius: 12,
                borderTopRightRadius: 0,
              }}
              size="small"
              placeholder="Procure por proteinas, corte..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </span>
        <span className="flex-initial w-54">
          <IconWithText
            text={`Bem vindo,\nacesse aqui seu perfil`}
            icon={PersonOutlineOutlinedIcon}
          />
        </span>
        <span className="flex-initial w-54">
          <IconWithText text="Carrinho" icon={ShoppingCartOutlinedIcon} />
        </span>
      </div>
      <OptionsSubOffers
        options={[
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Prontos \npara comer`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
          {
            icon: ShoppingCartOutlinedIcon,
            link: "",
            text: `Bovinos`,
          },
        ]}
      />
    </div>
  );
};

export default Header;
