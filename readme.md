# 🧠 Second Brain Journal — AI-Powered Journaling App

A modern, full-stack journaling application that helps you write, reflect, and grow. Powered by OpenAI and voice input, Second Brain Journal lets you **capture thoughts**, **summarize entries with AI**, and **track your mood and progress** over time. Built with the MERN stack, Vite, and beautiful UI components, this project is designed for productivity, insight, and personal growth.

---

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Cloud_Speech-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />
</p>

---

## ✨ Features

- 📝 **Write Journal Entries** with optional voice input
- 🔊 **Voice-to-Text** using browser speech recognition (real-time, no backend needed)
- 🎙️ **Voice-to-Text (Google Cloud)** — record audio and transcribe using Google Speech-to-Text API for higher accuracy (backend-powered)
- 🧠 **Summarize Notes with OpenAI**
- 📊 **Track Moods and Trends** using interactive charts
- 🗂️ **Search & Filter Journal Entries** by tag, date, mood
- 📱 PWA-Ready (Future scope: Android-friendly interface)
- 🔐 Local-first or auth-ready setup

---

## 🏗️ Architecture

```
[Client (React + Vite)] <-> [Express API] <-> [MongoDB]
                             |
                        [OpenAI API]
                        [Google Cloud Speech-to-Text]
```

<!-- Optionally, add a real diagram or screenshot here -->

---

## 🛠️ Tech Stack

### Frontend
- React, Vite, Tailwind CSS
- React Router DOM, Chart.js, react-chartjs-2
- React Hot Toast, React Speech Recognition
- Axios

### Backend
- Node.js, Express
- MongoDB, Mongoose
- OpenAI API
- Google Cloud Speech-to-Text API
- dotenv, CORS, multer

---

## 🚀 Demo

<!-- Add screenshots or a GIF here -->

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB URI (local or Atlas)
- OpenAI API Key ([Get one here](https://platform.openai.com/))
- (Optional, for backend voice-to-text) Google Cloud account and Speech-to-Text API enabled

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/second-brain-journal.git
cd second-brain-journal
```

### 2. Setup Backend (Server)

```bash
cd server
npm install
# Add .env file
touch .env
```

**.env contents:**
```
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
PORT=5000
GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/your/service-account-file.json
```

#### Google Cloud Speech-to-Text Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and enable the Speech-to-Text API.
3. Create a Service Account and download the JSON key file.
4. Place the JSON file somewhere safe (e.g., in your `server` directory, but **never commit it to git**).
5. Set the `GOOGLE_APPLICATION_CREDENTIALS` variable in your `.env` to the absolute path of your JSON file.
6. Install dependencies:
   ```bash
   npm install @google-cloud/speech multer
   ```

```bash
npm run dev
```

### 3. Setup Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📦 Installed Dependencies

### Frontend
```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "vite": "^5.x",
  "axios": "^1.10.0",
  "react-router-dom": "^7.6.2",
  "tailwindcss": "^4.1.10",
  "chart.js": "^4.5.0",
  "react-chartjs-2": "^5.3.0",
  "react-hot-toast": "^2.5.2",
  "classnames": "^2.5.1",
  "react-speech-recognition": "^4.0.1"
}
```

### Backend
```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.6.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "openai": "^4.38.0",
  "@google-cloud/speech": "^6.4.0",
  "multer": "^1.4.5"
}
```

---

## 📚 API Endpoints (Sample)

- `POST /api/journals` — Create a new journal entry
- `GET /api/journals` — List all entries
- `GET /api/journals/:id` — Get entry by ID
- `POST /api/summarize` — Summarize text with OpenAI
- `POST /api/speech-to-text` — Transcribe uploaded audio file using Google Speech-to-Text

---

## 🗣️ Voice-to-Text Usage

- **Real-time (Browser):** Click the mic button while writing a journal entry to use your browser's built-in speech recognition (works best in Chrome/Edge).
- **Backend (Google Cloud):** If you want higher accuracy or your browser doesn't support real-time speech recognition, the app can record your voice and send it to the backend, which uses Google Cloud Speech-to-Text. Make sure you have set up your Google Cloud credentials as described above.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

Made with ❤️ by [Anubhav Mishra]

- [LinkedIn](https://www.linkedin.com/in/anubhavick/)
- [GitHub](https://github.com/anubhavick)

---

## 📃 License

MIT License

---

> This journal isn't just a diary — it's a second brain. Capture your thoughts, summarize them intelligently, and track how you grow over time.

