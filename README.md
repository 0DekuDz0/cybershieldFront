# CyberShield -- Still in Dev

CyberShield is a registration platform for hackathons. It provides an intuitive registration form for participants and an admin dashboard for managing registrations and event details.

## Features

### User Features
- **Hackathon Registration:** Users can fill out a form to register for the hackathon.
- **Animated UI:** The platform includes smooth animations using Framer Motion for an engaging user experience.

### Admin Features
- **Admin Authentication:** Only authorized admins can access the dashboard.
- **Admin Dashboard:** Admins can manage registrations, view participant data, and oversee the event.
- **JWT-based Authentication:** Secure login and session management using Django and SimpleJWT.
- **Protected Routes:** Admin pages are only accessible to authenticated admins.
- **CORS Handling:** Configured backend CORS to allow secure communication between the frontend and backend.

## Technologies Used

### Frontend
- **React (Vite)** - Fast and optimized development environment.
- **React Router** - Client-side navigation.
- **Framer Motion** - Animations for smooth UI transitions.
- **Tailwind CSS** - Styling framework for modern UI design.

### Backend
-**Backend Repo Link** - https://github.com/0DekuDz0/cybershield-backend
- **Django Rest Framework (DRF)** - API development.
- **Django SimpleJWT** - Authentication and token management.
- **CORS Headers** - Secure cross-origin requests.
- **Railway.app** - Backend hosting.

### Deployment
- **Frontend:** Hosted on Vercel.
- **Backend:** Hosted on Railway.

## Installation

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/cybershield-backend.git
   cd cybershield-backend
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run migrations and start the server:
   ```sh
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/cybershield-frontend.git
   cd cybershield-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and set up the backend API URL:
   ```sh
   VITE_BACKEND_URI=https://cybershield-backend-production.up.railway.app
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
- **`POST /api/login/`** - Authenticate admin users.
- **`GET /api/check_admin_auth/`** - Validate admin session.
- **`POST /api/register/`** - Register a participant.
- **`GET /api/participants/`** - Retrieve list of registered participants.

## Issues and Debugging
- **404 on Vercel Deployment**: Ensure that `vercel.json` is properly configured to handle rewrites.
- **CORS Issues**: Make sure `CORS_ALLOWED_ORIGINS` is set correctly in Django settings (without trailing slashes).
- **Authentication Errors**: Admin authentication is managed via JWT stored in cookies. Make sure cookies are included in fetch requests (`credentials: 'include'`).

## Future Enhancements
- **Email Notifications:** Send confirmation emails after registration.
- **Real-time Dashboard Updates:** Use WebSockets or polling for real-time data updates.
- **Multi-Role Access:** Allow different admin roles with varying levels of access.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

---

**Developed by DekuDZ** 🚀

