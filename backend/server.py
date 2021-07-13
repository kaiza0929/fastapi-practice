from fastapi import FastAPI
import sqlite3

app = FastAPI()
connect = sqlite3.connect("db.sqlite")

@app.get("/")
async def hello():
    return {"message": "ok"}