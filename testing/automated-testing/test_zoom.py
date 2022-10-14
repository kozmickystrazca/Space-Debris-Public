from functions import *

# initialize variables checking for validity of zoom to False
zoom_in_working = False
zoom_out_working = False

run_app()

print("Running ZOOM test")

time.sleep(2)

# get default distance at the start of the application
DEFAULT_DISTANCE = get_distance()

# zoom in 3 times with 0 delay
zoom_in(3, 0)

# get new zoomed in distance
zoomed_in_distance = get_distance()

# if zoomed in distance is smaller than default distance, try to zoom out and check the same for zoom out function
if (DEFAULT_DISTANCE > zoomed_in_distance):
    zoom_in_working = True

    zoom_out(6, 0)

    zoomed_out_distance = get_distance()

    if (DEFAULT_DISTANCE < zoomed_out_distance):
        zoom_out_working = True
    else:
        zoom_out_working = False

else:
    zoom_in_working = False

# if both zoom in and zoom out are working, test passed
if (zoom_out_working and zoom_in_working):
    print("ZOOM TEST: " + bcolors.PASSED + "PASSED")
else:
    print("ZOOM TEST: " + bcolors.FAILED + "FAILED")

driver.quit()
