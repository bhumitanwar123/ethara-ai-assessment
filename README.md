# Crime Category Prediction Web Application

## Project Overview
This is a full-stack web application developed as part of a technical assessment. The application predicts the category of a crime based on user input and demonstrates complete frontend–backend integration.

The project focuses on clean API design, input validation, error handling, and deployment readiness rather than model complexity.

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python, Flask

## Features
- User-friendly interface
- Backend API for prediction
- Error handling
- End-to-end working application

## How to Run
1. Go to backend folder
2. Run:
   python -m pip install -r requirements.txt
   python app.py
3. Open frontend/index.html in browser

## API Example
POST /predict
Request:
{
  "severity": 8
}
Response:
{
  "prediction": "Violent Crime"
}

