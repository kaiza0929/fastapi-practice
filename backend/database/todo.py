import sqlite3

class TodoDatabase:

    def __init__(self):

        self.conncet = sqlite3.connect("db.sqlite", check_same_thread = False)
        self.cursor = self.conncet.cursor()
        self.cursor.execute("create table if not exists todos(id text primary key, title text, content text, date text)")
        self.cursor.execute("create table if not exists relations(todoId text, nextTodoId text)")

    def upsert(self, todo):

        try:
            self.cursor.execute("insert into todos values (?, ?, ?, ?) on conflict(id) do update set id = ? and title = ? and content = ? and date = ?", (todo.id, todo.title, todo.content, todo.date, todo.id, todo.title, todo.content, todo.date))
            self.conncet.commit()
            return todo
        except Exception as e:
            print(e)
            return None

    def read(self, keyword = None):

        try:
            #正規表現マッチと違って入力無しでlikeを使うと何も取得できない
            if keyword == None:
                self.cursor.execute("select * from todos")
            else:
                self.cursor.execute("select * from todos where content like '%?%'", (keyword))
            return self.cursor.fetchall()
        except Exception as e:
            print(e)
            return None

    def delete(self, id):

        try:
            self.cursor.execute("delete from todos where id = (?)", (id))
            self.conncet.commit()
            return id
        except Exception as e:
            print(e)
            return None
    