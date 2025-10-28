```md
# 🏫 School Management App

School Management App هو تطبيق بسيط لإدارة بيانات الطلاب
يستخدم **FastAPI** للـ Backend و **HTML + CSS + JavaScript** للـ Frontend  
هدفه عرض، إضافة، تعديل، وحذف الطلاب بشكل سلس وسريع ✅

---

## 🚀 Features
- ✅ عرض كل الطلاب في جدول
- ➕ إضافة طالب جديد
- ✏️ تعديل بيانات طالب
- ❌ حذف طالب
- 🔁 تحديث تلقائي للواجهة عند تغيّر البيانات
- 🌐 يدعم CORS للاتصال مع الواجهة الأمامية

---

## 🧩 Tech Stack

| الجزء | التكنولوجيا |
|------|-------------|
| Backend API | FastAPI |
| Data Model | Pydantic |
| Frontend | HTML, CSS, JavaScript |
| HTTP Requests | Fetch API |
| Local Storage | Python List |

````

---

## ⚙️ Installation & Run

### ✅ Backend (FastAPI)
1. فعّل البيئة
```bash
uvicorn main:app --reload
````

2. افتح الـ Docs للتجربة:

```
http://127.0.0.1:8000/docs
```

---

### 🎯 Frontend

افتح الملف:

```
frontend/index.html
```

وتأكد إن الـ Backend شغال ✅

---

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/students`      | عرض جميع الطلاب   |
| POST   | `/students`      | إضافة طالب        |
| PUT    | `/students/{id}` | تعديل بيانات طالب |
| DELETE | `/students/{id}` | حذف طالب          |

📌 مثال على JSON

```json
{
  "id": 10,
  "name": "Omar",
  "grade": 4
}
```

---

## 🛠 Fixes Applied

* ✅ تم تصحيح Typo في CORS:
  `allow_credentials=True`
* ✅ إصلاح خطأ في الـ PUT API عند استخدام:
  `students[idx] = updated_student`

---

## ✅ Future Improvements

* 🔐 تسجيل دخول وصلاحيات (Admins & Teachers)
* 🗄 قاعدة بيانات فعلية (PostgreSQL / MongoDB)
* 🎨 تحسين الواجهة بـ React أو Tailwind
* 📊 Dashboard متقدم يعرض إحصائيات الطلاب

---

## 👨‍💻 Developer

**Ahmed Amer | Triple AI**
Passionate Machine Learning Engineer

---

## ⭐ Show Support!

لو عجبك المشروع متنساش:

* ⭐ Star
* 🪄 Fork
* 💬 Suggestions
