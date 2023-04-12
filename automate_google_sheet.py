import streamlit as st
import pandas as pd #if you will
import gspread
from google.oauth2 import service_account

# Create a connection object.
credentials = service_account.Credentials.from_service_account_info(
    st.secrets["gcp_service_account"],
    scopes=[
        "https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive"
    ],
)
conn = connect(credentials=credentials)
client=gspread.authorize(credentials)

sheet_id = 'https://docs.google.com/spreadsheets/d/179l487cHKrk6EXJ0oh7Q6u4sqlZ-5H8Z3E-JyquXeuQ/edit?usp=sharing'
csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv"
database_df = pd.read_csv(csv_url, on_bad_lines='skip')
