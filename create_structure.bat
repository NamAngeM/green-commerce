@echo off
cd /d "%~dp0"

:: Créer les sous-dossiers manquants
mkdir public\images\products
mkdir src\components\Layout
mkdir src\contexts
mkdir src\data
mkdir src\pages
mkdir src\styles

:: Créer les fichiers uniquement s'ils n'existent pas
call :createFile public\images\logo.png
call :createFile src\components\Layout\Header.js
call :createFile src\components\Layout\Footer.js
call :createFile src\components\Layout\Layout.js
call :createFile src\components\ProductCard.js
call :createFile src\components\ProductList.js
call :createFile src\components\CartItem.js
call :createFile src\components\ContactForm.js
call :createFile src\contexts\CartContext.js
call :createFile src\data\products.js
call :createFile src\pages\index.js
call :createFile src\pages\boutique.js
call :createFile src\pages\panier.js
call :createFile src\pages\contact.js
call :createFile src\pages\_app.js
call :createFile src\pages\_document.js
call :createFile src\styles\globals.css
call :createFile src\styles\Home.module.css

echo ✅ Fichiers et dossiers créés avec succès.
pause
exit /b

:createFile
if not exist "%~1" (
    echo. > "%~1"
)
exit /b
