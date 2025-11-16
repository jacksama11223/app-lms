import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './components/LoginPage';
import { DuolingoSidebar } from './components/DuolingoSidebar';
import { LearningPath } from './components/LearningPath';
import { Leaderboard } from './components/Leaderboard';
import { ChatGroups } from './components/ChatGroups';
import { TeacherCreateLesson } from './components/TeacherCreateLesson';
import { TeacherGrading } from './components/TeacherGrading';
import { StudentDashboard } from './components/StudentDashboard';
import { FlashcardStudy } from './components/FlashcardStudy';
import { AITutor } from './components/AITutor';
import { ExamMode } from './components/ExamMode';
import { PDFUpload } from './components/PDFUpload';
import { AdminDashboard } from './components/AdminDashboard';
import { useState } from 'react';

function MainApp() {
  const { user, isAuthenticated } = useAuth();
  const [activeItem, setActiveItem] = useState('learn');

  if (!isAuthenticated || !user) {
    return <LoginPage onSuccess={() => {}} />;
  }

  // Admin Dashboard
  if (user.role === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <main className="p-8">
          <AdminDashboard />
        </main>
      </div>
    );
  }

  const renderContent = () => {
    // Student views
    if (user.role === 'student') {
      switch (activeItem) {
        case 'learn':
          return (
            <div>
              <div className="mb-8">
                <h1 className="text-4xl text-gray-900 mb-2">Lộ trình học tập của bạn</h1>
                <p className="text-gray-600">Tiếp tục hành trình chinh phục kiến thức! 🚀</p>
              </div>
              <LearningPath />
            </div>
          );
        case 'practice':
          return <StudentDashboard />;
        case 'flashcards':
          return <FlashcardStudy />;
        case 'ai-tutor':
          return <AITutor />;
        case 'exam':
          return <ExamMode />;
        case 'pdf-upload':
          return <PDFUpload />;
        case 'leaderboard':
          return <Leaderboard />;
        case 'chat':
          return <ChatGroups />;
        case 'achievements':
          return (
            <div className="max-w-6xl mx-auto text-center py-16">
              <div className="text-8xl mb-4">🏆</div>
              <h1 className="text-4xl text-gray-900 mb-4">Thành tích của bạn</h1>
              <p className="text-gray-600 mb-8">
                Bạn đã mở khóa 12/25 thành tích! Hãy tiếp tục học tập để nhận thêm phần thưởng.
              </p>
              <div className="grid grid-cols-5 gap-6 max-w-4xl mx-auto">
                {[...Array(25)].map((_, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-3xl border-2 ${
                      idx < 12
                        ? 'border-yellow-300 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50 opacity-40'
                    }`}
                  >
                    <div className="text-6xl mb-2">
                      {idx < 12 ? ['🔥', '⚡', '🎯', '🌟', '👑', '💎', '🚀', '🎨', '🏅', '🎓', '💪', '🌈'][idx] : '🔒'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'profile':
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-6xl">👨‍🎓</span>
                </div>
                <h1 className="text-4xl text-gray-900 mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-4">Học viên tích cực | Level 12</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-orange-600 font-bold">🔥 15 ngày liên tiếp</span>
                  </div>
                  <div className="bg-green-100 px-4 py-2 rounded-full">
                    <span className="text-green-600 font-bold">⚡ 2,450 XP</span>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return <StudentDashboard />;
      }
    }

    // Teacher views
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl text-gray-900 mb-2">Tổng quan giảng dạy</h1>
              <p className="text-gray-600">Quản lý lớp học và theo dõi tiến độ học sinh</p>
            </div>
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Tổng học sinh', value: '156', icon: '👥', color: 'from-blue-500 to-blue-600' },
                { title: 'Bài học đã tạo', value: '24', icon: '📚', color: 'from-green-500 to-green-600' },
                { title: 'Bài chờ chấm', value: '12', icon: '📝', color: 'from-orange-500 to-orange-600' },
                { title: 'Điểm TB lớp', value: '8.5', icon: '⭐', color: 'from-purple-500 to-purple-600' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Chào mừng giáo viên! 👨‍🏫</h2>
              <p className="text-green-100 mb-6">
                Bạn đang quản lý 3 lớp học với 156 học sinh. Hãy tiếp tục truyền cảm hứng và chia sẻ kiến thức!
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveItem('create-lesson')}
                  className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors"
                >
                  Tạo bài học mới
                </button>
                <button
                  onClick={() => setActiveItem('grading')}
                  className="bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors"
                >
                  Chấm bài
                </button>
              </div>
            </div>
          </div>
        );
      case 'create-lesson':
        return <TeacherCreateLesson />;
      case 'grading':
        return <TeacherGrading />;
      case 'ai-tutor':
        return <AITutor />;
      case 'assignments':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl text-gray-900 mb-2">Quản lý bài tập</h1>
              <p className="text-gray-600">Xem và chỉnh sửa các bài tập đã tạo</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'React Hooks - Bài tập thực hành', class: 'Lớp React Nâng Cao', due: '20/11/2025', submissions: '35/45' },
                { title: 'Data Science - Phân tích dữ liệu', class: 'Lớp Data Science', due: '22/11/2025', submissions: '28/32' },
                { title: 'UI/UX - Thiết kế wireframe', class: 'Lớp UI/UX Design', due: '25/11/2025', submissions: '42/45' },
                { title: 'Python - Xử lý file và exception', class: 'Lớp Python Cơ Bản', due: '28/11/2025', submissions: '25/34' },
              ].map((assignment, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{assignment.title}</h3>
                      <p className="text-sm text-gray-600">{assignment.class}</p>
                    </div>
                    <span className="text-3xl">📝</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hạn nộp:</span>
                      <span className="font-medium text-gray-900">{assignment.due}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Đã nộp:</span>
                      <span className="font-medium text-green-600">{assignment.submissions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'students':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl text-gray-900 mb-2">Quản lý học sinh</h1>
              <p className="text-gray-600">Theo dõi tiến độ và kết quả học tập</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[...Array(9)].map((_, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      {['👨‍🎓', '👩‍🎓', '👨‍💻', '👩‍💻', '🧑‍🎓'][idx % 5]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Học sinh {idx + 1}</h3>
                      <p className="text-sm text-gray-600">Lớp React</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tiến độ:</span>
                      <span className="font-medium text-green-600">{Math.floor(Math.random() * 30 + 60)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Điểm TB:</span>
                      <span className="font-medium text-blue-600">{(Math.random() * 2 + 7).toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'chat':
        return <ChatGroups />;
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <DuolingoSidebar
        activeItem={activeItem}
        onItemClick={setActiveItem}
        userRole={user.role as 'student' | 'teacher'}
        onRoleSwitch={() => {}}
      />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
