
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


PATH = "C:\Program Files (x86)\chromedriver.exe"
service = Service(executable_path=PATH)

# Create a Chrome WebDriver instance
driver = webdriver.Chrome(service=service)

# Open Google Chrome
driver.get("http://localhost:5173/selnium")
inputElement = driver.find_element(By.ID, "input")
textElement = driver.find_element(By.ID, "test")
textElement.text
print(textElement.text)
# way to send keyies to the serch bar
inputElement.send_keys("value we want to send"+Keys.ENTER)
time.sleep(10)
driver(quit)
