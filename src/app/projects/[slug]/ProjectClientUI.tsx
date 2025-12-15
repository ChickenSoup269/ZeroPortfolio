"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CheckCircle2,
  Github,
  Globe,
  Youtube,
  ImageIcon,
  Maximize2,
  X,
  ChevronLeft, // Mới
  ChevronRight, // Mới
} from "lucide-react"
import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectClientUI({ project }: { project: any }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 1. BACKGROUND GRADIENTS & GRID (Z-Index thấp nhất) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Nút Back */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Button
            variant="ghost"
            asChild
            className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* 2. HEADER SECTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-5 gap-8 mb-12"
        >
          {/* Cột Ảnh Chính */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 rounded-2xl overflow-hidden border shadow-2xl aspect-video bg-muted group relative"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            {/* Overlay nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          {/* Cột Thông Tin Header */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 flex flex-col justify-center space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm text-foreground/80 uppercase tracking-wider mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-sm border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <Button className="flex-1 shadow-lg shadow-primary/20" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <Globe className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="flex-1" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="my-10 border-muted"
        />

        {/* 3. MAIN CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* CỘT TRÁI (LỚN) */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                Overview
              </h2>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-8 text-justify">
                {project.content}
              </div>
            </motion.section>

            {/* Video Demo */}
            {project.videoId && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Youtube className="h-6 w-6 text-red-600" /> Video Demo
                </h2>
                <div className="rounded-2xl overflow-hidden border shadow-lg aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title="Project Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.section>
            )}

            {/* 4. IMAGE GALLERY (Horizontal Scroll with Arrows) */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ImageIcon className="h-6 w-6 text-blue-500" /> Gallery
                </h2>

                {/* Wrapper chứa scroll ngang & Buttons */}
                <div className="relative group/gallery w-full">
                  {/* --- NÚT SCROLL TRÁI --- */}
                  <button
                    onClick={() => {
                      // Scroll sang trái 300px
                      const container =
                        document.getElementById("gallery-container")
                      if (container)
                        container.scrollBy({ left: -300, behavior: "smooth" })
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover/gallery:opacity-100 disabled:opacity-0 translate-x-2"
                    aria-label="Scroll Left"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* --- CONTAINER CHỨA ẢNH --- */}
                  <div
                    id="gallery-container"
                    className="flex gap-4 overflow-x-auto pb-4 pt-2 px-1 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {project.gallery.map((img: string, idx: number) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(img)}
                        // min-w-[200px]: Chiều rộng cố định
                        className="relative min-w-[200px] h-[140px] rounded-xl overflow-hidden border shadow-sm cursor-pointer snap-start bg-muted shrink-0"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx}`}
                          className="w-full h-full object-cover transition-all duration-500 hover:brightness-110"
                        />

                        {/* Icon phóng to */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
                        </div>
                      </motion.div>
                    ))}
                    {/* Dummy div để tạo khoảng trống cuối cùng */}
                    <div className="w-1 shrink-0" />
                  </div>

                  {/* --- NÚT SCROLL PHẢI --- */}
                  <button
                    onClick={() => {
                      // Scroll sang phải 300px
                      const container =
                        document.getElementById("gallery-container")
                      if (container)
                        container.scrollBy({ left: 300, behavior: "smooth" })
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all opacity-0 group-hover/gallery:opacity-100 -translate-x-2"
                    aria-label="Scroll Right"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Hiệu ứng mờ dần bên phải (Nằm dưới nút bấm nhưng trên ảnh) */}
                  <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
                </div>

                <p className="text-xs text-muted-foreground mt-1 italic flex items-center gap-1">
                  Click images to zoom <Maximize2 className="w-3 h-3" />
                </p>
              </motion.section>
            )}
          </div>

          {/* CỘT PHẢI (SIDEBAR) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features Card */}
            <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm sticky top-24">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2 border-b pb-4">
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Card */}
            <div className="p-6 rounded-2xl border bg-muted/20">
              <h3 className="font-bold text-lg mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">2024</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">Personal</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-medium">Fullstack Dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 5. LIGHTBOX MODAL (ZOOM ẢNH) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Nút Close */}
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50">
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Click vào ảnh không đóng
            >
              <Image
                src={selectedImage}
                alt="Full Preview"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
