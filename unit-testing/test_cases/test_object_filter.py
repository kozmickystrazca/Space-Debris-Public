from functions.functions import *

def object_filter_working(test_name):
    
    disable_all_filters(test_name)

    # initialize filters working to False
    satellite_filter_working = False
    debris_filter_working = False

    # get active objects count at the start of the application
    DEFAULT_SAT_COUNT = get_sat_count(test_name)

    DEFAULT_DEB_COUNT = get_deb_count(test_name)

    # disable checkbox for satellites
    switch_checkbox(test_name, "+")

    # get new satellite count
    filtered_sat_count = get_sat_count(test_name)

    # if satellite count is 0, toggle satellites back and check if active satellite count is same as in the start of the application
    if (filtered_sat_count == 0):
        satellite_filter_working = True
        switch_checkbox(test_name, "+")

        if (get_sat_count(test_name) == DEFAULT_SAT_COUNT):
            satellite_filter_working = True
        else:
            satellite_filter_working = False
    else:
        satellite_filter_working = False

    # disable checkbox for space debris
    switch_checkbox(test_name, "-")

    # get new space debris count
    filtered_deb_count = get_deb_count(test_name)

    # if debris count is 0, toggle space debris back and check if space debris count is same as in the start of the application
    if (filtered_deb_count == 0):
        debris_filter_working = True
        switch_checkbox(test_name, "-")

        if (get_deb_count(test_name) == DEFAULT_DEB_COUNT):
            debris_filter_working = True
        else:
            debris_filter_working = False
    else:
        debris_filter_working = False

    # if both object filters are working, test passed
    if (satellite_filter_working and debris_filter_working):
        switch_checkbox(test_name, "+")
        switch_checkbox(test_name, "-")

        return get_deb_count(test_name) == get_sat_count(test_name) == 0
    
    else: return False
