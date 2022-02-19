default() {
    start
}
design(){
      xdg-open "https://www.figma.com/file/TMvViBcFAuz5AROUzLCFKt/prodevans-main-site?node-id=0%3A1"
}
start(){
    docker start pddb
    npm run dev
}
push(){
    git add . && git commit -m $1 && git push origin $2 && gh pr create
}
"${@:-default}"