"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { ArrowRight, Code, Terminal, Cpu } from "lucide-react"

// 1. IMPORT ICONS TỪ REACT-ICONS
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiFigma,
} from "react-icons/si"

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
}

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

// 2. CẬP NHẬT DATA SKILLS KÈM ICON VÀ MÀU SẮC
const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Prisma", icon: SiPrisma, color: "text-teal-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
]

const previewProjects = [
  {
    title: "E-Commerce Platform",
    desc: "Nền tảng mua sắm trực tuyến với thanh toán tích hợp.",
    icon: <Code className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Task Management",
    desc: "Ứng dụng quản lý công việc nhóm realtime.",
    icon: <Terminal className="h-6 w-6 text-green-500" />,
  },
  {
    title: "AI Chat Assistant",
    desc: "Chatbot thông minh sử dụng OpenAI API.",
    icon: <Cpu className="h-6 w-6 text-purple-500" />,
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background text-foreground pt-20 overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 inline-block"
          >
            <div className="p-1 rounded-full bg-gradient-to-tr from-primary to-purple-500">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/95624468?v=4"
                  alt="Your Photo"
                />
                <AvatarFallback>DEV</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Hi, I'm ChickenSoup
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Full-stack Developer chuyên xây dựng các ứng dụng web hiện đại, tối
            ưu hiệu năng và trải nghiệm người dùng tuyệt vời.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="text-lg px-8 rounded-full shadow-lg shadow-primary/25"
              asChild
            >
              <Link href="/featured-projects">View My Work</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 rounded-full"
              asChild
            >
              <Link href="https://github.com/ChickenSoup269" target="_blank">
                GitHub Profile
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. SKILLS SECTION (ĐÃ CẬP NHẬT GIAO DIỆN ICON) */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-12"
            >
              Technology Stack
            </motion.h2>

            {/* Grid hiển thị icon đẹp mắt */}
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border shadow-sm hover:shadow-md transition-all w-28 md:w-32 hover:-translate-y-1 cursor-default"
                >
                  {/* Hiển thị Icon với màu sắc riêng */}
                  <skill.icon className={`h-10 w-10 ${skill.color}`} />
                  <span className="font-medium text-sm text-muted-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="relative rounded-2xl overflow-hidden border shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
              alt="Coding Workspace"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tôi là một lập trình viên Full-stack với hơn 2 năm kinh nghiệm làm
            việc với các công nghệ Web. Tôi đam mê viết clean code, giải quyết
            các vấn đề phức tạp và tạo ra những sản phẩm có giá trị thực tế.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">10+</span>
              <span className="text-sm text-muted-foreground">Projects</span>
            </div>
            <div className="w-[1px] h-12 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">2+</span>
              <span className="text-sm text-muted-foreground">Years Exp</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. FEATURED PREVIEW */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Một số dự án tiêu biểu mà tôi đã thực hiện gần đây.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {previewProjects.map((proj, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-primary/50">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {proj.icon}
                    </div>
                    <CardTitle className="text-xl">{proj.title}</CardTitle>
                    <CardDescription>{proj.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tech stack: Next.js, TypeScript, Tailwind...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full group" asChild>
                      <Link href="/featured-projects">
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/featured-projects">See All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
