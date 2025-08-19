import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Zentury </h3>
                <p className="text-sm text-gray-400 font-mono">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Startup tecnológica especializada em soluções digitais inteligentes, automação e projetos de impacto
              social através da tecnologia.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Soluções</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/servicos#automacao" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Automação de Sistemas
                </Link>
              </li>
              <li>
                <Link href="/servicos#ia" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Inteligência Artificial
                </Link>
              </li>
              <li>
                <Link href="/servicos#saude" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Saúde Digital
                </Link>
              </li>
              <li>
                <Link href="/servicos#wearables" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Dispositivos Vestíveis
                </Link>
              </li>
              <li>
                <Link href="/servicos#consultoria" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Consultoria Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Contato</h4>
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">support@zentury.pt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+244 959 499 380</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Luanda, Angola</span>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-3 text-white">Newsletter</h5>
              <div className="flex space-x-2">
                <Input
                  placeholder="Seu email"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 border-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Zentury & co. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-blue-400 transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-blue-400 transition-colors">
              Termos
            </Link>
            <Link href="/cookies" className="hover:text-blue-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
