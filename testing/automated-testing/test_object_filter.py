from functions import *

# initialize filters working to False
satellite_filter_working = False
debris_filter_working = False

run_app()

print("Running OBJECT FILTER test")

time.sleep(2)

# get active objects count at the start of the application
DEFAULT_SAT_COUNT = get_sat_count()

DEFAULT_DEB_COUNT = get_deb_count()

# disable checkbox for satellites
switch_checkbox("+")

# get new satellite count
filtered_sat_count = get_sat_count()

# if satellite count is 0, toggle satellites back and check if active satellite count is same as in the start of the application
if (filtered_sat_count == 0):
    satellite_filter_working = True
    switch_checkbox("+")

    if (get_sat_count() == DEFAULT_SAT_COUNT):
        satellite_filter_working = True
    else:
        satellite_filter_working = False
else:
    satellite_filter_working = False

# disable checkbox for space debris
switch_checkbox("-")

# get new space debris count
filtered_deb_count = get_deb_count()

# if debris count is 0, toggle space debris back and check if space debris count is same as in the start of the application
if (filtered_deb_count == 0):
    debris_filter_working = True
    switch_checkbox("-")

    if (get_deb_count() == DEFAULT_DEB_COUNT):
        debris_filter_working = True
    else:
        debris_filter_working = False
else:
    debris_filter_working = False

# if both object filters are working, test passed
if (satellite_filter_working and debris_filter_working):
    switch_checkbox("+")
    switch_checkbox("-")

    if (get_deb_count() == get_sat_count() == 0):
        print("OBJECT FILTER TEST: " + bcolors.PASSED + "PASSED")
    else:
        print("OBJECT FILTER TEST: " + bcolors.FAILED + "FAILED")

driver.quit()
