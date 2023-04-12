import streamlit as st
import pandas as pd

# Dump any DataFrame
d = {'Type': ['Notebook', 'DVDs'], 'Quantity': [1, 2], 'Price': [400, 200]}
df = pd.DataFrame(data=d)
st.dataframe(df)
