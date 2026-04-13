from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from models import Table, Booking, RestaurantStatus
import random
import os

app = FastAPI(title="LuxEat Intelligence API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Data
TABLES = [
    Table(id=i, capacity=2 if i < 10 else 4 if i < 20 else 8, status="free")
    for i in range(1, 26)
]
QUEUE = []
RESERVATIONS = []

@app.get("/status", response_model=RestaurantStatus)
async def get_status():
    free = len([t for t in TABLES if t.status == "free"])
    queue_len = len(QUEUE)
    wait_time = (queue_len * 10) // max(1, free)
    
    return RestaurantStatus(
        total_tables=len(TABLES),
        free_tables=free,
        queue_count=queue_len,
        estimated_wait_time=max(5, wait_time)
    )

@app.post("/bookings/queue")
async def join_queue(booking: Booking):
    booking.id = len(QUEUE) + 1
    booking.type = "queue"
    QUEUE.append(booking)
    return {"message": "Added to queue", "position": len(QUEUE), "est_wait": (len(QUEUE) * 10)}

@app.post("/bookings/reserve")
async def create_reservation(booking: Booking):
    booking.id = len(RESERVATIONS) + 1
    booking.type = "reservation"
    RESERVATIONS.append(booking)
    return {"message": "Reservation confirmed", "id": booking.id}

@app.get("/admin/insights")
async def get_insights():
    return {
        "peak_hours": "19:00 - 21:00",
        "avg_stay_duration": "75 mins",
        "queue_efficiency": "92%",
        "crowd_status": "Moderately Busy" if len(QUEUE) < 5 else "High Demand"
    }

# Serve static files (index.html, style.css, etc.)
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
