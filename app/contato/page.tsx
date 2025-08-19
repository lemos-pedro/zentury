"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Mensagem enviada:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a Zentury & co.")
    window.open(`https://wa.me/244959499380?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "support@zentury.pt",
      description: "Resposta em até 72 horas",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      info: "+244 959 499 380",
      description: "Seg-Sex: 8h às 18h",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      info: "+244 959 499 380",
      description: "Atendimento rápido",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      info: "Luanda, Angola",
      description: "Atendimento presencial / Online",
      gradient: "from-orange-500 to-red-500",
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 glass-effect border-blue-500/30 text-blue-400">Fale Conosco</Badge>
          <h1 className="text-6xl font-bold mb-8">
            Vamos <span className="gradient-text">Conversar</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para transformar suas ideias em soluções tecnológicas inteligentes. Entre em contato e
            descubra como podemos impulsionar seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="glass-effect border-white/10 hover:border-blue-500/30 transition-all group hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{contact.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                    {contact.title}
                  </h3>
                  <p className="font-medium text-blue-400 mb-2">{contact.info}</p>
                  <p className="text-gray-400 text-sm">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  Envie uma <span className="gradient-text">Mensagem</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve
                </p>
              </div>

              <Card className="glass-effect border-white/10 neon-glow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome completo"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu@email.com"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+244 959 499 380"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nome da empresa"
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Assunto *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Assunto da mensagem"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Descreva seu projeto ou necessidade..."
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 neon-glow py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Atendimento <span className="gradient-text">Especializado</span>
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Nossa equipe está pronta para entender suas necessidades e propor soluções tecnológicas personalizadas
                  para seu negócio.
                </p>

                <div className="space-y-6">
                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Horário de Atendimento</h4>
                          <p className="text-gray-400 text-sm">Segunda a Sexta: 8:00 - 18:00</p>
                          <p className="text-gray-400 text-sm">Sábado: 8:00 - 14:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">WhatsApp Business</h4>
                          <p className="text-gray-400 text-sm">Atendimento rápido 24/7</p>
                          <p className="text-gray-400 text-sm">Respostas automáticas disponíveis</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Canais Diretos</h4>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5 glass-effect py-3 bg-transparent"
                  onClick={() => (window.location.href = "tel:+244959499380")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/5 glass-effect py-3 bg-transparent"
                  onClick={() => (window.location.href = "mailto:support@zentury.pt")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 glass-effect border-purple-500/30 text-purple-400">Perguntas Frequentes</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Dúvidas <span className="gradient-text">Comuns</span>
            </h2>
            <p className="text-xl text-gray-300">Respostas rápidas para as perguntas mais frequentes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-3">Qual o prazo para desenvolvimento?</h4>
                <p className="text-gray-400">
                  Depende da complexidade do projeto. Projetos simples: 4-13 semanas. Projetos complexos : 2-6
                  meses.

                  consulte e receba um orçamento detalhado.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-3">Oferecem suporte pós-entrega?</h4>
                <p className="text-gray-400">
                  Sim! Oferecemos suporte técnico, manutenção e atualizações para garantir o funcionamento perfeito das
                  soluções.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-3">Trabalham com empresas internacionais?</h4>
                <p className="text-gray-400">
                  Absolutamente! Temos experiência em projetos internacionais e oferecemos suporte remoto completo.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover:border-blue-500/30 transition-all">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-3">Como funciona o processo de orçamento?</h4>
                <p className="text-gray-400">
                  Após o primeiro contato, fazemos uma análise detalhada e apresentamos uma proposta personalizada em
                  até 72h úteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para <span className="gradient-text">Inovar</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vamos transformar suas ideias em soluções tecnológicas que fazem a diferença
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 neon-glow px-8 py-4">
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 glass-effect px-8 py-4 bg-transparent"
              onClick={handleWhatsApp}
            >
              WhatsApp Direto
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
