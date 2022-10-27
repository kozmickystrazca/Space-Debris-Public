from functions.functions import *

def reload_working(test_name):

    driver.refresh()

    # choose a random year
    choose_year(test_name, 1989)

    # toggle all checkboxes in additional menu
    switch_all_checkboxes(test_name)

    # save all current values before reload, that should be saved after the reload
    DEFAULT_YEAR = get_year(test_name)
    DEFAULT_SAT = is_checked(test_name, "+")
    DEFAULT_DEB = is_checked(test_name, "-")
    DEFAULT_LOW = is_checked(test_name, "LOW")
    DEFAULT_MID = is_checked(test_name, "MID")
    DEFAULT_STA = is_checked(test_name, "STA")
    DEFAULT_LESS = is_checked(test_name, "less")
    DEFAULT_ANIMA = is_checked(test_name, "anima")
    DEFAULT_SAT_COUNT = get_sat_count(test_name)
    DEFAULT_DEB_COUNT = get_deb_count(test_name)

    # change window size (force page reload)
    change_window_size(test_name, 800, 600)

    # check if all desired values remained saved
    return (is_checked(test_name, "+") == DEFAULT_SAT and
            is_checked(test_name, "-") == DEFAULT_DEB and
            is_checked(test_name, "LOW") == DEFAULT_LOW and
            is_checked(test_name, "MID") == DEFAULT_MID and
            is_checked(test_name, "STA") == DEFAULT_STA and
            is_checked(test_name, "less") == DEFAULT_LESS and
            is_checked(test_name, "anima") == DEFAULT_ANIMA and
            get_year(test_name) == DEFAULT_YEAR and
            get_sat_count(test_name) == DEFAULT_SAT_COUNT and
            get_deb_count(test_name) == DEFAULT_DEB_COUNT)
