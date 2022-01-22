default() {
    start
}
design(){
      xdg-open "https://www.figma.com/file/TMvViBcFAuz5AROUzLCFKt/prodevans-main-site?node-id=108%3A878"
}
start(){
    npm run dev
}
"${@:-default}"