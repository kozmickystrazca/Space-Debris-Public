from sys import stdout
from init_driver.init_driver import *
from functions.functions import *
from test_cases.test_altitude_filter import altitude_filter_working
from test_cases.test_controls import controls_working
from test_cases.test_language import language_working
from test_cases.test_object_filter import object_filter_working
from test_cases.test_optimalization import optimalization_working
from test_cases.test_reload import reload_working
from test_cases.test_timeline import timeline_working
from test_cases.test_zoom import zoom_working

def main():
    logging.basicConfig(filename="./log/tests.log", level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s', filemode="w", force=True)
    
    logging.getLogger().addHandler(logging.StreamHandler(stdout))
    
    logging.info("RUNNING ALL TESTS")
    
    logging.info("RUNNING CONTROLS TEST")
    controls = controls_working("CONTROLS")
    logging.info("CONTROLS TEST FINISHED")
    
    logging.info("RUNNING ZOOM TEST")
    zoom = zoom_working("ZOOM")
    logging.info("ZOOM TEST FINISHED")
    
    logging.info("RUNNING ALTITUDE FILTER TEST")
    altitude_filter = altitude_filter_working("ALTITUDE FILTER")
    logging.info("ALTITUDE FILTER TEST FINISHED")
    
    logging.info("RUNNING OBJECT FILTER TEST")
    object_filter = object_filter_working("OBJECT FILTER")
    logging.info("OBJECT FILTER TEST FINISHED")
    
    logging.info("RUNNING TIMELINE TEST")
    timeline = timeline_working("TIMELINE")
    logging.info("TIMELINE TEST FINISHED")
    
    logging.info("RUNNING OPTIMALIZATION TEST")
    optimalization = optimalization_working("OPTIMALIZATION")
    logging.info("OPTIMALIZATION TEST FINISHED")
    
    logging.info("RUNNING RELOAD TEST")
    reload = reload_working("RELOAD")
    logging.info("RELOAD TEST FINISHED")
    
    logging.info("RUNNING LANGUAGE TEST")
    language = language_working("LANGUAGE")
    logging.info("LANGUAGE TEST FINISHED")

    driver.quit()

    logging.info("ALL TESTS FINISHED")
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