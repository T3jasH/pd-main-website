default() {
    start
}
design(){
      xdg-open $1
}
start(){
    npm run dev
}
push(){
    git add . && git commit -m $1 && git push origin $2 && gh pr create
}
"${@:-default}"