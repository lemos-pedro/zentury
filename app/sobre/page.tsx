import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Lightbulb, Shield, Zap, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Inovação Constante",
      description: "Buscamos sempre as tecnologias mais avançadas para criar soluções disruptivas",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Excelência Técnica",
      description: "Comprometimento com a qualidade e performance em cada linha de código",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Impacto Social",
      description: "Desenvolvemos tecnologia que gera impacto positivo na sociedade Angolana e Africana",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes para alcançar resultados excepcionais",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Fundação da Zentury",
      description: "Ariclene Pedro de Lemos funda a empresa com a visão de transformar Angola (África em geral) através da tecnologia inteligente",
      highlight: true,
    },
    {
      year: "2023",
      title: "Fundação da Zentury",
      description: "A Zentury nasce com a visão de digitalizar Angola com soluções inovadoras.",
      highlight: false,
    },
    {
      year: "2023",
      title: "Primeiro projecto",
      description: "Lançamos o nosso primeiro sistema nacional de registo e gestão inteligente para hospitais, interligado com serviços públicos e pronto para transformar a saúde em Angola.",
      highlight: false,
    },
    {
      year: "2024",
      title: "Parcerias Estratégicas",
      description: "Estabelecimento de parcerias com hospitais e instituições governamentais",
      highlight: false,
    },
    {
      year: "2025",
      title: "Liderança",
      description: "Estamos a construir o caminho para nos tornarmos líderes em soluções digitais seguras e integradas em África posteriormente no mundo.",
      highlight: true,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-effect border-blue-500/30 text-blue-400">Quem Somos</Badge>
            <h1 className="text-6xl font-bold mb-8">
              <span className="gradient-text">Transformando</span> Angola
              <br />
              através da <span className="text-white">Tecnologia</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos uma startup tecnológica angolana dedicada ao desenvolvimento de soluções digitais inteligentes que
              automatizam processos, otimizam resultados e criam impacto social positivo.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-effect rounded-2xl p-2 neon-glow">
                <img src="/seo.png" alt="Ariclene Pedro de Lemos - Fundador da World Tec" className="w-full h-96 object-cover rounded-xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-semibold">CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 glass-effect border-purple-500/30 text-purple-400">Nosso Fundador</Badge>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Ariclene Pedro de Lemos</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Visionário e empreendedor tecnológico Angolano, Ariclene Pedro de Lemos fundou a Zentury com a missão de
                  democratizar o acesso à tecnologia inteligente em Angola e conectar o país ao futuro digital global.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Com formação em Engenharia de Software e experiência em projetos de IA e automação, ele
                  lidera uma equipe multidisciplinar dedicada a criar soluções que transformam vidas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-6">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-400">Anos de Experiência</div>
                </div>
                <div className="glass-effect rounded-xl p-6">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-400">Projetos Liderados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Nossa Missão</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desenvolver soluções tecnológicas inteligentes que automatizam processos, otimizam resultados e criam
                  impacto social positivo em Angola e além.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-purple-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Nossa Visão</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser a principal referência em soluções digitais inteligentes em Angola, conectando o país ao futuro
                  tecnológico global.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-green-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Nosso Propósito</h3>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso à tecnologia inteligente, criando oportunidades e promovendo o desenvolvimento
                  através da inovação.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-300">Os princípios que guiam cada decisão e projeto</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-effect border-white/10 hover:border-blue-500/30 transition-all group hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:gradient-text transition-all">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-effect border-cyan-500/30 text-cyan-400">Nossa Jornada</Badge>
            <h2 className="text-4xl font-bold mb-6">
              História da <span className="gradient-text">World Tec</span>
            </h2>
            <p className="text-xl text-gray-300">Marcos importantes da nossa trajetória tecnológica</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0 group">
                <div className="flex-shrink-0 w-32 text-right mr-8">
                  <div className={`text-2xl font-bold ${item.highlight ? "gradient-text" : "text-blue-400"}`}>
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 mr-8 group-hover:scale-125 transition-transform neon-glow" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 glass-effect border-green-500/30 text-green-400">Nossa Equipe</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Especialistas <span className="gradient-text">Multidisciplinares</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Uma equipe de profissionais apaixonados por tecnologia, unidos pela missão de criar soluções que transformam
            vidas
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  Engenheiros de Software
                </h3>
                <p className="text-gray-400 text-sm">Especialistas em desenvolvimento e arquitetura</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-purple-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  Cientistas de Dados
                </h3>
                <p className="text-gray-400 text-sm">Especialistas em IA e machine learning</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-green-500/30 transition-all group">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  Consultores Estratégicos
                </h3>
                <p className="text-gray-400 text-sm">Especialistas em transformação digital</p>
              </CardContent>
            </Card>
          </div>

          <Link href="/contato">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 neon-glow px-8 py-4">
              Fale com Nossa Equipe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
