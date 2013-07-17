/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Copyright  10/07/2013
 * 
 * Pierangelo Mancusi <pierangelo.mancusi@gmail.com>
 * 
 */

var logger = new Logger().setDebug(true);

var Utility = new Utility();
var ResourceManager = new ResourceManager();
var DOM = new DOM();
var applicationModel = new ApplicationModel();
var viewMediator = new ViewMediator();

var startupController = new StartupController();

/**
 * Boot application
 */
function StartupController() {

    var _className = "StartupController";
    logger.getDebug() ? console.log(_className + " on.") : false;

    /**
     * init
     */
    $(document).ready(
            function() {

                // test logging system
                logger.getDebug() ? console.log(ResourceManager.getLabel("file loaded") + " jquery-" + $().jquery
                        + ".js") : false;

                // startup application
                logger.getDebug() ? console.log("Startup Application...") : false;

                logger.getDebug() ? console.log("Versione " + applicationModel.getVersion()) : false;

            });
}
