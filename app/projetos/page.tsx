import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Sistema de Triagem Inteligente",
    description: "IA para triagem médica automatizada em hospitais",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    status: "Em Produção",
    image: "/ia.jpeg",
  },
  {
    title: "Plataforma de Saúde Digital",
    description: "Ecossistema completo para gestão hospitalar",
    tech: ["Next.js", "PostgreSQL", "Docker", "AWS"],
    status: "Desenvolvimento",
    image: "/plataforma.jpeg",
  },
  {
    title: "SmartBand Health Monitor",
    description: "Dispositivo vestível para monitoramento de saúde",
    tech: ["IoT", "React Native", "Firebase", "ML"],
    status: "Prototipagem",
    image: "/relogio.jpeg",
  },
  {
    title: "Zentury EduTech",
    description: "Plataforma integrada para educação digital em Angola",
    tech: ["Laravel", "MySQL", "Vue.js"],
    status: "Desenvolvimento",
    image: "/edutech.jpeg",
  },
  {
    title: "Infraestrutura de Conectividade Rural",
    description: "Expansão de acesso à internet em regiões remotas",
    tech: ["LTE", "Satélite", "MikroTik", "Redes Mesh"],
    status: "Execução",
    image: "/rural.jpeg",
  },
  {
    title: "Central Integrada de Segurança Urbana",
    description: "Sistema de gestão inteligente para segurança urbana",
    tech: ["Node.js", "AI", "IoT", "Câmeras IP"],
    status: "Planejamento",
    image: "/seguranca.jpeg",
  },
]

export default function ProjectosPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Banner */}
      <section className="py-32 text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-6 glass-effect border-blue-500/30 text-blue-400">Inovação em Ação</Badge>
          <h1 className="text-5xl font-extrabold mb-6">
            Projetos que <span className="gradient-text">Transformam Angola</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Conheça os projetos de tecnologia desenvolvidos pela Zentury com foco em impacto social, inovação e escalabilidade.
          </p>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-white/10 hover:border-blue-500/30 transition-all group">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="rounded-t-xl object-cover h-48 w-full"
              />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-700/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-white">Status:</span> {project.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
