/**
 * 
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
 * date 18:36:54, 16/lug/2013
 * 
 */

/**
 * general property
 * 
 * default value=true
 */
var debug = true;

/**
 * 
 * Lightweith Logging System
 * 
 */
function Logger() {

    console.log("logging:" + debug);

}

// //////////////////////////////////////////////////
//
// Setter / Setters
//
// //////////////////////////////////////////////////

/**
 * global setting to I/O to console
 */
Logger.prototype.setDebug = function(value) {
    debug = value;

};

/**
 * global setting to I/O to console
 */
Logger.prototype.getDebug = function() {
    return debug;
};

// //////////////////////////////////////////////////
//
// Methods
//
// //////////////////////////////////////////////////

/**
 * 
 * Log to console if Logger.debug==true;
 * 
 * @param message
 * @deprecated
 * 
 * 
 */
Logger.prototype.log = function(className, message) {
    if (this.debug) {
        className ? className : "undefined";
        console.log("[" + className + "] " + message);
    }

};
