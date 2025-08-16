# 🧠 Second Brain Journal — AI-Powered Journaling App

A modern, full-stack journaling application that helps you write, reflect, and grow. Powered by OpenAI and voice input, Second Brain Journal lets you **capture thoughts**, **summarize entries with AI**, and **track your mood and progress** over time. Built with the MERN stack, Vite, and beautiful UI components, this project is designed for productivity, insight, and personal growth.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://your-app-name.vercel.app](https://your-app-name.vercel.app)
- **Backend API:** [https://your-backend-api.vercel.app](https://your-backend-api.vercel.app)

---

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## ✨ Features

- 📝 **Rich Text Editor** with TinyMCE for beautiful journal entries
- 🔊 **Voice-to-Text** using browser speech recognition (real-time)
- 🎙️ **Advanced Voice Processing** with Google Cloud Speech-to-Text API
- 🧠 **AI-Powered Summarization** using OpenAI GPT
- 📊 **Mood Tracking & Analytics** with interactive charts
- � **Smart Search & Filtering** by tags, date, mood, and content
- 📱 **Responsive Design** optimized for desktop and mobile
- ⚡ **Fast Performance** with Vite bundler and optimized React
- 🌐 **Production Ready** with Vercel deployment configuration

---

## 🏗️ Architecture

```
[React Frontend (Vite)] <-> [Express.js API] <-> [MongoDB Atlas]
         |                        |
    [TinyMCE Editor]         [OpenAI API]
    [Speech Recognition]     [Google Cloud Speech]
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite for lightning-fast development
- **Tailwind CSS 4** for modern, responsive styling
- **React Router DOM 7** for seamless navigation
- **Chart.js** with React wrapper for data visualization
- **TinyMCE** for rich text editing
- **Axios** for API communication
- **React Hot Toast** for elegant notifications

### Backend
- **Node.js** with **Express.js** framework
- **MongoDB** with **Mongoose** ODM
- **OpenAI API** for intelligent text summarization
- **Google Cloud Speech-to-Text** for accurate voice transcription
- **Multer** for file upload handling
- **CORS** for cross-origin requests

### DevOps & Deployment
- **Vercel** for both frontend and serverless backend deployment
- **Environment-based configuration** for development/production
- **Git-based deployment** with automatic builds

---

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/Anubhavick/second-brain-journal.git
cd second-brain-journal

# Setup Backend
cd server
npm install
cp .env.example .env
# Add your MongoDB URI, OpenAI API key, etc. to .env
npm run dev

# Setup Frontend (in a new terminal)
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Production Deployment

This project is configured for easy deployment on Vercel:

1. **Deploy Frontend**: 
   - Push to GitHub and connect to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy automatically with every push

2. **Deploy Backend**: 
   - Deploy server separately or use Vercel Functions
   - Update `VITE_API_URL` in frontend environment variables

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📁 Project Structure

```
second-brain-journal/
├── client/          # React frontend (Vite + Tailwind)
├── server/          # Express.js backend API
├── docs/            # Documentation
└── scripts/         # Build utilities
```

For detailed structure information, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

---

## 🎯 For Recruiters

This project demonstrates:

- **Full-Stack Development**: MERN stack with modern tools
- **API Integration**: OpenAI and Google Cloud services
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Production Ready**: Proper deployment configuration
- **Clean Code**: Well-structured, documented codebase
- **Modern Practices**: React hooks, async/await, ES6+

### Key Technical Skills Showcased

#### Frontend
- React 19 with functional components and hooks
- Modern build tools (Vite) for fast development
- Tailwind CSS for responsive, utility-first styling
- React Router for SPA navigation
- Axios for API communication
- Chart.js for data visualization

#### Backend
- Node.js and Express.js for REST API
- MongoDB with Mongoose for data persistence
- External API integration (OpenAI, Google Cloud)
- File upload handling with Multer
- Proper error handling and middleware

#### DevOps & Deployment
- Environment-based configuration
- Vercel deployment setup
- Git workflow and version control
- Documentation and code organization

---

## � Demo & Screenshots

<!-- Add screenshots or GIF demos here -->

---

## ⚙️ Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:7001
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

### Backend (.env)
```env
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=7001
GOOGLE_APPLICATION_CREDENTIALS=./path/to/service-account.json
```

---

## � API Documentation

### Journal Endpoints
- `GET /api/journals/all` - Fetch all journal entries
- `POST /api/journals/create` - Create a new entry
- `PUT /api/journals/:id` - Update an entry
- `DELETE /api/journals/:id` - Delete an entry
- `GET /api/journals/search?tag=` - Search by tag

### AI & Speech Endpoints
- `POST /api/summarize/summarize` - Summarize text with AI
- `POST /api/speech-to-text/` - Convert audio to text

---

## �️ Development Commands

### Frontend Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend Commands
```bash
npm run dev        # Start with nodemon
npm start          # Start production server
npm test           # Run tests
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📱 Future Enhancements

- [ ] User authentication and authorization
- [ ] PWA support for mobile app experience
- [ ] Real-time collaboration features
- [ ] Advanced analytics and insights
- [ ] Export functionality (PDF, Markdown)
- [ ] Dark/light theme toggle
- [ ] Multi-language support
- [ ] Offline functionality with service workers

---

## 🐛 Troubleshooting

### Common Issues

**Build fails on Vercel:**
- Check that all environment variables are set
- Ensure Node.js version compatibility
- Verify all dependencies are in package.json

**API calls failing:**
- Check CORS configuration
- Verify API URLs in environment variables
- Ensure backend is deployed and accessible

**Database connection issues:**
- Verify MongoDB Atlas connection string
- Check network access and IP whitelist
- Ensure database user has proper permissions

For more help, see [DEPLOYMENT.md](./DEPLOYMENT.md) or create an issue.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## �‍💻 Author

**Anubhav Mishra**
- 🌐 Portfolio: [anubhavmishra.dev](https://anubhavmishra.dev)
- 💼 LinkedIn: [linkedin.com/in/anubhavick](https://www.linkedin.com/in/anubhavick/)
- 🐙 GitHub: [github.com/Anubhavick](https://github.com/Anubhavick)
- 📧 Email: anubhav.mishra@example.com

---

## 🌟 Acknowledgments

- OpenAI for the GPT API
- Google Cloud for Speech-to-Text services
- TinyMCE for the rich text editor
- Vercel for hosting and deployment
- MongoDB Atlas for database services

---

> **"Your thoughts are worth remembering. Make them count with Second Brain Journal."**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Anubhavick/second-brain-journal)


