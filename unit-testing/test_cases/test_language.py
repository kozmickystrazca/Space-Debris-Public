from functions.functions import *


# gather all texts from placeholders in app (including additional menu) and check if they are working for chosen language
# parameter: en/sk (language)
def is_language_working(test_name, language_shortcut):
    language_shortcut = language_shortcut.lower()

    driver.get("https://www.kozmickystrazca.sk/kozmickyodpad/app")

    change_window_size(test_name, 1280, 720)

    change_language(test_name, language_shortcut)

    open_menu(test_name)

    keywords = []

    btn_read_more_text = driver.find_element(
        By.CLASS_NAME, "readmore-button").text.lower()

    placeholder_object_filter_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(1) > h5").text[0:-1].lower()

    placeholder_satellite_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(2) > div").text.lower()

    placeholder_debris_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(3) > div").text.lower()

    placeholder_orbit_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(4) > h5").text[0:-1].lower()

    placeholder_low_orbit_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(5) > div").text.partition("\n")[0].lower()

    placeholder_mid_orbit_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(6) > div").text.partition("\n")[0].lower()

    placeholder_sta_orbit_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(7) > div").text.partition("\n")[0].lower()

    placeholder_optimalization_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(8) > h5").text[0:-1].lower()

    placeholder_less_text = (driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(9) > div").text.lower()).split("\n")[0]

    placeholder_less_text_bottom = driver.find_element(By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(9) > div > div").text.lower()

    placeholder_animation_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div:nth-child(10) > div").text.lower()

    placeholder_language_text = driver.find_element(
        By.CSS_SELECTOR, "body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.css-wf16b5 > div > div.filter-background > div.language-in-menu-section").text.partition("\n")[0][0:-1].lower()

    close_menu(test_name)

    placeholder_distance_text = (driver.find_element(
        By.CLASS_NAME, "distance")).text.lower().partition(":")[0]

    driver.get("https://www.kozmickystrazca.sk/kozmickyodpad/")

    change_language_in_menu(test_name, language_shortcut)

    placeholder_title_text = driver.find_element(
        By.CSS_SELECTOR, "#root > div.home-body > div.home-name-section > span.nad").text.lower()

    placeholder_subtitle_text = driver.find_element(
        By.CSS_SELECTOR, "#root > div.home-body > div.home-name-section > span.pod").text.lower()

    button_launch_text = driver.find_element(
        By.CSS_SELECTOR, "#root > div.home-body > div.home-button-section > div > a:nth-child(1) > div").text.lower()

    button_readmore_text = driver.find_element(
        By.CSS_SELECTOR, "#root > div.home-body > div.home-button-section > div > a:nth-child(2) > div").text.lower()

    keywords.extend([btn_read_more_text, placeholder_object_filter_text,
                     placeholder_satellite_text, placeholder_debris_text, placeholder_orbit_text, placeholder_low_orbit_text, placeholder_mid_orbit_text, placeholder_sta_orbit_text, placeholder_optimalization_text, placeholder_less_text, placeholder_less_text_bottom, placeholder_animation_text, placeholder_language_text, placeholder_distance_text, placeholder_title_text, placeholder_subtitle_text, button_launch_text, button_readmore_text])

    print(keywords)

    if (language_shortcut == "en"):
        expected_keywords = ["read more", "choose object", "satellite", "debris", "choose orbit",
                             "low", "middle", "geostationary", "optimalization", "less objects", "(25% low orbit, 50% other)", "turn off animation", "language", "distance", "space guardian", "space debris monitoring", "launch", "read more"]
    
    elif (language_shortcut == "sk"):
        expected_keywords = ["????taj viac", "v??ber objektu", "satelit", "odpad", "v??ber orbity",
                             "n??zka", "stredn??", "geostacion??rn??", "optimaliz??cia", "menej objektov", "(25% n??zka orbita, 50% ostatn??)", "vypn???? anim??ciu", "jazyk", "vzdialenos??", "kozmick?? str????ca", "monitorovanie kozmick??ho odpadu", "spusti??", "????taj viac"]
    else:
        print("Unknown language shortcut!")

    return keywords == expected_keywords

def language_working(test_name):
    return is_language_working(test_name, "en") and is_language_working(test_name, "sk")
