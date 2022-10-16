from functions import *

# test if active object changes before and after certain altitude is selected
# parameter: altitude, that should be tested
def test_altitude(altitude, default_sat_count, default_deb_count):
    switch_checkbox(altitude)

    if (get_sat_count() < default_sat_count and get_deb_count() < default_deb_count):
        switch_checkbox(altitude)

        return get_sat_count() == default_sat_count and get_deb_count() == default_deb_count
    else:
        return False


def altitude_filter_working():
    print("RUNNING ALTITUDE FILTER TEST")

    disable_all_filters()

    if (is_checked("less")):
        switch_checkbox("less")

    # initialize all test variables to False
    altitude_LOW_working = False
    altitude_MID_working = False
    altitude_STA_working = False

    # checks for satellite and debris count at the start of the applicaton
    default_sat_count = get_sat_count()

    default_deb_count = get_deb_count()

    # test all altitudes for active objects differences
    altitude_LOW_working = test_altitude(
        "LOW", default_sat_count, default_deb_count)
    altitude_MID_working = test_altitude(
        "MID", default_sat_count, default_deb_count)
    altitude_STA_working = test_altitude(
        "STA", default_sat_count, default_deb_count)

    # if all altitudes are filtering objects correctly, test is passed
    if (altitude_LOW_working and altitude_MID_working and altitude_STA_working):
        switch_checkbox("LOW")
        switch_checkbox("MID")
        switch_checkbox("STA")

        return get_deb_count() == 0 and get_sat_count() == 0
    else:
        return False
