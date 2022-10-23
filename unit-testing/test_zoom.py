from functions import *

def zoom_working(test_name):
    logging.info("RUNNING ZOOM TEST")
    
    # initialize variables checking for validity of zoom to False
    zoom_in_working = False
    zoom_out_working = False

    # get default distance at the start of the application
    DEFAULT_DISTANCE = get_distance(test_name)

    # zoom in 3 times with 0 delay
    zoom_in(test_name, 3, 0)

    # get new zoomed in distance
    zoomed_in_distance = get_distance(test_name)

    # if zoomed in distance is smaller than default distance, try to zoom out and check the same for zoom out function
    if (DEFAULT_DISTANCE > zoomed_in_distance):
        zoom_in_working = True

        zoom_out(test_name, 6, 0)

        zoomed_out_distance = get_distance(test_name)

        if (DEFAULT_DISTANCE < zoomed_out_distance):
            zoom_out_working = True
        else:
            zoom_out_working = False

    else:
        zoom_in_working = False
    
    try:    
        return zoom_in_working and zoom_out_working
    finally:
        logging.info("ZOOM TEST FINISHED")