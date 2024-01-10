from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait



PATH = "C:\Program Files (x86)\chromedriver.exe"
service=Service(executable_path=PATH)



# Create a Chrome WebDriver instance
driver = webdriver.Chrome(service=service)

# Open Google Chrome
driver.get("http://127.0.0.1:5500/waits/page_with_slow_image.html")

imgElement=WebDriverWait(driver,10).until(EC.visibility_of_all_elements_located((By.ID,'the_slow_image')))




print("found img")