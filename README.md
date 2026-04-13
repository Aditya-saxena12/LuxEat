# LuxEat 🍽️
### Exquisite Dining Queue & Reservations Management System

LuxEat is a high-fidelity, dual-interface platform designed for luxury restaurants to manage bookings and virtual queues efficiently. It features a sophisticated AI-style chatbot concierge and a comprehensive staff administrative portal, all wrapped in a lavish, premium aesthetic.

![LuxEat Banner](https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80) 
*(Note: Replace with your own project screenshots)*

---

## ✨ Features

### 👤 Customer Experience (Chatbot)
- **Lux Concierge**: An elegant digital assistant that identifies guests by name and manages their dining needs.
- **Smart Queue & Booking**: Join the virtual queue or make a priority reservation with real-time feedback.
- **Time Intelligence**: Automatically validates reservation requests against restaurant operating hours (10:00 AM - 11:00 PM). Provides proactive denial for "Bad Time Requests".
- **Dynamic Stats**: Displays real-time randomized "Tables Free" and "Estimated Wait Time" to simulate a bustling environment.

### 🏢 Staff Experience (Admin Portal)
- **Live Table Grid**: Track 25+ tables with real-time occupancy status (Free vs. Occupied).
- **Persistent Bridge**: Chatbot reservations automatically reflect at the top of the staff queue with a gold highlighted `#BOT` prefix.
- **Unique Intelligence**: Dynamically generates unique waiting lists on every refresh using a pool of diverse Indian names.
- **Insights**: Provides staff with resource optimization tips and peak hour predictions.

### 🎨 Design & Aesthetics
- **Lavish UI**: A curated color palette of **Burnished Gold (#D4AF37)** and **Rich Charcoal (#0F0F0F)**.
- **High-End Visuals**: Features high-fidelity 5-star hotel interior backgrounds and glassmorphism effects.
- **Responsive Experience**: Fluid transitions and centered confirmation popups for a premium feel.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6)
- **Backend**: Python (FastAPI)
- **Styling**: Modern CSS Grid/Flexbox, Custom Animations
- **Persistence**: Browser LocalStorage for high-speed client-side data sync

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- FastAPI & Uvicorn

```bash
pip install fastapi uvicorn
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/LuxEat.git
   cd LuxEat
   ```
2. Run the backend server:
   ```bash
   python main.py
   ```
3. Access the interfaces:
   - **Customer Portal**: `http://127.0.0.1:8000/`
   - **Staff Dashboard**: `http://127.0.0.1:8000/admin.html`

---

## 📂 Folder Structure

```text
LuxEat/
├── index.html          # Main Customer Landing Page
├── admin.html          # Staff Management Portal
├── style.css           # Global Luxury Design System
├── script.js           # Chatbot & Front-end Logic
├── main.py             # FastAPI Server & API Endpoints
├── models.py           # Pydantic Data Models
├── luxeat_interior.png # Asset: Luxury Background
└── README.md           # Documentation
```

---

## 📍 Location
**Sector 18, Noida, Uttar Pradesh, India - 201301**  
*Hours: 10:00 AM - 11:00 PM*

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ as a premium dining solution.
