from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Table(BaseModel):
    id: int
    capacity: int
    status: str  # 'free', 'occupied', 'reserved'

class Booking(BaseModel):
    id: Optional[int] = None
    customer_name: str
    guests: int
    time: Optional[str] = None
    type: str  # 'queue' or 'reservation'
    status: str = 'active'
    created_at: datetime = datetime.now()

class RestaurantStatus(BaseModel):
    total_tables: int
    free_tables: int
    queue_count: int
    estimated_wait_time: int
