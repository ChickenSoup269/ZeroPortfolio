"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Folder,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

// 1. DỮ LIỆU GIẢ LẬP (Tạo 15 dự án để test phân trang)
const allProjects = Array.from({ length: 20 }).map((_, i) => ({
  id: `project-${i + 1}`,
  title: `Experimental Project ${i + 1}`,
  description:
    "Một dự án nhỏ để thử nghiệm công nghệ mới, library hoặc thuật toán thú vị.",
  techStack: ["TypeScript", "React", i % 2 === 0 ? "Tailwind" : "SCSS"],
  githubUrl: "#",
  hasDetail: true, // Giả sử dự án nào cũng có trang chi tiết
}))

const ITEMS_PER_PAGE = 6

export default function OtherProjects() {
  const [currentPage, setCurrentPage] = useState(1)

  // 2. LOGIC PHÂN TRANG
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProjects = allProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen flex flex-col">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Other Noteworthy Projects</h1>
        <p className="text-muted-foreground">
          Các dự án mã nguồn mở, experiments và những thứ thú vị khác.
        </p>
      </div>

      {/* 3. GRID PROJECTS */}
      {/* mode="wait": Đợi animation cũ xong mới hiện cái mới */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage} // Key thay đổi để kích hoạt animation lại
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1"
        >
          {currentProjects.map((project, idx) => (
            <Card
              key={project.id}
              className="flex flex-col h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  {/* Icon Folder */}
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Folder className="w-6 h-6" />
                  </div>

                  {/* Links (Github / External) */}
                  <div className="flex gap-2">
                    <Link
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-primary/5 px-2"
                  asChild
                >
                  <Link href={`/projects/${project.id}`}>
                    <span className="text-sm">View Detail</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 4. THANH PHÂN TRANG (PAGINATION CONTROLS) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-32"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Previous
          </Button>

          <span className="text-sm font-medium text-muted-foreground">
            Page{" "}
            <span className="text-foreground font-bold">{currentPage}</span> of{" "}
            {totalPages}
          </span>

          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-32"
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}
