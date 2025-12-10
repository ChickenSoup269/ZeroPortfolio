/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CheckCircle2,
  Github,
  Globe,
  Youtube,
  ImageIcon,
} from "lucide-react"

// 1. DỮ LIỆU GIẢ LẬP (Cập nhật thêm gallery, videoId, link)
const projectsData: Record<string, any> = {
  "bookmark-manager": {
    title: "Zero Bookmark Manager",
    description: "Extension giúp quản lý và tìm kiếm bookmark cực nhanh.",
    imageUrl:
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/1.png?raw=true",
    techStack: ["React", "Vite", "Chrome API", "Tailwind CSS"],
    content:
      "Dự án này sinh ra để giải quyết vấn đề rối loạn bookmark trên trình duyệt. Nó cung cấp giao diện popup hiện đại, cho phép tìm kiếm mờ (fuzzy search), sắp xếp thư mục kéo thả và đồng bộ hóa dữ liệu giữa các thiết bị.",
    features: [
      "Tìm kiếm tức thì (Instant Search)",
      "Giao diện Dark/Light Mode",
      "Kéo thả sắp xếp Bookmark",
      "Export/Import dữ liệu JSON",
    ],
    githubUrl: "https://github.com/ChickenSoup269/bookmark-manager",
    liveUrl: "https://chrome.google.com/webstore/...",
    videoId: "3mcsG_p_j7s", // ID video Youtube
    gallery: [
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/2.png?raw=true",
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/3.png?raw=true",
    ],
  },
  "zero-movie": {
    title: "Zero Movie Theater",
    description: "Nền tảng đặt vé xem phim trực tuyến.",
    imageUrl:
      "https://github.com/ChickenSoup269/Zero_Movie/raw/main/frontend/public/screenshots/trangchinh.png",
    techStack: ["Next.js", "Redux Toolkit", "Node.js", "MongoDB", "Ant Design"],
    content:
      "Một hệ thống mô phỏng rạp chiếu phim hoàn chỉnh bao gồm trang khách hàng (đặt vé, chọn ghế, thanh toán) và trang Admin (quản lý phim, suất chiếu, thống kê doanh thu).",
    features: [
      "Chọn ghế Realtime (Socket.io)",
      "Thanh toán qua cổng VNPAY/Paypal",
      "Admin Dashboard thống kê",
      "Gửi vé qua Email",
    ],
    githubUrl: "https://github.com/ChickenSoup269/Zero_Movie",
    liveUrl: "https://zero-movie-demo.vercel.app", // Link demo nếu có
    videoId: "Hv5FI1u5by8",
    gallery: [
      "https://github.com/ChickenSoup269/Zero_Movie/raw/main/frontend/public/screenshots/datve.png",
      "https://github.com/ChickenSoup269/Zero_Movie/raw/main/frontend/public/screenshots/admin.png",
    ],
  },
  "steam-clone": {
    title: "SteamClone",
    description: "Website mua game trực tuyến giống Steam.",
    imageUrl:
      "https://github.com/ChickenSoup269/SteamClone/raw/master/Screenshot/Screenshot%202024-07-25%20203434.png",
    techStack: ["React", "Firebase", "SCSS"],
    content: "Clone lại giao diện và chức năng chính của Steam...",
    features: ["Auth", "Game Store", "Cart"],
    githubUrl: "https://github.com/ChickenSoup269/SteamClone",
    videoId: "zZd_RgvPfic",
    gallery: [],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const project = projectsData[slug]

  if (!project) {
    return notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 1. NÚT QUAY LẠI */}
      <Button
        variant="ghost"
        asChild
        className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-foreground"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      {/* 2. HEADER: ẢNH CHÍNH & TÊN DỰ ÁN */}
      <div className="grid md:grid-cols-5 gap-8 mb-12">
        {/* Cột Ảnh (Chiếm 3 phần) */}
        <div className="md:col-span-3 rounded-xl overflow-hidden border shadow-sm aspect-video bg-muted group">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Cột Thông tin tóm tắt (Chiếm 2 phần) */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm text-foreground/80 uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            {project.liveUrl && (
              <Button className="flex-1" asChild>
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
        </div>
      </div>

      <hr className="my-10 border-muted" />

      {/* 3. NỘI DUNG CHI TIẾT */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* CỘT TRÁI: NỘI DUNG CHÍNH (2/3) */}
        <div className="md:col-span-2 space-y-10">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Overview
            </h2>
            <p className="leading-7 text-muted-foreground text-lg text-justify">
              {project.content}
            </p>
          </section>

          {/* Video Demo (Nếu có) */}
          {project.videoId && (
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Youtube className="h-6 w-6 text-red-600" /> Video Demo
              </h2>
              <div className="rounded-xl overflow-hidden border shadow-sm aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title="Project Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          {/* Image Gallery (Nếu có) */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ImageIcon className="h-6 w-6 text-blue-500" /> Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-lg overflow-hidden border shadow-sm group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* CỘT PHẢI: TÍNH NĂNG & INFO (1/3) */}
        <div className="space-y-8">
          {/* Key Features */}
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Information Box */}
          <div className="p-6 rounded-xl border bg-muted/30">
            <h3 className="font-semibold mb-4 text-lg">Project Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-muted-foreground/20">
                <span className="text-muted-foreground">Status</span>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-200 bg-green-50"
                >
                  Completed
                </Badge>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-muted-foreground/20">
                <span className="text-muted-foreground">Type</span>
                <span className="font-medium">Personal Project</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">Fullstack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
