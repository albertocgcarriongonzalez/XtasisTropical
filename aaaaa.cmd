timeout /t 60
git add .
git commit -m "Actualizacion de menu"
git push -u origin main
timeout /t 15
ng deploy --base-href=/xtasistropical/
timeout /t 15