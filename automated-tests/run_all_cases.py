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

controls_working = controls_working()
zoom_working = zoom_working()
altitude_filter_working = altitude_filter_working()
object_filter_working = object_filter_working()
timeline_working = timeline_working()
optimalization_working = optimalization_working()
reload_working = reload_working()
language_working = language_working()

driver.quit()

test_result("CONTROLS", controls_working)
test_result("ZOOM", zoom_working)
test_result("ALTITUDE FILTER", altitude_filter_working)
test_result("OBJECT FILTER", object_filter_working)
test_result("TIMELINE", timeline_working)
test_result("OPTIMALIZATION", optimalization_working)
test_result("RELOAD", reload_working)
test_result("LANGUAGE", language_working)