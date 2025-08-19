"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Smartphone,
  Code,
  Heart,
  ChevronRight,
  Play,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState(0)

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
  ]

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Inteligência Artificial",
      description: "Soluções de IA para automação e análise preditiva",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automação de Sistemas",
      description: "Automatização de processos empresariais complexos",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Saúde Digital",
      description: "Plataformas inteligentes para o setor de saúde",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Dispositivos Vestíveis",
      description: "Integração com smartbands e wearables",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento de Software",
      description: "Aplicações web e mobile de alta performance",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Consultoria Tecnológica",
      description: "Estratégia e implementação de soluções tech",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const stats = [
    { number: "50+", label: "Projetos Entregues", icon: <Award className="h-6 w-6" /> },
    { number: "25+", label: "Clientes Satisfeitos", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Garantido", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Suporte Técnico", icon: <Shield className="h-6 w-6" /> },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-8 glass-effect border-blue-500/30 text-blue-400 animate-fade-in">
            🚀 Startup Tecnológica Angolana
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="gradient-text">Futuro</span>
            <br />
            <span className="text-white">Inteligente</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Desenvolvemos soluções digitais inteligentes que transformam empresas e impactam vidas através da
            <span className="gradient-text font-semibold"> automação</span>,
            <span className="gradient-text font-semibold"> inteligência artificial</span> e
            <span className="gradient-text font-semibold"> inovação tecnológica</span>.
          </p>


          {/* Floating tech icons */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 animate-float">
              <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="absolute -top-32 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-cyan-400" />
              </div>
            </div>
            <div className="absolute -bottom-20 left-1/3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-glow transition-all">
                  <div className="text-blue-400">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-effect border-blue-500/30 text-blue-400">Nossas Soluções</Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Tecnologia</span> que Transforma
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desenvolvemos soluções inteligentes que automatizam processos, otimizam resultados e criam impacto real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-effect border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-effect border-purple-500/30 text-purple-400">Projetos em Destaque</Badge>
            <h2 className="text-5xl font-bold mb-6">
              Inovação em <span className="gradient-text">Ação</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos mais impactantes que estão transformando setores inteiros
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge
                    className={`glass-effect ${projects[currentProject].status === "Em Produção" ? "border-green-500/30 text-green-400" : projects[currentProject].status === "Desenvolvimento" ? "border-yellow-500/30 text-yellow-400" : "border-blue-500/30 text-blue-400"}`}
                  >
                    {projects[currentProject].status}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white">{projects[currentProject].title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{projects[currentProject].description}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {projects[currentProject].tech.map((tech, index) => (
                    <Badge key={index} className="glass-effect border-white/10 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0">
                    Ver Projeto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 glass-effect bg-transparent"
                  >
                    Documentação
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="glass-effect rounded-2xl p-2 neon-glow">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>

                {/* Project indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentProject ? "bg-blue-400 neon-glow" : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para o <span className="gradient-text">Futuro</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como nossas soluções inteligentes podem transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 neon-glow px-8 py-4"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projetos">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 glass-effect px-8 py-4 bg-transparent"
              >
                Ver Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
