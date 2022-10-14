from functions import *

# compare current year and new year after changing it
def compare_years(previousYear, currentYear):

    choose_year(previousYear)

    OBJECT_COUNT = get_deb_count() + get_sat_count()

    choose_year(currentYear)

    new_object_count = get_deb_count() + get_sat_count()

    if (new_object_count > OBJECT_COUNT):
        return True
    else:
        return False

# initialize variable checking for validity of timeline to False
timeline_working = False

run_app()

# slide over these years
years = [1956, 1967, 1978, 1989, 2000, 2011, 2022]

# choose default year
choose_year(1956)

# if active objects in year 0 == 0, run throught loop over all selected years and compare them together
if (get_deb_count() + get_sat_count() == 0):
    timeline_working = True

    x = 0

    while (x + 1 < len(years)):
        timeline_working = compare_years(years[x], years[x + 1])

        if (not timeline_working):
            break

        x = x + 1
else:
    timeline_working = False

# if compare_years passed for all selected years, test passed
if (timeline_working):
    print("TIMELINE TEST: " + bcolors.PASSED + "PASSED")

else:
    print("TIMELINE TEST: " + bcolors.FAILED + "FAILED")

driver.quit()
