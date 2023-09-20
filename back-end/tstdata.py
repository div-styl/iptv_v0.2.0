from sqlalchemy import create_engine, text  # Import the 'text' function
from sqlalchemy.orm import sessionmaker
from os import getenv

DB_NAME = getenv("DB_NAME")
DB_USR = getenv("DB_USR")
DB_PWD = getenv("DB_PWD")
DB_HOST = getenv("DB_HOST")
DB_PORT = getenv("DB_PORT")

# Construct the database URL using the environment variables
db_url = f"mariadb+mariadbconnector://{DB_USR}:{DB_PWD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

# Create the database engine
engine = create_engine(db_url)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Define the name of the table you want to describe
table_name = 'formdata'

# Use SQLAlchemy to execute the DESC query with text()
try:
    query = text(f"DESC {table_name}")
    result = session.execute(query)

    # Fetch and print the table description
    table_description = result.fetchall()
    for row in table_description:
        print(row)
except Exception as e:
    print(f"Error: {e}")
finally:
    session.close()
