<h1>Python + Selenium Webdriver testing</h1>

This folder is desired for running automatic tests of basic functions and use cases that Space Guardian has using Python and Selenium Webdriver.

- REQUIRED: Python (tested using Python 3.10), Selenium Webdriver (pip install selenium) and browser driver used for testing are required. (Tested using Chrome Webdriver: https://chromedriver.chromium.org/),
- in file "init_driver/init_driver.py" overwrite absolute path to your webdriver.exe file,
- file "functions/functions.py" contains all important functions, which are used in tests cases,
- to test whole application, run "run_all_cases.py" (approx 15 minutes) and look for result in console or log file located in "log" folder,
- after test is finished, results are displayed both in standard output (console) and <b>log/tests.log</b> file. (file also contains logs of whole testing process).