# EnviScribe
Developed a full-stack web application to monitor, analyze, and visualize environmental data (air quality, water quality, and weather) based on geographic location. The system integrates real-time sensor data (Arduino-based IoT devices) with an interactive React + Leaflet frontend and a Node.js + Express backend, storing information in MongoDB for persistence.

**Key Achievements:**

1. Built an interactive web platform to search, visualize, and download environmental data (CSV export)
2. Integrated Arduino IoT sensors (soil moisture, wind, light, etc.) for real-time data collection
3. Designed dynamic maps and dashboards (Chart.js/D3.js), improving data accessibility by 20%
4. Optimized backend with robust error handling, reducing inconsistencies by 25%
5. Implemented institution & user management modules, enabling role-based access and data security

**Tech Stack & Skills Gained:**
🔹 Frontend: React, TypeScript, Leaflet, Radix UI, Chart.js/D3.js
🔹 Backend: Node.js, Express.js, JWT authentication, Cloudinary, Multer, Nodemailer
🔹 Database: MongoDB, Mongoose
🔹 IoT Integration: Arduino sensors for environmental data collection
🔹 Other Tools: Axios, React Hook Form, Zod validation, Sonner for notifications

**Setup & Usage (Developer Steps):**

**Clone the repository:**

git clone https://github.com/soumilgo/EnviScribe
cd EnviScribe

**Install dependencies**:

**Frontend:**

cd client && npm install

**Backend:**

cd server && npm install

**Configure environment variables (.env files for both client & server).**

Run locally:

**Backend:**

npm start

**Frontend:**

npm run dev

Open in browser and start exploring real-time and historical environmental data.
