from functions import *

# initialize variable that checks if optimalization is working to False
less_filter_working = False

run_app()

print("Running LESS OBJECTS filter")

time.sleep(2)

# get active objects count at the start of the application
DEFAULT_SAT_COUNT = get_sat_count()

DEFAULT_DEB_COUNT = get_deb_count()

# enable optimalization (disabled defaultly)
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

if (less_filter_working):
    print("LESS OBJECTS FILTER TEST: " + bcolors.PASSED + "PASSED")
else:
    print("LESS OBJECTS FILTER TEST: " + bcolors.FAILED + "FAILED")

driver.quit()
