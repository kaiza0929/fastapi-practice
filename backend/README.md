uvicorn ファイル名:FastAPIインスタンスを格納した変数名 --reload<br>
uvicorn server:app --reload<br>
FastAPIはSwaggerを標準サポートしている<br>
SwaggerはAPI開発ツール ドキュメントの自動作成やリクエストのテストなどが行える<br>
作成したAPIのSwaggerを見るには http://localhost:8000/docs<br>
sqlite3.connect()はbackendディレクトリ直下にdbファイルを作成する<br>
```
#自身と同じディレクトリに存在するdatabaseディレクトリのindex.pyからDatabaseクラスを取得
from database.index import Database
```
<br>
リクエストボディとして受け取る値の定義<br>
```
class Todo(BaseModel):
    id: str
    content: str
    date: str
```