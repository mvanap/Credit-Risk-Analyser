from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from app.core.config import (
    DB_USER,
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT
)

DATABASE_URL = (

    f"postgresql://{DB_USER}:{DB_PASSWORD}"

    f"@{DB_HOST}:{DB_PORT}/{DB_NAME}"

)

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit = False,
    autoflush = False,
    bind = engine
)

Base = declarative_base()