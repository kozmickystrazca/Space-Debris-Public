from time import sleep
from init_driver import *
import logging


# ASCII colors for colorful displaying test results in console
class bcolors:
    PASSED = '\033[92m'
    FAILED = '\033[91m'
    NEWLINE = '\033[0m'

# change window size
# parameters: window desired with, window desired height
def change_window_size(test_name, width, height):
    try:
        driver.set_window_size(width, height)
        logging.info(test_name + ": changing window size. Width: " +
                     str(width) + ", height: " + str(height))
    except WebDriverException:
        logging.error(test_name + ": error changing window size")

    time.sleep(3)


# zooming in using button controls
# parameters: how many times do you want to zoom, wait time between each zoom
def zoom_in(test_name, zoom_count, delay):

    for x in range(zoom_count):

        try:
            driver.find_element(
                By.XPATH, "/html/body/div/div/div[5]/div[2]/div[1]/button").click()
            time.sleep(delay)
            logging.info(test_name + ": zooming-in for " +
                         str(x + 1) + " time")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.XPATH, "/html/body/div/div/div[5]/div[2]/div[1]/button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(
                    test_name + ": zoom-in button cannot be clicked!")

    time.sleep(3)


# zooming out using button controls
# parameters: how many times do you want to zoom, wait time between each zoom
def zoom_out(test_name, zoom_count, delay):
    for x in range(zoom_count):

        try:
            driver.find_element(
                By.XPATH, "/html/body/div/div/div[5]/div[2]/div[2]/button").click()
            time.sleep(delay)
            logging.info(test_name + ": zooming-out for " +
                         str(x + 1) + " time")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.XPATH, "/html/body/div/div/div[5]/div[2]/div[2]/button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(
                    test_name + ": zoom-out button cannot be clicked!")

    time.sleep(3)


# move right using button controls
# parameters:  how many times do you want move right, wait time between each move
def move_right(test_name, move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(5) > button").click()
            time.sleep(delay)
            logging.info(test_name + ": moving right for " + str(x + 1) + " times")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(5) > button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(test_name + ": move right button not clickable!")


# move left using button controls
# parameters:  how many times do you want move left, wait time between each move
def move_left(test_name, move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(3) > button").click()
            time.sleep(delay)
            logging.info(test_name + ": moving left for " + str(x + 1) + " times")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div:nth-child(3) > button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(test_name + ": move left button not clickable!")


# move up using button controls
# parameters:  how many times do you want move up, wait time between each move
def move_up(test_name, move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(1) > button").click()
            time.sleep(delay)
            logging.info(test_name + ": moving up for " + str(x + 1) + " times")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(1) > button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(test_name + ": move up button not clickable!")


# move down using button controls
# parameters:  how many times do you want move down, wait time between each move
def move_down(test_name, move_count, delay):
    for x in range(move_count):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(2) > button").click()
            time.sleep(delay)
            logging.info(test_name + ": moving down for " + str(x + 1) + " times")
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.controls-background2 > div.flex > div:nth-child(2) > button").click()
                time.sleep(delay)
            except WebDriverException:
                logging.error(test_name + ": move down button not clickable!")


# using timeline slider to move through all years
# parameter: wait time between each year change
def slide_over_years(test_name):
    logging.info(test_name + ": sliding over highlighted years")
    
    for x in range(3, 17, 2):

        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
            time.sleep(3)
        except WebDriverException:
            check_for_optimalization(test_name, "continue")
            try:
                driver.find_element(
                    By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
                time.sleep(3)
            except WebDriverException:
                logging.error(test_name + ": highlighted years not clickable!")


# choose from crucial years displayed on timeline
# parameter: enter chosen year
def choose_year(test_name, chosenYear):

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
        logging.error(test_name + ": incorrect chosen year! Change parameter!")

    try:
        driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
        logging.info(test_name + ": choosing year: " + str(chosenYear))
    except WebDriverException:
        check_for_optimalization(test_name, "continue")
        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span:nth-child(" + str(x) + ")").click()
        except WebDriverException:
            logging.warning(test_name + ": chosen year " + "(" + str(chosenYear) + ")" + " not clickable!")

    time.sleep(2)


# get current year from timeline
def get_year(test_name):
    time.sleep(2)

    try:
        current_year = driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.range > div.slider.MuiBox-root.css-0 > span > span.MuiSlider-thumb.MuiSlider-thumbColorPrimary.MuiSlider-thumbSizeMedium.css-7drnjp > input[type=range]")
        logging.info(test_name + ": current year: " + str(current_year.get_attribute("value")))
    except WebDriverException:
        logging.error(test_name + ": cannot get current year from timeline!")

    return int(current_year.get_attribute("value"))


# open additional menu from main screen
def open_menu(test_name):
    time.sleep(3)

    try:
        driver.find_element(
            By.CSS_SELECTOR, "#root > div > div:nth-child(3) > div > div").click()
        logging.info(test_name + ": opening an additional menu")
    except WebDriverException:
        check_for_optimalization(test_name, "continue")
        try:
            driver.find_element(
                By.CSS_SELECTOR, "#root > div > div:nth-child(3) > div > div").click()
        except WebDriverException:
            logging.error(test_name + ": cannot open additional menu!")

    time.sleep(2)


# open read more modal window from additional menu
# def read_more_app():
#     open_menu()

#     try:
#         driver.find_element(By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.readmore-button").click()
#     except WebDriverException:
#         print("Read more can't be opened!")

#     time.sleep(5)

#     try:
#         driver.find_element(
#             By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-readmore.MuiBox-root.css-0 > div.close-more.MuiBox-root.css-0").click()
#     except WebDriverException:
#         print("Read more can't be opened!")


# switch chosen filter checkbox
# parameter: filter ID. Further description inside a function
def switch_checkbox(test_name, id):

    open_menu(test_name)

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
        logging.info(test_name + ": switching checkbox with ID: '" + str(id) + "'")
    except WebDriverException:
        logging.error(test_name + ": checkbox with ID: '" + str(id) + "' cannot be checked!")

    time.sleep(2)
    close_menu(test_name)
    time.sleep(2)


# check whether checbox is checked or not
# parameter: id of a checkbox
def is_checked(test_name, id):

    open_menu(test_name)

    is_checked = False

    try:
        is_checked = driver.execute_script(
            f"return document.getElementById('{id}').checked")
        
        if(is_checked):
            logging.info(test_name + ": checkbox with ID: '" + str(id) + "' is CHECKED")
        else:
            logging.info(test_name + ": checkbox with ID: '" + str(id) + "' is UNCHECKED")
    except WebDriverException:
        logging.error(test_name + ": checkbox with ID: '" + str(id) + "' cannot return value! Check given ID parameter")

    close_menu(test_name)

    return is_checked


# switch checkbox for optimalization (less objects)
def switch_optimalization(test_name):
    open_menu(test_name)

    try:
        driver.find_element(By.ID, "less").click()
        logging.info(test_name + ": switching optimalization filter")
    except WebDriverException:
        logging.error(test_name + ": optimalization filter cannot be switched!")

    time.sleep(2)
    close_menu(test_name)
    time.sleep(2)


# switch all checkboxes depending on chosen filter type
def switch_all_checkboxes(test_name):
    open_menu(test_name)

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

        logging.info(test_name + ": switching all checkboxes")

    except WebDriverException:
        logging.error(test_name + ": all checkboxes can't be switched")

    time.sleep(2)
    close_menu(test_name)
    time.sleep(2)

# close additional menu if opened
def close_menu(test_name):
    try:
        driver.find_element(
            By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiBackdrop-root.css-919eu4").click()
        logging.info(test_name + ": closing an additional menu")
    except WebDriverException:
        logging.warning(test_name + ": cannot close an additional menu")


# get current distance from Earth
def get_distance(test_name):
    time.sleep(2)

    try:
        distance = driver.find_element(
            By.CSS_SELECTOR, "#root > div > div.distance > div:nth-child(2) > div:nth-child(2)")
        logging.info(test_name + ": current distance from Earth: " + distance.text + "km")
    except WebDriverException:
        logging.error(test_name + ": cannot get current distance from Earth")

    return int(distance.text)


# get current active satellites orbiting the Earth count
def get_sat_count(test_name):
    time.sleep(2)

    is_optimalization_on = is_checked(test_name, "less")

    try:
        if (not is_optimalization_on):
            sat_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(2)")
            logging.info(test_name + ": current active satellites count: " + sat_count.text[2:])
        elif (is_optimalization_on):
            sat_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(3)")
            logging.info(test_name + ": current active satellites count: " + sat_count.text[2:])
    except WebDriverException:
        logging.error(test_name + ": cannot get current active satellites count!")

    return int(sat_count.text[2:])


# get current inactive objects (space debris) orbiting the Earth count
def get_deb_count(test_name):
    time.sleep(2)

    is_optimalization_on = is_checked(test_name, "less")

    try:
        if (not is_optimalization_on):
            deb_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(4)")
            logging.info(test_name + ": current space debris count: " + deb_count.text[2:])
        elif (is_optimalization_on):
            deb_count = driver.find_element(
                By.CSS_SELECTOR, "#root > div > div.display-count-objects > div:nth-child(5)")
            logging.info(test_name + ": current space debris count: " + deb_count.text[2:])
    except WebDriverException:
        logging.error(test_name + ": cannot get current space debris count!")

    return int(deb_count.text[2:])


# change language in app between EN and SK
# parameter: wanted language (EN/SK)
def change_language(test_name, language):
    language = language.upper()

    open_menu(test_name)

    try:
        btn_change_language = driver.find_element(
            By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div.language-in-menu-section > div")

        if (not language == btn_change_language.text):
            logging.info(test_name + ": language (" + language + ") already chosen")

        elif (language == "EN" or language == "SK"):
            btn_change_language.click()
            logging.info(test_name + ": changing language to: " + language)

        else:
            logging.error(test_name + ": incorrect language! Change attribute!")

    except WebDriverException:
        logging.error(test_name + ": cannot change language!")
        
    close_menu(test_name)


# changes language while driver is set for title screen
# parameter: desired language
def change_language_in_menu(test_name, language):
    language = language.upper()

    try:
        btn_change_language = driver.find_element(
            By.CSS_SELECTOR, "#root > div.language-bar > div")

        if (not language == btn_change_language.text):
            logging.info(test_name + ": TITLE SCREEN language (" + language + ") already chosen")

        elif (language == "EN" or language == "SK"):
            btn_change_language.click()
            logging.info(test_name + ": TITLE SCREEN changing language to: " + language)

        else:
            logging.error(test_name + ": TITLE SCREEN incorrect language! Change attribute!")
    except WebDriverException:
        logging.error(test_name + ": TITLE SCREEN cannot change language!")


# check if modal window for enabling optimalization is available
# parameter: optimize/continue
def check_for_optimalization(test_name, action):
    try:
        if (action == "optimize"):
            driver.find_element(
                By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-slow.MuiBox-root.css-0 > div > div.optimalization-buttons > div:nth-child(1)").click()
            logging.info(test_name + ": enabling suggested optimalization")
        elif (action == "continue"):
            driver.find_element(
                By.CSS_SELECTOR, "body > div.MuiModal-root.css-8ndowl > div.box-slow.MuiBox-root.css-0 > div > div.optimalization-buttons > div:nth-child(2)").click()
            logging.info(test_name + ": ignoring suggested optimalization")
        else:
            logging.error(test_name + ": unknown action in suggested optimalization modal window! Change attribute!")

    except WebDriverException:
        logging.warning(test_name + ": modal window for suggested optimalization not available")


def disable_all_filters(test_name):
    time.sleep(2)

    logging.info(test_name + ": disabling all filters")

    if (not is_checked(test_name, "+")):
        switch_checkbox(test_name, "+")

    if (not is_checked(test_name, "-")):
        switch_checkbox(test_name, "-")

    if (not is_checked(test_name, "LOW")):
        switch_checkbox(test_name, "LOW")

    if (not is_checked(test_name, "MID")):
        switch_checkbox(test_name, "MID")

    if (not is_checked(test_name, "STA")):
        switch_checkbox(test_name, "STA")


def test_result(test_name, has_passed):
    if (has_passed):
        print(test_name + ": " + bcolors.PASSED + "PASSED" + bcolors.NEWLINE)
        logging.info(test_name + ": PASSED")
    else:
        print(test_name + ": " + bcolors.FAILED + "FAILED" + bcolors.NEWLINE)
        logging.info(test_name + ": FAILED")
