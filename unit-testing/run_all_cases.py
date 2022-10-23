from functions import *
from test_controls import controls_working
from test_optimalization import optimalization_working
from test_zoom import zoom_working
from test_language import language_working
from test_reload import reload_working
from test_altitude_filter import altitude_filter_working
from test_object_filter import object_filter_working
from test_timeline import timeline_working
from test_optimalization import optimalization_working

def main():
    logging.basicConfig(filename="tests.log", level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s', filemode="w", force=True)
    
    logging.info("RUNNING ALL TESTS")
    
    controls = controls_working("CONTROLS")
    zoom = zoom_working("ZOOM")
    altitude_filter = altitude_filter_working("ALTITUDE FILTER")
    object_filter = object_filter_working("OBJECT FILTER")
    timeline = timeline_working("TIMELINE")
    optimalization = optimalization_working("OPTIMALIZATION")
    reload = reload_working("RELOAD")
    language = language_working("LANGUAGE")

    driver.quit()

    logging.info("TEST FINISHED")
    logging.info("==============")
    logging.info("TEST RESULTS:")
    test_result("CONTROLS", controls)
    test_result("ZOOM", zoom)
    test_result("ALTITUDE FILTER", altitude_filter)
    test_result("OBJECT FILTER", object_filter)
    test_result("TIMELINE", timeline)
    test_result("OPTIMALIZATION", optimalization)
    test_result("RELOAD", reload)
    test_result("LANGUAGE", language)
    
if __name__ == "__main__":
    main()