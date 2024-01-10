from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
PATH = "C:\Program Files (x86)\chromedriver.exe"
service=Service(executable_path=PATH)
driver=webdriver.Chrome(service=service)
driver.get("http://localhost:5173/")

menuBtn=driver.find_element(By.CSS_SELECTOR,"#root > header > nav > div.flex.lg\:hidden > button")
menuBtn.click()
profileBtn=driver.find_element(By.LINK_TEXT,"Profile")
profileBtn.click()
SettingeBtn=driver.find_element(By.LINK_TEXT,"Setting")
SettingeBtn.click()

Curentpasswoed=driver.find_element(By.NAME,"current-password")
Curentpasswoed.send_keys("curent pass word",Keys.RETURN)

NewPassword=driver.find_element(By.NAME,"new-password")
NewPassword.send_keys("NewPassword",Keys.RETURN)

verfiyPassword=driver.find_element(By.NAME,"confirm_password")
verfiyPassword.send_keys("NewPassword",Keys.RETURN)

SubmitBtn=driver.find_element(By.CSS_SELECTOR,"#root > div:nth-child(7) > div > form > div > div:nth-child(5) > button")
SubmitBtn.click()





time.sleep(10)
quit(driver)

