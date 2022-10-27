from functions.functions import *

def optimalization_working(test_name):
    
    choose_year(test_name, 1989)
    
    disable_all_filters(test_name)
    
    # initialize variable that checks if optimalization is working to False
    less_filter_working = False

    if(is_checked(test_name, "less")):
        switch_checkbox(test_name, "less")

    # get active objects count at the start of the application
    DEFAULT_SAT_COUNT = get_sat_count(test_name)

    DEFAULT_DEB_COUNT = get_deb_count(test_name)

    switch_checkbox(test_name, "less")

    # get a new count of active objects after optimalization is enabled
    filtered_sat_count = get_sat_count(test_name)
    filtered_deb_count = get_deb_count(test_name)

    # if filtered count of objects is less than their default states, optimalization works, test passed
    if (filtered_sat_count < DEFAULT_SAT_COUNT and filtered_deb_count < DEFAULT_DEB_COUNT):
        less_filter_working = True
        switch_checkbox(test_name, "less")

        if (get_sat_count(test_name) == DEFAULT_SAT_COUNT and get_deb_count(test_name) == DEFAULT_DEB_COUNT):
            less_filter_working = True
        else:
            less_filter_working = False
    else:
        less_filter_working = False

    return less_filter_working
