# LuxEat Intelligence | AI-Powered Dining Concierge

LuxEat is an ultra-premium, AI-driven restaurant management ecosystem designed to eliminate dining friction. By combining a sophisticated, Gemini-powered customer concierge with a real-time staff analytics portal, LuxEat transforms wait-line management into a seamless, high-end experience.

## ✨ Core Features

### 🤖 Lux Concierge (Customer Portal)
*   **Gemini 1.5 Intelligence**: Powered by Google Gemini and LangChain, our digital concierge handles natural language inquiries with sophistication and flair.
*   **Seamless Reservations**: Capture guest details, party size, and arrival times through an elegant conversational interface.
*   **Virtual Queueing**: Allow guests to join the queue remotely and receive real-time updates on their position.
*   **Instant Insights**: Immediate feedback on current table availability and estimated wait times.

### 🏛️ Staff Intelligence Portal (Admin Dashboard)
*   **Table Inventory**: Real-time visualization of floor capacity (Occupied vs. Free).
*   **Live Queue Management**: Proactively manage waiting guests.
*   **Proactive Wait-Time Control**: Agents can manually adjust the global estimated wait time based on kitchen surge or floor conditions.
*   **Assign & Clear**: Instant 'Assign Table' functionality that clears guests from the queue once seated.
*   **Intelligence Insights**: Automated tracking of peak hours and efficiency metrics.

## 🛠️ Technical Stack

*   **Backend**: FastAPI (Python)
*   **AI Orchestration**: LangChain + Google Generative AI (Gemini 1.5 Flash)
*   **Frontend**: Vanilla JavaScript (Async/Await), HTML5, CSS3 (Glassmorphism & High-end Dark Theme)
*   **Data Capture**: Structured state-machine logic for reservations combined with LLM for natural inquiries.

## 🚀 Getting Started

### Prerequisites
*   Python 3.9+
*   Google API Key (for Gemini)

### Installation
1.  Clone the repository and navigate to the project directory.
2.  Install dependencies:
    ```bash
    pip install fastapi uvicorn langchain-google-genai python-dotenv
    ```
3.  Configure your environment in a `.env` file:
    ```bash
    GOOGLE_API_KEY=your_gemini_api_key_here
    ```

### Execution
Start the LuxEat server:
```bash
python main.py
```
*   **Customer View**: `http://127.0.0.1:8000`
*   **Staff View**: `http://127.0.0.1:8000/admin.html`

## 🎨 Design Philosophy
LuxEat follows a **Luxury-Dark** design system, utilizing curated gold accents (`#d4af37`), glassmorphism effects, and premium serif typography. The interface is purposefully built to feel like an extension of a five-star hospitality service.

---
*Created with elegance by LuxEat Intelligence Systems.*
