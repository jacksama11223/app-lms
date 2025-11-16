# 🎓 EduLearn - Hệ thống LMS theo phong cách Duolingo

## 📋 Tổng quan

Hệ thống học tập cá nhân hóa với đầy đủ tính năng cho học sinh, giáo viên và quản trị viên.

## 🔐 Thông tin đăng nhập Demo

### Admin
- **Username**: admin
- **Password**: 1

### Giáo viên
- Cần mã code từ admin để đăng ký
- **Mã demo**: TEACH2024, EDU2024, PROF2024

### Học sinh
- Đăng ký tự do không cần mã

## ✨ Tính năng chính

### 👨‍🎓 Học sinh

1. **Lộ trình học tập (Learning Path)**
   - Nodes học tập giống Duolingo
   - Progress tracking
   - Gamification với XP, streak, levels

2. **Flashcards + Spaced Repetition**
   - Thuật toán SM-2 (SuperMemo)
   - Tự động lên lịch ôn tập
   - 3 mức độ: Dễ, Trung bình, Khó

3. **AI Trợ giảng**
   - Chat với AI (hỗ trợ OpenAI, Gemini, Claude)
   - Giải thích khái niệm
   - Debug code
   - Gợi ý học tập

4. **Đề thi thử (Exam Mode)**
   - Thi theo thời gian thực
   - Tự động chấm điểm trắc nghiệm
   - Timer đếm ngược
   - Xem kết quả ngay

5. **Tạo lộ trình từ PDF**
   - Upload PDF giáo trình
   - AI phân tích và tạo lộ trình
   - Tự động tạo flashcards
   - Lên lịch học theo số ngày

6. **Bảng xếp hạng (Leaderboard)**
   - Theo tuần và tất cả thời gian
   - Cạnh tranh với bạn bè
   - Thống kê chi tiết

7. **Nhóm chat**
   - Chat realtime
   - Nhiều nhóm khác nhau
   - Thông báo tin nhắn mới

8. **Thành tích**
   - Hệ thống badges
   - Unlock achievements
   - Reward system

### 👨‍🏫 Giáo viên

1. **Soạn bài học**
   - 4 loại câu hỏi: Trắc nghiệm, Đúng/Sai, Điền vào chỗ trống, Tự luận
   - Xem trước bài học
   - Lưu nháp
   - Xuất bản

2. **Chấm bài**
   - Danh sách bài chờ chấm
   - Xem câu trả lời học sinh
   - Đáp án mẫu
   - Viết feedback

3. **Quản lý học sinh**
   - Theo dõi tiến độ
   - Xem điểm số
   - Thống kê lớp học

4. **AI Trợ giảng**
   - Tương tự học sinh
   - Hỗ trợ soạn câu hỏi

5. **Nhóm chat**
   - Tương tác với học sinh
   - Thông báo deadline

### 👑 Quản trị viên

1. **Quản lý người dùng**
   - Xem tất cả users
   - Khóa/Mở khóa tài khoản
   - Xóa user
   - Tìm kiếm

2. **Quản lý khóa học**
   - Xem tất cả khóa học
   - Xem chi tiết nội dung
   - Chỉnh sửa/Xóa
   - Thống kê

3. **Tạo mã giáo viên**
   - Generate mã ngẫu nhiên
   - Copy to clipboard
   - Quản lý codes

4. **Cấu hình hệ thống**
   - Tên hệ thống
   - Email liên hệ
   - Thông báo

## 🚀 Cách sử dụng

### Đăng nhập
1. Mở ứng dụng
2. Chọn tab "Đăng nhập" hoặc "Đăng ký"
3. Nhập thông tin

### Học sinh
1. **Học tập cơ bản**: Chọn "Học tập" → Hoàn thành các nodes
2. **Flashcards**: Chọn "Flashcards" → Lật thẻ và chọn mức độ
3. **Thi thử**: Chọn "Đề thi thử" → Bắt đầu làm bài
4. **Upload PDF**: Chọn "Tạo từ PDF" → Upload file → Chọn số ngày

### Giáo viên
1. **Tạo bài**: Chọn "Soạn bài" → Thêm câu hỏi → Xuất bản
2. **Chấm bài**: Chọn "Chấm bài" → Chọn bài nộp → Cho điểm

### Admin
1. **Tạo mã GV**: Tab "Cài đặt" → "Tạo mã giáo viên mới"
2. **Quản lý users**: Tab "Người dùng" → Actions (...)

## 🔧 Tích hợp vào MERN Stack

### Backend cần implement:

```javascript
// Auth endpoints
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET /api/auth/me

// User management (Admin)
GET /api/admin/users
PUT /api/admin/users/:id
DELETE /api/admin/users/:id
POST /api/admin/teacher-codes

// Courses
GET /api/courses
POST /api/courses
PUT /api/courses/:id
DELETE /api/courses/:id

// Lessons
POST /api/lessons
GET /api/lessons/:id

// Submissions
POST /api/submissions
GET /api/submissions/:id
PUT /api/submissions/:id/grade

// Flashcards
GET /api/flashcards
POST /api/flashcards
PUT /api/flashcards/:id/review

// AI Integration
POST /api/ai/chat (với API key)
POST /api/ai/analyze-pdf

// Chat
GET /api/chat/groups
GET /api/chat/messages/:groupId
POST /api/chat/messages
```

### Database Models:

```javascript
// User
{
  name, email, password, role, avatar,
  streak, xp, level, joinedDate, status
}

// Course
{
  title, teacher, students[], lessons[],
  status, createdDate
}

// Lesson
{
  title, description, questions[],
  course, timeLimit, maxScore, dueDate
}

// Flashcard
{
  front, back, user, course,
  nextReview, interval, repetitions, easeFactor
}

// Submission
{
  student, lesson, answers[],
  score, feedback, submittedAt, gradedAt
}
```

## 🎨 Customization

### Màu sắc
- Primary: Green (#22c55e)
- Secondary: Blue (#3b82f6)
- Accent: Purple (#a855f7)

### Thay đổi trong `/styles/globals.css`

### API Keys
- Thêm API key trong component AITutor
- Hỗ trợ: OpenAI, Google Gemini, Anthropic Claude

## 📝 Notes

- Mock data hiện tại cho demo
- Cần thay bằng API calls thật
- Spaced repetition algorithm đã implement
- Responsive design
- TypeScript ready

## 🤝 Support

Để hỗ trợ, vui lòng liên hệ admin!
