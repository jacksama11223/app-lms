# 🚀 Quick Start Guide

## Cài đặt và chạy trong 3 phút!

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

### 3. Mở browser
```
http://localhost:5173
```

## 🔑 Đăng nhập Demo

### Admin (Full Access)
- Username: `admin`
- Password: `1`

### Giáo viên (Cần mã code)
1. Click tab "Đăng ký"
2. Chọn vai trò "Giáo viên"
3. Nhập mã: `TEACH2024` hoặc `EDU2024` hoặc `PROF2024`

### Học sinh (Tự do)
1. Click tab "Đăng ký"
2. Chọn vai trò "Học sinh"
3. Điền form và đăng ký

## ✨ Tính năng để thử

### Học sinh
1. **Learning Path** - Xem lộ trình học tập với nodes
2. **Flashcards** - Menu "Flashcards" → Lật thẻ và chọn mức độ
3. **AI Trợ giảng** - Menu "AI Trợ giảng" → Chat với AI
4. **Đề thi thử** - Menu "Đề thi thử" → Làm bài thi
5. **Upload PDF** - Menu "Tạo từ PDF" → Upload file PDF

### Giáo viên
1. **Soạn bài** - Menu "Soạn bài" → Thêm câu hỏi
2. **Chấm bài** - Menu "Chấm bài" → Chọn bài và chấm điểm

### Admin
- Tự động vào dashboard admin khi đăng nhập
- Xem tất cả users và courses
- Tạo mã giáo viên mới

## 🎯 Tips

### Tính năng đăng xuất
Nút "Đăng xuất" nằm ở sidebar phía dưới thông tin user.

### Chuyển đổi tài khoản
Để thử các role khác nhau, chỉ cần:
1. Đăng xuất
2. Đăng nhập với tài khoản khác

### AI Features
- AI Tutor hiện dùng mock responses
- Để dùng AI thật, thêm API key trong component `AITutor.tsx`
- Hoặc set biến môi trường `VITE_OPENAI_API_KEY`

### PDF Upload
- Tính năng này mô phỏng AI phân tích PDF
- Trong production, cần integrate với backend để xử lý file thật

## 🔧 Tích hợp Backend

Để kết nối với MERN backend:

1. Tạo file `.env`:
```bash
cp .env.example .env
```

2. Cấu hình URL backend:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Thay thế mock data trong:
- `contexts/AuthContext.tsx` - Gọi API login/register thật
- Các components khác - Fetch data từ backend

## 📚 Documentation

- [README.md](./README.md) - Documentation đầy đủ
- [README_USAGE.md](./README_USAGE.md) - Hướng dẫn chi tiết tính năng

## 🐛 Troubleshooting

### Port đã được sử dụng
```bash
# Thay đổi port trong vite.config.ts
export default defineConfig({
  server: { port: 3000 }
})
```

### Dependencies error
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
# Clear cache và build lại
npm run build -- --force
```

## 🎉 Enjoy!

Bây giờ bạn có thể khám phá tất cả tính năng của EduLearn!

Happy coding! 🚀
