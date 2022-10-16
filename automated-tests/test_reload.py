from functions import *


def reload_working():
    print("RUNNING RELOAD TEST")
    
    driver.refresh()
    
    # choose a random year
    choose_year(1989)

    # toggle all checkboxes in additional menu
    switch_all_checkboxes()

    # save all current values before reload, that should be saved after the reload
    DEFAULT_YEAR = get_year()
    DEFAULT_SAT = is_checked("+")
    DEFAULT_DEB = is_checked("-")
    DEFAULT_LOW = is_checked("LOW")
    DEFAULT_MID = is_checked("MID")
    DEFAULT_STA = is_checked("STA")
    DEFAULT_LESS = is_checked("less")
    DEFAULT_ANIMA = is_checked("anima")
    DEFAULT_SAT_COUNT = get_sat_count()
    DEFAULT_DEB_COUNT = get_deb_count()

    # change window size (force page reload)
    change_window_size(800, 600)

    # check if all desired values remained saved
    return (is_checked("+") == DEFAULT_SAT and
            is_checked("-") == DEFAULT_DEB and
            is_checked("LOW") == DEFAULT_LOW and
            is_checked("MID") == DEFAULT_MID and
            is_checked("STA") == DEFAULT_STA and
            is_checked("less") == DEFAULT_LESS and
            is_checked("anima") == DEFAULT_ANIMA and
            get_year() == DEFAULT_YEAR and
            get_sat_count() == DEFAULT_SAT_COUNT and
            get_deb_count() == DEFAULT_DEB_COUNT)
