from functions import *

# test if active object changes before and after certain altitude is selected
# parameter: altitude, that should be tested
def test_altitude(altitude):
    switch_checkbox(altitude)

    if (get_sat_count() < DEFAULT_SAT_COUNT and get_deb_count() < DEFAULT_DEB_COUNT):
        switch_checkbox(altitude)

        if (get_sat_count() == DEFAULT_SAT_COUNT and get_deb_count() == DEFAULT_DEB_COUNT):
            return True
        else:
            return False
    else:
        return False


# initialize all test variables to False
altitude_LOW_working = False
altitude_MID_working = False
altitude_HIG_working = False
altitude_STA_working = False

run_app()

print("Running ALTITUDE FILTER test")

time.sleep(2)

# checks for satellite and debris count at the start of the applicaton

DEFAULT_SAT_COUNT = get_sat_count()

DEFAULT_DEB_COUNT = get_deb_count()

# test all altitudes for active objects differences
altitude_LOW_working = test_altitude("LOW")
altitude_MID_working = test_altitude("MID")
altitude_STA_working = test_altitude("STA")

# if all altitudes are filtering objects correctly, test is passed
if (altitude_LOW_working and altitude_MID_working and altitude_STA_working):
    switch_checkbox("LOW")
    switch_checkbox("MID")
    switch_checkbox("STA")

    if (get_deb_count() == 0 and get_sat_count() == 0):
        print("ALTITUDE FILTER TEST: " + bcolors.PASSED + "PASSED")
    else:
        print("ALTITUDE FILTER TEST: " + bcolors.FAILED + "FAILED")
else:
    print("ALTITUDE FILTER TEST: " + bcolors.FAILED + "FAILED")

driver.quit()
