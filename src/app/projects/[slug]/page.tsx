import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectClientUI from "./ProjectClientUI" // Chúng ta sẽ viết component này ở ngay dưới

// 1. DỮ LIỆU GIẢ LẬP
// (Bạn có thể giữ nguyên phần data này hoặc import từ file khác)
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    // liveUrl: "...",
    videoId: "3mcsG_p_j7s",
    gallery: [
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/2.png?raw=true",
      "https://github.com/ChickenSoup269/imagesForRepo/raw/main/img_repo_extension_bookmarks/about_bookmark/3.png?raw=true",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", // Ảnh demo thêm
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // Ảnh demo thêm
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // Ảnh thứ 5 (sẽ bị cắt)
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
    liveUrl: "https://zero-movie-demo.vercel.app",
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

// --- SERVER COMPONENT (Main Entry) ---
export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const project = projectsData[slug]

  if (!project) {
    return notFound()
  }

  // Chuyển dữ liệu xuống Client Component để xử lý Animation & State
  return <ProjectClientUI project={project} />
}
