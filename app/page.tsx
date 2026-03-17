'use client';

import Image from 'next/image';
import { Code as Code2, Globe, Terminal, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const skills = [
    { name: 'Frontend Development', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend Development', icon: Terminal, items: ['Node.js', 'Python', 'APIs RESTful', 'PostgreSQL'] },
    { name: 'Full Stack', icon: Code2, items: ['Git', 'Docker', 'CI/CD', 'Supabase'] },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, carrinho de compras e processamento de pagamentos.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados em tempo real com gráficos e métricas personalizadas.',
      tech: ['React', 'D3.js', 'Node.js'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Aplicação social com feed de posts, sistema de comentários e notificações em tempo real.',
      tech: ['Next.js', 'Supabase', 'WebSockets'],
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/LogoEB.png"
              alt="EB Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              EB Development
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">Sobre</a>
            <a href="#skills" className="text-slate-300 hover:text-sky-400 transition-colors">Habilidades</a>
            <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projetos</a>
            <a href="#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                  Code & Web
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Transformando ideias em soluções digitais inovadoras através de código limpo e design moderno.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#projects">
                  <Button className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8">
                    Ver Projetos                
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                    Entre em Contato
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/LogoEB.png"
                  alt="EB Logo"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Com mais de 7 anos de experiência no setor de tecnologia, transformo desafios complexos em aplicações escaláveis, intuitivas e seguras. Minha expertise une o desenvolvimento moderno com React e Next.js a uma visão analítica de backend e infraestrutura.

              Especialista em Engenharia de Computação, foco em entregar não apenas código, mas soluções completas que alinham performance excepcional a um design de alta qualidade. Meu objetivo é impulsionar negócios através de arquiteturas robustas e experiências digitais que realmente impactam o usuário final.
              
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Especializado em React, Next.js e desenvolvimento backend, entrego soluções completas
              que combinam performance, segurança e design de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-orange-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-sky-400">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
                <CardHeader>
                  <CardTitle className="text-xl text-sky-400 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-sky-400 text-sm rounded-full border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full text-orange-400 hover:text-orange-300 hover:bg-orange-500/10">
                    Ver Projeto <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Tem um projeto em mente? Entre em contato e vamos transformar sua visão em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
            {/* Botão GitHub */}
            <Button 
              variant="outline" 
              className="bg-white border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>

            {/* Botão LinkedIn */}
            <Button 
              variant="outline" 
              className="bg-white border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            {/* <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button> */}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>© 2026 EB Development. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
