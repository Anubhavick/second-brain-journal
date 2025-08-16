# 📁 Project Structure

This document provides a detailed overview of the Second Brain Journal project structure, making it easy for recruiters and developers to understand the codebase.

## 🏗️ Root Directory Structure

```
second-brain-journal/
├── 📁 client/                 # Frontend React application
├── 📁 server/                 # Backend Node.js/Express API
├── 📁 docs/                   # Documentation files
├── 📁 scripts/                # Build and utility scripts
├── 📄 vercel.json             # Frontend deployment configuration
├── 📄 README.md               # Main project documentation
├── 📄 DEPLOYMENT.md           # Deployment guide
├── 📄 PROJECT_STRUCTURE.md    # This file
├── 📄 .gitignore              # Git ignore rules
└── 📄 versatile-age-463908-g2-8ae820e415f9.json  # Google Cloud credentials
```

## 🎨 Frontend Structure (`/client`)

```
client/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # Reusable React components
│   │   ├── EditJournalModal.jsx
│   │   ├── JournalMenu.jsx
│   │   └── JournalModal.jsx
│   ├── 📁 contexts/           # React Context providers
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 pages/              # Page components
│   │   ├── home.jsx
│   │   └── newEntry.jsx
│   ├── 📁 services/           # API service functions
│   │   ├── journalService.js
│   │   └── summarizeService.js
│   ├── 📁 styles/             # CSS and styling files
│   │   └── index.css
│   ├── 📁 assets/             # Images, icons, etc.
│   ├── 📄 App.jsx             # Main App component
│   └── 📄 main.jsx            # React app entry point
├── 📄 package.json            # Frontend dependencies
├── 📄 vite.config.js          # Vite bundler configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 jsconfig.json           # JavaScript project configuration
├── 📄 index.html              # HTML template
├── 📄 .env                    # Environment variables (local)
└── 📄 .env.production         # Production environment variables
```

## 🔧 Backend Structure (`/server`)

```
server/
├── 📁 config/                 # Configuration files
│   └── db.js                  # Database connection
├── 📁 controllers/            # Route controllers
│   ├── journalController.js
│   └── summarizeController.js
├── 📁 middleware/             # Express middleware
│   ├── errorHandler.js
│   ├── logger.js
│   └── validateJournal.js
├── 📁 models/                 # Database models
│   └── journalModel.js
├── 📁 routes/                 # API route definitions
│   ├── journalRoutes.js
│   ├── speechToTextRoutes.js
│   ├── summarizeRoutes.js
│   └── testRoutes.js
├── 📁 tests/                  # Test files
├── 📁 uploads/                # File upload storage
├── 📁 utils/                  # Utility functions
├── 📁 validators/             # Input validation
├── 📄 server.js               # Main server file
├── 📄 speechToText.js         # Speech-to-text functionality
├── 📄 package.json            # Backend dependencies
├── 📄 .env.example            # Environment variables template
└── 📄 vercel.json             # Backend deployment configuration
```

## 🔑 Key Technologies & Patterns

### Frontend Architecture
- **Component-Based**: Modular React components for reusability
- **State Management**: React hooks and Context API
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router DOM for SPA navigation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **MVC Pattern**: Models, Views (JSON), Controllers
- **Middleware**: Custom logging, error handling, validation
- **Database**: MongoDB with Mongoose ODM
- **API Design**: RESTful endpoints with proper HTTP methods
- **File Handling**: Multer for audio file uploads

### Development Practices
- **Environment Variables**: Separate configs for dev/prod
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging
- **Validation**: Input validation and sanitization
- **CORS**: Configured for cross-origin requests

## 📊 Component Hierarchy

### Main App Flow
```
App.jsx
├── Router
│   ├── Home Page
│   │   ├── JournalMenu
│   │   ├── JournalModal (Create/Edit)
│   │   └── EditJournalModal
│   └── New Entry Page
│       ├── TinyMCE Editor
│       ├── Voice Recognition
│       └── AI Summarization
```

### API Endpoint Structure
```
/api/
├── /journals
│   ├── GET /all              # Fetch all journals
│   ├── POST /create          # Create new journal
│   ├── PUT /:id              # Update journal
│   ├── DELETE /:id           # Delete journal
│   └── GET /search?tag=      # Search by tag
├── /summarize
│   └── POST /summarize       # AI text summarization
└── /speech-to-text
    └── POST /                # Audio to text conversion
```

## 🚀 Build & Deployment

### Development Setup
1. **Frontend**: `cd client && npm install && npm run dev`
2. **Backend**: `cd server && npm install && npm run dev`

### Production Deployment
1. **Frontend**: Deployed to Vercel (static build)
2. **Backend**: Can be deployed to Vercel Functions or separate service
3. **Database**: MongoDB Atlas (cloud)
4. **External APIs**: OpenAI, Google Cloud Speech-to-Text

### Environment Configuration
- **Development**: Local `.env` files
- **Production**: Vercel environment variables
- **Database**: MongoDB Atlas connection strings
- **APIs**: Secure API key management

## 📋 Features Implementation

### Core Features
- ✅ **Rich Text Editor**: TinyMCE integration
- ✅ **Voice Input**: Browser Speech Recognition API
- ✅ **AI Summarization**: OpenAI GPT integration
- ✅ **Data Persistence**: MongoDB storage
- ✅ **Search & Filter**: Tag-based and content search
- ✅ **Responsive Design**: Mobile-friendly interface

### Technical Features
- ✅ **Error Handling**: Comprehensive error boundaries
- ✅ **Loading States**: User feedback during operations
- ✅ **Form Validation**: Client and server-side validation
- ✅ **File Upload**: Audio file handling for speech-to-text
- ✅ **API Integration**: RESTful API design
- ✅ **Build Optimization**: Code splitting and lazy loading

## 🔒 Security Considerations

- **API Keys**: Stored in environment variables
- **CORS**: Configured for specific origins
- **Input Validation**: Server-side validation
- **File Upload**: Type and size restrictions
- **Error Messages**: No sensitive information exposure

## 📈 Performance Optimizations

- **Code Splitting**: Dynamic imports for routes
- **Bundle Optimization**: Vite's build optimizations
- **Lazy Loading**: Components loaded on demand
- **Caching**: Browser caching for static assets
- **Compression**: Gzip compression enabled

This structure ensures maintainability, scalability, and easy onboarding for new developers.
