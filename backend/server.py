from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.todo import TodoDatabase
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

todoDatabase = TodoDatabase()

class Todo(BaseModel):
    id: str
    title: str
    content: str
    date: str

@app.get("/api/todo")
def getTodos():
    todos = []
    for todo in todoDatabase.read():
        todos.append({"id": todo[0], "title": todo[1], "content": todo[2], "date": todo[3]})
    print(todos)
    return {"todos": todos}

@app.post("/api/todo")
def upsertTdo(todo: Todo):
    return {"todo": todoDatabase.upsert(todo)}

@app.delete("/api/todo")
def deleteTodo(id: str):
    return {"id": todoDatabase.delete(id)}