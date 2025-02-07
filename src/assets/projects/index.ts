import { Project } from "../../global/project";
import github from "./github.png"
import lamado from "./lamado.png"
import driverBooklet from "./driver-booklet.png"

export const projects: Project[] = [
  {
    title: "Landing page para L. Amado representações",
    text: "Landing page desenvolvida  para um representante de marcas de tintas \
    e impermeabilizantes que busca aumentar seu alcance.",
    img: lamado,
    url: "https://lamadorepresentacoes.com.br",
    buttonText: "Ver projeto",
    buttonStyle: "normal"
  },
  {
    title: "Driver Booklet",
    text: "Projeto que visa fazer uma aplicação mobile PWA para motoristas de \
    aplicativo e donos de frota em portugal poderem fazer relatórios e comprovar carga horária.",
    img: driverBooklet,
    url: "https://driver-booklet.vercel.app/",
    buttonText: "Ver projeto",
    buttonStyle: "normal"
  },
  {
    title: "Quer ver mais?",
    text: "Acesse meu github para ver mais projetos",
    img: github,
    url: "https://github.com/Matheus-C",
    buttonText: "Acessar GitHub",
    buttonStyle: "outlined"
  }
]