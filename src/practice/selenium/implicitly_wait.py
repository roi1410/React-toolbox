from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


PATH = "C:\Program Files (x86)\chromedriver.exe"
service=Service(executable_path=PATH)



# Create a Chrome WebDriver instance
driver = webdriver.Chrome(service=service)
# Implicit Waits

driver.implicitly_wait(10)

# Open Google Chrome
driver.get("http://localhost:5173/selnium")
# its cannot find the element because the element dosent load at the time of the serch 
imgElement=driver.find_element(By.ID,"the_slow_image")

print("found img")