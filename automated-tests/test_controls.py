import json
from functions import *

# check if control is working by clicking control UP button and returning value from sessionStorage of browser
def is_control_up_working():
    current_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    current_pov_lat = current_pov['lat']

    move_up(3, .25)

    time.sleep(3)

    updated_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    updated_pov_lat = updated_pov['lat']

    return updated_pov_lat > current_pov_lat


# check if control is working by clicking control DOWN button and returning value from sessionStorage of browser
def is_control_down_working():
    current_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    current_pov_lat = current_pov['lat']

    move_down(3, .25)

    time.sleep(3)

    updated_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    updated_pov_lat = updated_pov['lat']

    return updated_pov_lat < current_pov_lat


# check if control is working by clicking control RIGHT button and returning value from sessionStorage of browser
def is_control_right_working():
    current_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    current_pov_lng = current_pov['lng']

    move_right(3, .25)

    time.sleep(3)

    updated_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    updated_pov_lng = updated_pov['lng']

    return updated_pov_lng > current_pov_lng


# check if control is working by clicking controll LEFT button and returning value from sessionStorage of browser
def is_control_left_working():
    current_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    current_pov_lng = current_pov['lng']

    move_left(3, .25)

    time.sleep(3)

    updated_pov = json.loads(driver.execute_script(
        "return sessionStorage.getItem('pointOfView')"))

    updated_pov_lng = updated_pov['lng']

    return updated_pov_lng < current_pov_lng

def controls_working():
    print("RUNNING CONTROLS TEST")
    
    
    return is_control_up_working() and is_control_down_working() and is_control_left_working() and is_control_right_working()