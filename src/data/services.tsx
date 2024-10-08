import { TServiceCard } from "@/components/Home/ServiceCard";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import SavedSearchRoundedIcon from "@mui/icons-material/SavedSearchRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";

import DockerIcon from "@/assets/DockerIcon";
export const services: TServiceCard[] = [
  {
    title: "Frontend",
    items: [
      {
        text: "Site vitrine sur mesure ",
        icon: <DiamondRoundedIcon />,
      },
      {
        text: "Application Web (PWA - Electron)",
        icon: <DesktopMacRoundedIcon />,
      },
      {
        text: "SEO",
        icon: <SavedSearchRoundedIcon />,
      },
    ],
    icon: <LanguageRoundedIcon />,
  },
  {
    title: "Backend",
    items: [
      {
        text: "API REST",
        icon: <ApiRoundedIcon />,
      },

      {
        text: "Architecture BDD",
        icon: <ArchitectureRoundedIcon />,
      },
      {
        text: "Sécurité - Cryptage - Authentification",
        icon: <SecurityRoundedIcon />,
      },
    ],
    icon: <StorageRoundedIcon />,
  },
  {
    title: "Autre",
    items: [
      {
        icon: <PhoneAndroidRoundedIcon />,
        text: "Mobile (Android)",
      },
      {
        icon: <DockerIcon />,
        text: "Docker",
      },
      {
        icon: <TranslateRoundedIcon />,
        text: "Anglais (B2)",
      },
    ],
    icon: <WorkspacesRoundedIcon />,
  },
];
