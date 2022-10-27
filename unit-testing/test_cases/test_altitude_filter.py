from functions.functions import *

# test if active object changes before and after certain altitude is selected
# parameter: altitude, that should be tested


def test_altitude(test_name, altitude, default_sat_count, default_deb_count):
    switch_checkbox(test_name, altitude)

    if (get_sat_count(test_name) < default_sat_count and get_deb_count(test_name) < default_deb_count):
        switch_checkbox(test_name, altitude)

        return get_sat_count(test_name) == default_sat_count and get_deb_count(test_name) == default_deb_count
    else:
        return False


def altitude_filter_working(test_name):

    disable_all_filters(test_name)

    if (is_checked(test_name, "less")):
        switch_checkbox(test_name, "less")

    # initialize all test variables to False
    altitude_LOW_working = False
    altitude_MID_working = False
    altitude_STA_working = False

    # checks for satellite and debris count at the start of the applicaton
    default_sat_count = get_sat_count(test_name)

    default_deb_count = get_deb_count(test_name)

    # test all altitudes for active objects differences
    altitude_LOW_working = test_altitude(test_name,
                                         "LOW", default_sat_count, default_deb_count)
    altitude_MID_working = test_altitude(test_name,
                                         "MID", default_sat_count, default_deb_count)
    altitude_STA_working = test_altitude(test_name,
                                         "STA", default_sat_count, default_deb_count)

    # if all altitudes are filtering objects correctly, test is passed
        
    if (altitude_LOW_working and altitude_MID_working and altitude_STA_working):
        switch_checkbox(test_name, "LOW")
        switch_checkbox(test_name, "MID")
        switch_checkbox(test_name, "STA")

        return get_deb_count(test_name) == 0 and get_sat_count(test_name) == 0
    else:
        return False
        