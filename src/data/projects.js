import petcare from "../assets/projects/petcare.png";
import solidus from "../assets/projects/solidus.png";
export const projects = [
  {
    id: "petcare",
    label: "PetCare",
    url: "https://github.com/MigueXavier/PetCare",
    image: petcare,
    description: {
      pt: "Aplicativo mobile que facilita o cuidado com animais de estimação, integrando tutores, veterinários e pet shops. Reúne cadastro e perfil do pet, cartão de vacina, agendamento de consultas, busca de pet shops com mapa e chat entre os usuários.",
      en: "Mobile app that makes pet care easier by connecting owners, veterinarians and pet shops. It brings together pet registration and profile, vaccination card, appointment scheduling, pet shop search with a map, and chat between users.",
    },
    tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Provider"],
    role: { pt: "Back-end e banco de dados", en: "Back-end and database" },
    context: {
      pt: "Projeto em equipe (6 integrantes), Cotemig 2025",
      en: "Team project (6 members), Cotemig 2025",
    },
  },
  {
    id: "solidus",
    label: "Solidus",
    url: "https://github.com/MigueXavier/Solidus",
    image: solidus,
    description: {
      pt: "Plataforma web de gestão para ONGs, focada no controle de doações e estoque. Integra recebimento de doações, estoque, tarefas, rotas de transporte, dashboard e mensagens internas, com acesso por perfil (funcionário, doador e beneficiado).",
      en: "Web platform for managing NGOs, focused on donation and inventory control. Integrates donation receiving, inventory, tasks, transportation routes, dashboard, and internal messaging with profile-based access (employee, donor, and beneficiary).",
    },
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js", "Node.js", "JSON Server"],
        role: { pt: "Sistema de mensagens internas (envio e recebimento)", en: "Internal messaging system (sending and receiving)" },
        context: {
      pt: "Projeto em equipe (6 integrantes), PUC Minas, 2026/1",
      en: "Team project (6 members), PUC Minas, 2026/1",
    },
  },
];