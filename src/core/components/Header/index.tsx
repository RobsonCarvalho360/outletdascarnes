import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import IconWithText from "@components/IconWithText";

const Header = () => {
  return (
    <div className="container mx-auto px-20 py-4 flex gap-6 place-items-center w-full justify-center">
      <span>Logo</span>
      <span>Categorias</span>
      <span>Kits</span>
      <span>Whats App</span>
      <span className="flex-initial w-72">
        <FormControl variant="outlined" className="w-full">
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
          icon="person"
        />
      </span>
      <span className="flex-initial w-54">
        <IconWithText text="Carrinho" icon="shopping_cart" />
      </span>
    </div>
  );
};

export default Header;
