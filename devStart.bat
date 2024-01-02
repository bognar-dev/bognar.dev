
rem
echo Starting Docker Desktop...
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"

rem 
timeout /t 10

rem 
echo Starting Supabase...
cd C:\Users\Niklas\Documents\Uni23_24\WEB\bognar.dev-portfolio\app
start npx supabase start

rem
timeout /t 10



rem
echo Starting Go application...
cd C:\Users\Niklas\Documents\Uni23_24\WEB\bognar.dev-backend\
start cmd /k "go run main.go"


rem 
echo Starting Next.js development server...
start cmd /k "cd C:\Users\Niklas\Documents\Uni23_24\WEB\bognar.dev-portfolio && pnpm run dev"
