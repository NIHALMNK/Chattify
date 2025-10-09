# 💬 Real-Time Chat Application

A full-stack real-time messaging application built with the MERN stack, featuring instant messaging, user authentication, and online status indicators.


## ✨ Features

- 🎃 **Secure Authentication & Authorization** - JWT-based user authentication system
- 👾 **Real-Time Messaging** - Instant message delivery powered by Socket.io
- 🚀 **Online User Status** - See who's currently online in real-time
- 👌 **Global State Management** - Efficient state handling with Zustand
- 🎨 **Modern UI** - Beautiful interface built with TailwindCSS and DaisyUI
- 🐞 **Robust Error Handling** - Comprehensive error management on both client and server
- 📱 **Responsive Design** - Works seamlessly across all devices
- ☁️ **Cloud Image Storage** - Profile pictures and media handled by Cloudinary
- ⚡ **Fast & Optimized** - Built for performance and scalability

## 🛠️ Tech Stack

**Frontend:**
- React.js
- TailwindCSS (v4)
- DaisyUI
- Zustand (State Management)
- Socket.io Client

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication

**Cloud Services:**
- Cloudinary (Image Storage)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NIHALMNK/Chattify.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

#### Getting your credentials:

**MongoDB URI:**
- Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string

**JWT Secret:**
- Generate a secure random string (you can use: `openssl rand -base64 32`)

**Cloudinary Credentials:**
- Sign up at [Cloudinary](https://cloudinary.com/)
- Find your credentials in the dashboard

### 4. Build the application

```bash
npm run build
```

### 5. Start the application

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The application will be running at `http://localhost:5001`

## 📁 Project Structure

```
chat-app/
├── frontend/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── store/         # Zustand store
│   │   └── utils/         # Utility functions
│   └── public/            # Static files
├── backend/               # Backend Node.js application
│   ├── src/              
│       ├── controllers/       # Route controllers
│       ├── models/           # MongoDB models
│       ├── routes/           # API routes
│       ├── middleware/       # Custom middleware
│       └── socket/           # Socket.io configuration
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## 🔒 Authentication Flow

1. User registers with email and password
2. Password is hashed using bcrypt
3. JWT token is generated and sent to client
4. Token is stored and included in subsequent requests
5. Protected routes verify token before granting access

## 💬 Real-Time Features

- Instant message delivery using Socket.io
- Real-time online/offline status updates
- Typing indicators (if implemented)
- Message read receipts (if implemented)

## 🎨 UI Components

The application uses DaisyUI components built on top of TailwindCSS for a modern, consistent design:

- Chat bubbles
- User avatars
- Message input
- Sidebar navigation
- Modal dialogs
- Toast notifications

## 🐛 Error Handling

- Client-side error boundaries
- Server-side try-catch blocks
- Meaningful error messages
- Logging for debugging

## 🚀 Deployment

This application can be deployed for free on platforms like:

- **Frontend**: Vercel, Netlify
- **Backend**: Render, Railway, Fly.io
- **Database**: MongoDB Atlas (Free Tier)

### Deployment Steps:

1. Push your code to GitHub
2. Connect your repository to your chosen platform
3. Set environment variables in the platform dashboard
4. Deploy!

## 📝 Scripts

```bash
npm run dev          # Run development server
npm run build        # Build for production
npm start            # Start production server
npm run client       # Run only frontend
npm run server       # Run only backend
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Socket.io for real-time communication
- MongoDB for database
- Cloudinary for image storage
- TailwindCSS and DaisyUI for beautiful UI components

## 📧 Support

For support, email your-email@example.com or open an issue in the repository.

---

⭐ If you found this project helpful, please give it a star!
