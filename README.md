React(MaterialUI) + FastAPI<br>
テンプレートブランチは中身がないやつ<br>
sudo sysctl fs.inotify.max_user_watches=50000<br>
frontendディレクトリの中身をgitで参照できない => フロントエンドディレクトリを１つのファイルとして認識してしまっている<br>
解決方法<br>
git rm -rf --cached frontend<br>
git add frontend<br>