import petcare from "../assets/projects/petcare.png";
import solidus from "../assets/projects/solidus.png";
export const projects = [
  {
    id: "petcare",
    label: "PetCare",
    url: "https://github.com/MigueXavier/PetCare",
    image: petcare,
    description:
      "Aplicativo mobile que facilita o cuidado com animais de estimação, integrando tutores e pet shops. Reúne cadastro e perfil do pet, cartão de vacina, agendamento de consultas, busca de pet shops com mapa e chat entre os usuários.",
    tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Provider"],
    role: "Back-end e banco de dados",
    context: "Projeto em equipe (6 integrantes), Cotemig 2025",
  },
  {
    id: "solidus",
    label: "Solidus",
    url: "https://github.com/MigueXavier/Solidus",
    image: solidus,
    description:
      "Plataforma web de gestão para ONGs, focada no controle de doações e estoque. Integra recebimento de doações, estoque, tarefas, rotas de transporte, dashboard e mensagens internas, com acesso por perfil (funcionário, doador e beneficiado).",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "Node.js", "JSON Server"],
    role: "Sistema de mensagens internas (envio e recebimento)",
    context: "Projeto em equipe (6 integrantes), PUC Minas, 2026/1",
  },
];