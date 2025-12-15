"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Youtube, ArrowRight, Play } from "lucide-react"

// --- Dữ liệu ---
const projects = [
  {
    id: "bookmark-manager",
    title: "Zero Bookmark Manager",
    description: "Extension quản lý bookmark nhanh chóng và tiện lợi.",
    videoId: "3mcsG_p_j7s",
    imageUrl:
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/1.png?raw=true",
  },
  {
    id: "zero-movie",
    title: "Zero Movie Theater",
    description:
      "Nền tảng rạp chiếu phim thông minh với trải nghiệm đặt vé siêu tốc.",
    videoId: "Hv5FI1u5by8",
    imageUrl:
      "https://github.com/ChickenSoup269/Zero_Movie/raw/main/frontend/public/screenshots/trangchinh.png",
  },
  {
    id: "steam-clone",
    title: "SteamClone",
    description: "Website mua game trực tuyến giao diện giống Steam.",
    videoId: "zZd_RgvPfic",
    imageUrl:
      "https://github.com/ChickenSoup269/SteamClone/raw/master/Screenshot/Screenshot%202024-07-25%20203434.png",
  },
]

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            {/* 
               Thiết lập chiều cao cố định (h-[400px]) để ảnh luôn đẹp 
               group: để kích hoạt hiệu ứng hover
            */}
            <Card className="group relative h-[200px] w-full overflow-hidden rounded-sm border-none shadow-lg bg-black">
              {/* 1. LỚP ẢNH NỀN (FULL CARD) */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
              </div>

              {/* 2. LỚP PHỦ GRADIENT & NỘI DUNG (Hiện ra khi Hover) */}
              {/* 
                  translate-y-full: Mặc định đẩy nội dung xuống dưới đáy (ẩn đi)
                  group-hover:translate-y-0: Khi hover thì trượt lên vị trí cũ
              */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-linear-to-t  from-black/70 via-black/60 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                {/* Text Info */}
                <div className="mb-4">
                  <h3 className="text-white text-lg font-bold mb-2 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-3 mb-4 drop-shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {/* Button Demo */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-white text-black hover:bg-gray-200 border-none">
                        <Play className="mr-2 h-4 w-4 fill-current" /> Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-black border-none">
                      <DialogHeader className="p-4 absolute top-0 z-20 w-full bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                        <DialogTitle className="text-white">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video w-full">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Button Detail */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white text-white bg-transparent hover:bg-white/20 hover:text-white"
                  >
                    <Link href={`/projects/${project.id}`}>
                      Detail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Optional: Icon gợi ý user hover vào (ẩn đi khi hover) */}
              <div className="absolute bottom-4 right-4 z-20 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white/80">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
