from functions import *

def optimalization_working():
    print("RUNNING OPTIMALIZATION TEST")
    
    choose_year(1989)
    
    disable_all_filters()
    
    # initialize variable that checks if optimalization is working to False
    less_filter_working = False

    if(is_checked("less")):
        switch_checkbox("less")

    # get active objects count at the start of the application
    DEFAULT_SAT_COUNT = get_sat_count()

    DEFAULT_DEB_COUNT = get_deb_count()

    switch_checkbox("less")

    # get a new count of active objects after optimalization is enabled
    filtered_sat_count = get_sat_count()
    filtered_deb_count = get_deb_count()

    # if filtered count of objects is less than their default states, optimalization works, test passed
    if (filtered_sat_count < DEFAULT_SAT_COUNT and filtered_deb_count < DEFAULT_DEB_COUNT):
        less_filter_working = True
        switch_checkbox("less")

        if (get_sat_count() == DEFAULT_SAT_COUNT and get_deb_count() == DEFAULT_DEB_COUNT):
            less_filter_working = True
        else:
            less_filter_working = False
    else:
        less_filter_working = False

    return less_filter_working
