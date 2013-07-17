/**
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * 
 * Copyright
 * 
 * Pierangelo Mancusi <pierangelo.mancusi@gmail.com>
 * 
 * date 15:56:26, 17/lug/2013
 * 
 */

/**
 * View Mediator responsible to rise View's handlers
 * 
 */
function ViewMediator() {
    var _className = "ViewMediator";
    logger.getDebug() ? console.log(_className + " on.") : false;
}

// ///////////////////////////////////////////////////////
//
// Methods
//
// ///////////////////////////////////////////////////////

/**
 * Show loading spinner: "loading..."
 * 
 * @param value:boolean
 */
function showLoding(value) {

    $("body").append('<div id="test" style="" class="" ></div>');

}
