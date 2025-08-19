"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Wifi, Zap, Shield, Clock, CheckCircle, ArrowRight, Phone, Home, Building } from "lucide-react"

export default function ConnectPage() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    plan: "",
    message: "",
  })

  const residentialPlans = [
    {
      name: "Connect Basic",
      speed: "50 Mbps",
      price: "15.000",
      features: [
        "Download: 50 Mbps",
        "Upload: 10 Mbps",
        "Ideal para 2-3 dispositivos",
        "Suporte 24/7",
        "Instalação gratuita",
      ],
      popular: false,
    },
    {
      name: "Connect Plus",
      speed: "100 Mbps",
      price: "25.000",
      features: [
        "Download: 100 Mbps",
        "Upload: 20 Mbps",
        "Ideal para 4-6 dispositivos",
        "Suporte prioritário",
        "Instalação gratuita",
        "Wi-Fi 6 incluído",
      ],
      popular: true,
    },
    {
      name: "Connect Ultra",
      speed: "200 Mbps",
      price: "40.000",
      features: [
        "Download: 200 Mbps",
        "Upload: 50 Mbps",
        "Ideal para 8+ dispositivos",
        "Suporte VIP",
        "Instalação gratuita",
        "Wi-Fi 6 Pro incluído",
        "IP fixo gratuito",
      ],
      popular: false,
    },
  ]

  const businessPlans = [
    {
      name: "Business Essential",
      speed: "100 Mbps",
      price: "50.000",
      features: [
        "Download: 100 Mbps simétrico",
        "Upload: 100 Mbps",
        "SLA 99.5%",
        "Suporte técnico dedicado",
        "IP fixo incluído",
        "Backup 4G",
      ],
    },
    {
      name: "Business Pro",
      speed: "500 Mbps",
      price: "120.000",
      features: [
        "Download: 500 Mbps simétrico",
        "Upload: 500 Mbps",
        "SLA 99.9%",
        "Gerente de conta dedicado",
        "IPs fixos múltiplos",
        "Backup 4G redundante",
        "Firewall empresarial",
      ],
    },
    {
      name: "Business Enterprise",
      speed: "1 Gbps",
      price: "Sob consulta",
      features: [
        "Download: 1 Gbps+ simétrico",
        "Upload: 1 Gbps+",
        "SLA 99.99%",
        "Suporte 24/7 premium",
        "Infraestrutura dedicada",
        "Múltiplas redundâncias",
        "Soluções personalizadas",
      ],
    },
  ]

  const advantages = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Velocidade Garantida",
      description: "Internet de alta velocidade com performance consistente",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Conexão Segura",
      description: "Proteção avançada contra ameaças digitais",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Suporte 24/7",
      description: "Atendimento técnico disponível a qualquer hora",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Garantia de disponibilidade e estabilidade",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Pedido enviado:", formData)
    alert("Pedido enviado com sucesso! Entraremos em contato em breve.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      plan: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">World Tec Connect</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Internet de Alta Velocidade para Angola</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectividade confiável e rápida para residências e empresas, com cobertura nacional e suporte técnico
              especializado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Fibra Óptica World Tec"
                alt="Infraestrutura de fibra óptica"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fibra Óptica</h3>
                  <p className="text-gray-600">Tecnologia de ponta para máxima velocidade</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Conexão Segura</h3>
                  <p className="text-gray-600">Proteção avançada para seus dados</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Suporte 24/7</h3>
                  <p className="text-gray-600">Atendimento técnico sempre disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que Escolher o World Tec Connect?</h2>
            <p className="text-xl text-gray-600">Vantagens que fazem a diferença</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{advantage.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800">Planos Residenciais</Badge>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internet para sua Casa</h2>
            <p className="text-xl text-gray-600">Planos ideais para toda a família</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {residentialPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all ${plan.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.speed}</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {plan.price} <span className="text-lg font-normal text-gray-600">Kz/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"}`}
                    onClick={() => {
                      setSelectedPlan(plan.name)
                      setFormData({ ...formData, plan: plan.name })
                      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Contratar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-green-600" />
              <Badge className="bg-green-100 text-green-800">Planos Empresariais</Badge>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internet para sua Empresa</h2>
            <p className="text-xl text-gray-600">Soluções profissionais com SLA garantido</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.speed}</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {plan.price}{" "}
                    {plan.price !== "Sob consulta" && <span className="text-lg font-normal text-gray-600">Kz/mês</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      setSelectedPlan(plan.name)
                      setFormData({ ...formData, plan: plan.name })
                      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-800">Faça seu Pedido</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solicite sua Conexão</h2>
              <p className="text-xl text-gray-600">Preencha o formulário e nossa equipe entrará em contato</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+244 923 456 789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Plano Selecionado</label>
                      <Input
                        value={selectedPlan || formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        placeholder="Selecione um plano acima"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Endereço de Instalação *</label>
                    <Input
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Endereço completo para instalação"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem Adicional</label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Informações adicionais sobre sua necessidade..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 py-3"
                  >
                    Enviar Solicitação
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Precisa de Ajuda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer suas dúvidas e ajudar na escolha do melhor plano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Ligar: +244 959 499 380
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent">
              WhatsApp:  +244 959 499 380
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
