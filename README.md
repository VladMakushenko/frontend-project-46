# Вычислитель отличий

### Hexlet tests and linter status:
[![Actions Status](https://github.com/VladMakushenko/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VladMakushenko/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/02c860cf0ef544765d48/maintainability)](https://codeclimate.com/github/VladMakushenko/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/02c860cf0ef544765d48/test_coverage)](https://codeclimate.com/github/VladMakushenko/frontend-project-46/test_coverage)

## Описание проекта
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

## Возможности утилиты
Вывод в консоль различий между двумя файлами. Вывод доступен в следующих форматах:
- stylish **(default)**
- plain
- json

## Инструкция по установке
1. Выполнить клонирование репозитория
2. В корневой директории проекта выполнить команду **make install**

## Команды для запуска в консоли
* gendiff **file1** **file2** (или gendiff **file1** **file2** -f stylish)
* gendiff **file1** **file2** -f plain
* gendiff **file1** **file2** -f json

## Демонстрация

### Вывод данных с флагом stylish
[![asciicast](https://asciinema.org/a/iDtbEsHUHXXMhqpitSwXCeEuo.svg)](https://asciinema.org/a/iDtbEsHUHXXMhqpitSwXCeEuo)
### Вывод данных с флагом plain
[![asciicast](https://asciinema.org/a/fCrBS5Fszv5RkN151AOyb5Z3C.svg)](https://asciinema.org/a/fCrBS5Fszv5RkN151AOyb5Z3C)
### Вывод данных с флагом json
[![asciicast](https://asciinema.org/a/uGbR5z7htb5WE8tw0nhtAsbrJ.svg)](https://asciinema.org/a/uGbR5z7htb5WE8tw0nhtAsbrJ)
