import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import OptionsFooter from "@components/OptionsFooter";

const TitleColumnFooter = ({
  title,
  subTitle,
  images,
}: {
  title: string;
  subTitle: string;
  images?: string[];
}) => {
  return (
    <div>
      <strong className="uppercase tracking-tighter text-xl">{title}</strong>

      <div className="flex space-x-2 mt-2">
        {images?.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={title}
            className="w-[50px] h-[35px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const CardContact = ({
  identifyContact,
  identifyName,
  ...rest
}: {
  identifyContact: string;
  identifyName: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) => {
  return (
    <div className="flex flex-col hover:-translate-y-2 transition-all duration-200">
      <a href="#">
        <span className="flex gap-1 items-center">
          <rest.icon
            sx={{
              color: "rgb(251, 146, 60)",
            }}
          />
          <strong className="uppercase tracking-tighter text-lg">
            {identifyName}
          </strong>
        </span>
        <strong className="text-center text-xl text-orange-400">
          {identifyContact}
        </strong>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-20">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-14">
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Canais de atendimento" subTitle={""} />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Compre pelo Televendas"
                icon={HeadsetMicOutlinedIcon}
              />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Compre Pelo WhatsApp"
                icon={WhatsAppIcon}
              />
              <span className="whitespace-break-spaces text-slate-400">
                {`Segunda à Sexta-feira das 7h às 19h\nSábados das 7h às 18h\nFeriados das 7h às 15h`}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Outlet Resolve" subTitle={""} />
              <CardContact
                identifyContact="(51) 99166-3322"
                identifyName="Resolva pelo Telefone"
                icon={LocalPhoneOutlinedIcon}
              />
              <span className="whitespace-break-spaces text-slate-400">
                Segunda a sábado das 09h às 19h
              </span>
              <CardContact
                identifyContact="john@doe.com"
                identifyName="Resolva pelo e-mail"
                icon={EmailOutlinedIcon}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Para Você" subTitle={""} />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "Receitas Outlet Das Carnes",
                  },
                  {
                    link: "#",
                    text: "Churrasco Outlet Das Carnes",
                  },
                  {
                    link: "#",
                    text: "Peixaria Swift",
                  },
                  {
                    link: "#",
                    text: "Trabalhe Conosco",
                  },
                  {
                    link: "#",
                    text: "Política de Privacidade",
                  },
                  {
                    link: "#",
                    text: "Dúvidas Frequentes",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Compra Online" subTitle={""} />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "Seus pedidos",
                  },
                  {
                    link: "#",
                    text: "FAQ",
                  },
                  {
                    link: "#",
                    text: "Regulamentos",
                  },
                  {
                    link: "#",
                    text: "Encarte Digital",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <TitleColumnFooter title="Outlet+" subTitle={""} />
              <OptionsFooter
                options={[
                  {
                    link: "#",
                    text: "A nossa história",
                  },
                  {
                    link: "#",
                    text: "Encontre Nossas Lojas",
                  },
                  {
                    link: "#",
                    text: "Sustentabilidade",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-2/4">
            <div className="flex flex-col">
              <TitleColumnFooter
                title="Formas de Pagamento"
                subTitle="(apenas cartões de crédito)"
                images={[
                  "/assets/rnk-icon-forma-de-pagamento-mastercard.png",
                  "/assets/rnk-icon-forma-de-pagamento-visa.png",
                  "/assets/rnk-icon-forma-de-pagamento-elo.png",
                  "/assets/rnk-icon-forma-de-pagamento-amex.png",
                  "/assets/rnk-icon-forma-de-pagamento-picpay-v3.png",
                  "/assets/rnk-icon-forma-de-pagamento-pix.png",
                ]}
              />
            </div>
            <div className="flex flex-col">
              <TitleColumnFooter
                title="Site Seguro"
                subTitle={""}
                images={["/assets/rnk-icon-pci.png"]}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
