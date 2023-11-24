# Django CRUD Application

This is a Django application that demonstrates CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Create, read, update, and delete items in the application.
- Uses Django's built-in models, views, and templates for CRUD operations.
- Simple and easy-to-understand codebase.

## Requirements

- Python 3.x
- Django (install using `pip install Django`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bigkid-dev/Note-Creators-
   ```

- cd django-crud-app

2. Setup the virtual environment:
   python -m venv venv

   venv\Scripts\activate

   source venv/bin/activate

3. Install the dependency:
   pip install -r requirements.txt

   create a .env file backend_app folder where settings.py is

   add secrete key values and your discord webhook value e.g

   ```bash

   SECRET_KEY= "django-insecure-vn=acj_(j%bu%#9ll_*y(d=@@z$))g_akf_$d%x&#iqhb8ty&e"

    DISCORD_WEBHOOK="https://discord.com/api/webhooks/1147273734571114093/zb4D_QuM-B-HXQvviJtO0JbpKKarrtNNfPgeIRW1mmEmyuFiYeNemhYTk6PH03p1ucHi"


4. Run Migrations:
   python manage.py migrate

## usage

python manage.py runserver
