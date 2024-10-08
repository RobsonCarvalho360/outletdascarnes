import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="bg-orange-400">
      <div className="container mx-auto px-20 py-4 grid lg:grid-cols-7 md:grid-cols-2 place-items-center">
        <span>Logo</span>
        <span>Categorias</span>
        <span>Kits</span>
        <span>Whats App</span>
        <span>
          <FormControl variant="outlined">
            <OutlinedInput
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
        <span>Login/Perfil</span>
        <span>Carrinho</span>
      </div>
    </div>
  );
};

export default Header;
