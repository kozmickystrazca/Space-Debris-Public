from functions import *

# compare current year and new year after changing it
def compare_years(test_name, previousYear, currentYear):

    choose_year(test_name, previousYear)

    object_count = get_deb_count(test_name) + get_sat_count(test_name)

    choose_year(test_name, currentYear)

    new_object_count = get_deb_count(test_name) + get_sat_count(test_name)

    return new_object_count > object_count

def timeline_working(test_name):
    logging.info("RUNNING TIMELINE TEST")
    
    disable_all_filters(test_name)
    
    if(not is_checked(test_name, "less")):
        switch_checkbox(test_name, "less")
    
    # initialize variable checking for validity of timeline to False
    timeline_working = False

    # slide over these years
    years = [1956, 1967, 1978, 1989, 2000, 2011, 2022]

    # choose default year
    choose_year(test_name, 1956)

    # if active objects in year 0 == 0, run throught loop over all selected years and compare them together
    if (get_deb_count(test_name) + get_sat_count(test_name) == 0):
        timeline_working = True

        x = 0

        while (x + 1 < len(years)):
            timeline_working = compare_years(test_name, years[x], years[x + 1])

            if (not timeline_working):
                break

            x = x + 1
    else:
        timeline_working = False

    try:
        return timeline_working
    finally:
        logging.info("TIMELINE TEST FINISHED")
