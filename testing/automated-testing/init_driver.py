from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import WebDriverException

# ENTER AN ABSOLUTE PATH TO A "chromedriver.exe", tested using chromedriver
PATH = "YOUR ABSOLUTE PATH TO chromedriver.exe"

driver = webdriver.Chrome(PATH)

# set URL for testing
driver.get("https://www.kozmickystrazca.sk/kozmickyodpad/")
print("Testing page: " + driver.title)

time.sleep(3)
