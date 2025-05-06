import { ReactNode } from "react";

export interface AgentData {
  id: string;
  name: string;
  area: string;
  iconType: string;
  description: string;
  shortDescription: string;
  features: { text: string }[];
  subFeatures: { [key: number]: { text: string }[] };
  stats: { label: string; value: string }[];
  gradient: string;
}

export const agentData: { [key: string]: AgentData } = {
  talentbot: {
    id: "talentbot",
    name: "TalentBot",
    area: "RRHH",
    iconType: "Users",
    description: "Automatiza todo el proceso de gestión de candidatos desde la recepción de CVs hasta la integración en la empresa, simplificando la labor de recursos humanos.",
    shortDescription: "Automatiza procesos de reclutamiento y onboarding",
    features: [
      { text: "Clasifica CVs y perfiles según requisitos" },
      { text: "Agenda entrevistas con integración a calendario" },
      { text: "Genera respuestas automáticas personalizadas" },
      { text: "Registra y organiza candidatos en base de datos estructurada" }
    ],
    subFeatures: {},
    stats: [
      { label: "Tiempo de contratación", value: "-40%" },
      { label: "Satisfacción candidatos", value: "+25%" }
    ],
    gradient: "from-blue-600 to-blue-400"
  },
  clientcare: {
    id: "clientcare",
    name: "ClientCare AI",
    area: "Atención al cliente",
    iconType: "MessageSquare",
    description: "Gestiona consultas entrantes por email de forma autónoma, comprendiendo los mensajes y ofreciendo respuestas precisas según el tipo de consulta.",
    shortDescription: "Asistente de atención al cliente 24/7 con respuestas personalizadas",
    features: [
      { text: "Lee, clasifica e interpreta mensajes" },
      { text: "Responde automáticamente según la intención y urgencia" },
      { text: "Escala casos críticos por Telegram o WhatsApp" },
      { text: "Registra cada interacción en Google Sheets o CRM" }
    ],
    subFeatures: {},
    stats: [
      { label: "Tiempo de respuesta", value: "-85%" },
      { label: "Satisfacción cliente", value: "+30%" }
    ],
    gradient: "from-purple-600 to-blue-400"
  },
  officeassist: {
    id: "officeassist",
    name: "OfficeAssist AI",
    area: "Secretaría/Asistencia",
    iconType: "FileText",
    description: "Asistente digital multicanal que apoya en tareas operativas diarias, actuando como un asistente personal virtual para gestión de calendarios y comunicaciones.",
    shortDescription: "Automatiza tareas administrativas y gestión documental",
    features: [
      { text: "Consulta y gestiona calendarios" },
      { text: "Redacta y envía correos o recordatorios" },
      { text: "Busca información en web o documentos" },
      { text: "Controla contactos y tareas administrativas desde Telegram" }
    ],
    subFeatures: {},
    stats: [
      { label: "Errores", value: "-90%" },
      { label: "Productividad", value: "+45%" }
    ],
    gradient: "from-blue-600 to-purple-400"
  },
  marketingwise: {
    id: "marketingwise",
    name: "MarketingWise AI",
    area: "Marketing de Contenidos",
    iconType: "TrendingUp",
    description: "Generador de contenido automatizado para redes sociales que mantiene activa la presencia digital de tu marca con publicaciones personalizadas para cada plataforma.",
    shortDescription: "Optimiza campañas y genera contenido automáticamente",
    features: [
      { text: "Crea publicaciones adaptadas a cada red (LinkedIn, Instagram, X, etc.)" },
      { text: "Genera imágenes con IA o permite subirlas" },
      { text: "Incluye lógica de aprobación previa" },
      { text: "Publica automáticamente y reporta resultados" }
    ],
    subFeatures: {},
    stats: [
      { label: "ROI campañas", value: "+35%" },
      { label: "Tiempo creación", value: "-70%" }
    ],
    gradient: "from-purple-400 to-blue-600"
  },
  datainsight: {
    id: "datainsight",
    name: "DataInsight AI",
    area: "Análisis de Datos",
    iconType: "BarChart3",
    description: "Analista de datos conectado a Google Sheets o Supabase que transforma datos complejos en información procesable mediante consultas en lenguaje natural.",
    shortDescription: "Automatiza la obtención y análisis de datos empresariales",
    features: [
      { text: "Interpreta datos financieros, operativos o comerciales" },
      { text: "Responde consultas del tipo \"¿Qué vendimos este mes?\"" },
      { text: "Resume, agrupa y calcula usando IA y lógica" },
      { text: "Ideal para dashboards o reporting conversacional" }
    ],
    subFeatures: {},
    stats: [
      { label: "Tiempo de análisis", value: "-80%" },
      { label: "Precisión de datos", value: "+95%" }
    ],
    gradient: "from-blue-400 to-purple-400"
  },
  financeflow: {
    id: "financeflow",
    name: "FinanceFlow",
    area: "Contabilidad",
    iconType: "DollarSign",
    description: "Automatiza el registro y control financiero diario con un asistente virtual especializado en finanzas que simplifica la gestión contable de tu empresa.",
    shortDescription: "Automatiza facturación, pagos y reportes financieros",
    features: [
      { text: "Registra ingresos y gastos desde chat" },
      { text: "Detecta pagos vencidos y alerta automáticamente" },
      { text: "Genera reportes financieros resumidos (mensuales/semanales)" },
      { text: "Se conecta a Google Sheets, calendario y canales de notificación" }
    ],
    subFeatures: {},
    stats: [
      { label: "Tiempo administrativo", value: "-60%" },
      { label: "Precisión", value: "+99.5%" }
    ],
    gradient: "from-blue-400 to-purple-600"
  },
  legalassist: {
    id: "legalassist",
    name: "LegalAssist AI",
    area: "Asistencia Legal",
    iconType: "Shield",
    description: "Revisa contratos y documentos legales con precisión, identificando cláusulas relevantes y posibles riesgos legales que requieran atención profesional.",
    shortDescription: "Genera y revisa documentos legales automáticamente",
    features: [
      { text: "Analiza cláusulas desde texto o archivo PDF" },
      { text: "Detecta riesgos, ambigüedades o condiciones abusivas" },
      { text: "Resume el documento legal y sugiere mejoras" },
      { text: "Interactúa como un asistente legal profesional desde Telegram" }
    ],
    subFeatures: {},
    stats: [
      { label: "Tiempo revisión", value: "-75%" },
      { label: "Cumplimiento", value: "+99%" }
    ],
    gradient: "from-purple-600 to-blue-400"
  }
};