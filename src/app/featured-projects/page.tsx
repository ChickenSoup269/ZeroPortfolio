"use client"

import Link from "next/link"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Youtube, ArrowRight } from "lucide-react"

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

export default function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            // SỬA ĐỔI QUAN TRỌNG:
            // 1. p-0: Xóa padding mặc định để ảnh tràn viền
            // 2. overflow-hidden: Cắt ảnh thừa ở các góc bo tròn
            // 3. h-auto: Chiều cao tự động co giãn theo nội dung (xóa khoảng trắng thừa)
            className="group relative flex flex-col p-0 overflow-hidden rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 h-auto"
          >
            {/* PHẦN ẢNH */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Lớp phủ Overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            {/* PHẦN FOOTER */}
            {/* mt-auto để đẩy footer xuống đáy nếu các card có chiều cao khác nhau */}
            <div className="p-4 bg-card mt-auto border-t">
              <div className="grid grid-cols-2 gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Youtube className="mr-2 h-4 w-4 text-red-600" />
                      Demo
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
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

                <Button asChild className="w-full">
                  <Link href={`/projects/${project.id}`}>
                    Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
