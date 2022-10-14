from time import sleep
from init_driver import *


# ASCII colors for colorful displaying test results in console
class bcolors:
    PASSED = '\033[92m'
    FAILED = '\033[91m'


# starts app from title screen
def run_app():
    try:
        driver.find_element(
            By.CSS_SELECTOR, "#root > div.home-body > div.home-button-section > div > a:nth-child(1) > div").click()
    except WebDriverException:
        print("Button for running app is not clickable!")


# change window size
# parameters: window desired with, window desired height
def change_window_size(width, height):
    driver.set_window_size(width, height)


# zooming in using button controls
# parameters: how many times do you want to zoom, wait time between each zoom
def zoom_in(zoom_count, delay):

    for x in range(zoom_count):

        try:
            driver.find_element(
                By.XPATH, "/html/body/div/div/div[5]/div[2]/div[1]/button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.XPATH, "/html/body/div/div/div[5]/div[2]/div[1]/button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Zoom-in button cannot be clicked!")

    time.sleep(3)


# zooming out using button controls
# parameters: how many times do you want to zoom, wait time between each zoom
def zoom_out(zoom_count, delay):
    for x in range(zoom_count):

        try:
            driver.find_element(
                By.XPATH, "/html/body/div/div/div[5]/div[2]/div[2]/button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.XPATH, "/html/body/div/div/div[5]/div[2]/div[2]/button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Zoom-out button cannot be clicked!")

    time.sleep(3)


# move right using button controls
# parameters:  how many times do you want move right, wait time between each move
def move_right(move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(5) > button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(5) > button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Move right button not clickable!")


# move left using button controls
# parameters:  how many times do you want move left, wait time between each move
def move_left(move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(3) > button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(3) > button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Button not clickable!")


# move up using button controls
# parameters:  how many times do you want move up, wait time between each move
def move_up(move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(1) > button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(1) > button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Button not clickable!")


# move down using button controls
# parameters:  how many times do you want move down, wait time between each move
def move_down(move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(2) > button").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(2) > button").click()
                time.sleep(delay)
            except WebDriverException:
                print("Button not clickable!")


# using timeline slider to move through all years
# parameter: wait time between each year change
def slide_over_years(delay):
    for x in range(3, 17, 2):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
            time.sleep(delay)
        except WebDriverException:
            check_for_optimalization("continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
                time.sleep(delay)
            except WebDriverException:
                print("Button not clickable!")


# choose from crucial years displayed on timeline
# parameter: enter chosen year
def choose_year(chosenYear):

    if (chosenYear == 1956):
        x = 3

    elif (chosenYear == 1967):
        x = 5

    elif (chosenYear == 1978):
        x = 7

    elif (chosenYear == 1989):
        x = 9

    elif (chosenYear == 2000):
        x = 11

    elif (chosenYear == 2011):
        x = 13

    elif (chosenYear == 2022):
        x = 15

    else:
        print("Unknown year!")

    try:
        driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
    except WebDriverException:
        check_for_optimalization("continue")
        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
        except WebDriverException:
            print("Button not clickable!")

    time.sleep(2)


# get current year from timeline
def get_year():
    time.sleep(2)

    try:
        current_year = driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span.MuiSlider-thumb.MuiSlider-thumbColorPrimary.MuiSlider-thumbSizeMedium.css-7drnjp > input[type=range]")
    except WebDriverException:
        print("Can't get current year from timeline!")

    return int(current_year.get_attribute("value"))


# open additional menu from main screen
def open_menu():
    time.sleep(3)

    try:
        driver.find_element(
            By.CSS_SELECTOR, "#root > div > div:nth-child(3) > div > div").click()
    except WebDriverException:
        check_for_optimalization("continue")
        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div:nth-child(3) > div > div").click()
        except WebDriverException:
            print("Can't open menu!")


# open read more modal window from additional menu
def read_more_app():
    open_menu()

    try:
        driver.find_element(By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.readmore-button").click()
    except WebDriverException:
        print("Read more can't be opened!")

    time.sleep(5)

    try:
        driver.find_element(
            By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-readmore.MuiBox-root.css-0 > div.close-more.MuiBox-root.css-0").click()
    except WebDriverException:
        print("Read more can't be opened!")


# switch chosen filter checkbox
# parameter: filter ID. Further description inside a function
def switch_checkbox(id):

    open_menu()

    # IDs:
    #       +   -   Satellites
    #       -   -   Debris
    #       LOW -   Low altitude
    #       MID -   Mid altitude
    #       STA -   Geostationary altitude
    #       less -  Optimalization filter for less objects
    #       anima - Toggle animation

    time.sleep(1)

    try:
        driver.find_element(By.ID, id).click()
    except WebDriverException:
        print("Checkbox with ID: " + id + " can't be checked")

    time.sleep(2)
    close_menu()
    time.sleep(2)


# check whether checbox is checked or not
# parameter: id of a checkbox
def is_checked(id):

    open_menu()

    is_checked = False

    try:
        is_checked = driver.execute_script(
            f"return document.getElementById('{id}').checked")
    except WebDriverException:
        print("Checkbox with ID: " + id + " can't be checked")

    close_menu()

    return is_checked


# switch checkbox for optimalization (less objects)
def switch_optimalization():
    open_menu()

    try:
        driver.find_element(By.ID, "less").click()
    except WebDriverException:
        print("Optimalization can't be checked")

    time.sleep(2)
    close_menu()
    time.sleep(2)


# switch all checkboxes depending on chosen filter type
def switch_all_checkboxes():
    open_menu()

    try:
        driver.find_element(By.ID, "LOW").click()
        time.sleep(3)
        driver.find_element(By.ID, "MID").click()
        time.sleep(3)
        driver.find_element(By.ID, "STA").click()
        time.sleep(3)

        driver.find_element(By.ID, "+").click()
        driver.find_element(By.ID, "-").click()

        driver.find_element(By.ID, "less").click()
        driver.find_element(By.ID, "anima").click()

    except WebDriverException:
        print("All checkboxes can't be clicked!")

    time.sleep(2)
    close_menu()
    time.sleep(2)

# close additional menu if opened
def close_menu():
    try:
        driver.find_element(
            By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiBackdrop-root.css-919eu4").click()
    except WebDriverException:
        print("Can't close menu!")


# get current distance from Earth
def get_distance():
    time.sleep(2)

    try:
        distance = driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.distance > div:nth-child(2) > div:nth-child(2)")
    except WebDriverException:
        print("Can't get distance!")

    return int(distance.text)


# get current active satellites orbiting the Earth count
def get_sat_count():
    time.sleep(2)

    is_optimalization_on = is_checked("less")

    try:
        if (not is_optimalization_on):
            sat_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(2)")
        elif (is_optimalization_on):
            sat_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(3)")
        else:
            print("Unknown parameter!")
    except WebDriverException:
        print("Can't get satellite count")

    return int(sat_count.text[2:])


# get current inactive objects (space debris) orbiting the Earth count
def get_deb_count():
    time.sleep(2)

    is_optimalization_on = is_checked("less")

    try:
        if (not is_optimalization_on):
            deb_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(4)")
        elif (is_optimalization_on):
            deb_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(5)")
        else:
            print("Unknown parameter!")
    except WebDriverException:
        print("Can't get debris count")

    return int(deb_count.text[2:])


# change language in app between EN and SK
# parameter: wanted language (EN/SK)
def change_language(language):
    language = language.upper()

    open_menu()

    try:
        btn_change_language = driver.find_element(
            By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div.language-in-menu-section > div")

        if (not language == btn_change_language.text):
            print("Language already set")

        elif (language == "EN" or language == "SK"):
            btn_change_language.click()

        else:
            print("Unknown language given in parameter")

    except WebDriverException:
        print("Can't change language")


# changes language while driver is set for title screen
# parameter: desired language
def change_language_in_menu(language):
    language = language.upper()

    try:
        btn_change_language = driver.find_element(
            By.CSS_SELECTOR, "#root > div.language-bar > div")

        if (not language == btn_change_language.text):
            print("Language already set")

        elif (language == "EN" or language == "SK"):
            btn_change_language.click()

        else:
            print("Unknown language given in parameter")
    except WebDriverException:
        print("Can't change language")


# check if modal window for enabling optimalization is available
# parameter: optimize/continue
def check_for_optimalization(action):
    try:
        if (action == "optimize"):
            driver.find_element(
                By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-slow.MuiBox-root.css-0 > div > div.optimalization-buttons > div:nth-child(1)").click()
        elif (action == "continue"):
            driver.find_element(
                By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-slow.MuiBox-root.css-0 > div > div.optimalization-buttons > div:nth-child(2)").click()
        else:
            print("OPTIMIZE MODAL WINDOW: unknown action!")

    except WebDriverException:
        print("Modal window options not clickable")
