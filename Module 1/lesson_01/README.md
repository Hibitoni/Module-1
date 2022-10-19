# git-config

Базовые настройки:
    git config --global user.name “имя”
    git config --global user.email “почта”

    git config --global core.safecrlf warn
    git config --global core.quotepath off
    git config --global core.autocrlf true
    it config --global init.defaultBranch main # Ветка по умолчанию
---

Основные команды для гита:
git init                                #Инициализация git репозитория
git add .                               #Добавить все файлы из корня в трек
git commit -m "сообщение"               #Выполнить коммит (сделать слепок) текущего состояния проекта
git status                              #Текущее состояние репозитория
git log --oneline                       #Посмотреть историю коммитов
git diff                                ### показывает изменения
git diff --color-words                  #Показывает по строкам изменения
git checkout .                          #Oткатить изменения у всех файлов трека
git checkout name.file                  #Oткатить изменения в одном файле или каталоге
---