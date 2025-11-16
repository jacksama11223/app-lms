# 🦉 EduLearn - Hệ thống LMS theo phong cách Duolingo

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

Hệ thống quản lý học tập (LMS) hiện đại với giao diện giống Duolingo, tích hợp AI và nhiều tính năng học tập tiên tiến.

## ✨ Tính năng nổi bật

### 👨‍🎓 Dành cho Học sinh
- 🎯 **Learning Path** - Lộ trình học tập dạng nodes với gamification
- 🃏 **Flashcards + Spaced Repetition** - Thuật toán SM-2 tối ưu ghi nhớ
- 🤖 **AI Trợ giảng** - Chat với AI, giải thích khái niệm, debug code
- 📝 **Đề thi thử** - Thi theo thời gian thực với timer
- 📄 **Tạo lộ trình từ PDF** - AI phân tích và tạo flashcards tự động
- 🏆 **Bảng xếp hạng** - Cạnh tranh với bạn bè
- 💬 **Nhóm chat** - Tương tác và học cùng nhau
- 🎖️ **Hệ thống thành tích** - Badges và rewards

### 👨‍🏫 Dành cho Giáo viên
- ✍️ **Soạn bài** - 4 loại câu hỏi (trắc nghiệm, đúng/sai, điền chỗ trống, tự luận)
- ✅ **Chấm bài** - Xem bài nộp, viết feedback, tự động chấm
- 👥 **Quản lý học sinh** - Theo dõi tiến độ và kết quả
- 📊 **Thống kê lớp học** - Dashboard chi tiết
- 🤖 **AI hỗ trợ** - Gợi ý câu hỏi và nội dung bài giảng

### 👑 Dành cho Quản trị viên
- 👥 **Quản lý người dùng** - CRUD users, khóa/mở tài khoản
- 📚 **Quản lý khóa học** - Xem, chỉnh sửa, xóa khóa học
- 🔑 **Tạo mã giáo viên** - Generate codes cho giáo viên đăng ký
- ⚙️ **Cấu hình hệ thống** - Settings toàn hệ thống

## 🚀 Cài đặt

### Prerequisites
- Node.js 18+ 
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone <your-repo-url>
cd edulearn-lms
```

### Bước 2: Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Bước 3: Tạo file .env
```bash
cp .env.example .env
```

Chỉnh sửa `.env` với thông tin của bạn:
```env
VITE_API_URL=http://localhost:5000/api
VITE_OPENAI_API_KEY=your_openai_key_here
```

### Bước 4: Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:5173](http://localhost:5173) trong browser.

## 🔐 Thông tin đăng nhập Demo

### Quản trị viên
```
Username: admin
Password: 1
```

### Giáo viên (cần mã code)
Mã demo: `TEACH2024`, `EDU2024`, `PROF2024`

### Học sinh
Đăng ký tự do không cần mã

## 📦 Build cho Production

```bash
npm run build
# hoặc
yarn build
```

Files build sẽ ở trong thư mục `dist/`

## 🔧 Tích hợp MERN Backend

### API Endpoints cần implement:

```javascript
// Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

// Users (Admin)
GET    /api/admin/users
PUT    /api/admin/users/:id
DELETE /api/admin/users/:id
POST   /api/admin/teacher-codes

// Courses
GET    /api/courses
POST   /api/courses
PUT    /api/courses/:id
DELETE /api/courses/:id

// Lessons
POST   /api/lessons
GET    /api/lessons/:id
PUT    /api/lessons/:id

// Submissions
POST   /api/submissions
GET    /api/submissions/:id
PUT    /api/submissions/:id/grade

// Flashcards
GET    /api/flashcards
POST   /api/flashcards
PUT    /api/flashcards/:id/review

// Chat
GET    /api/chat/groups
GET    /api/chat/messages/:groupId
POST   /api/chat/messages

// AI
POST   /api/ai/chat
POST   /api/ai/analyze-pdf
```

### Database Models

Chi tiết xem file `README_USAGE.md`

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa trong `styles/globals.css`:
```css
:root {
  --primary: #22c55e;  /* Green */
  --secondary: #3b82f6; /* Blue */
  --accent: #a855f7;    /* Purple */
}
```

### Thêm AI API Keys
Thêm trong component `AITutor.tsx` hoặc qua biến môi trường:
```typescript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

## 📁 Cấu trúc thư mục

```
edulearn-lms/
├── components/           # React components
│   ├── ui/              # UI components (shadcn/ui)
│   ├── figma/           # Figma components
│   ├── AITutor.tsx      # AI chat component
│   ├── FlashcardStudy.tsx
│   ├── ExamMode.tsx
│   └── ...
├── contexts/            # React contexts
│   └── AuthContext.tsx
├── styles/              # Global styles
│   └── globals.css
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Context API
- **Build Tool**: Vite

## 📚 Tài liệu

- [README_USAGE.md](./README_USAGE.md) - Hướng dẫn sử dụng chi tiết
- [Attributions.md](./Attributions.md) - Credits và licenses

## 🤝 Contributing

Contributions, issues và feature requests đều được chào đón!

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 💪 Roadmap

- [ ] Tích hợp WebSocket cho chat realtime
- [ ] Progressive Web App (PWA)
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Video lessons
- [ ] Live streaming classes
- [ ] Blockchain certificates

## 📧 Support

Nếu bạn thích project này, hãy cho một ⭐️!

---

Made with ❤️ and ☕
