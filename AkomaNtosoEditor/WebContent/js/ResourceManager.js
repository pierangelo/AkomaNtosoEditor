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
 * date 13:17:11, 17/lug/2013
 * 
 */

/**
 * 
 * Store the current language
 */
var locale;

/**
 * Constructor
 * 
 * @returns
 */
function ResourceManager() {

    var _className = "ResourceManager";
    logger.getDebug() ? console.log(_className + " on.") : false;
}

// ///////////////////////////////////////////////////////////////////
//
// Methods
//
// //////////////////////////////////////////////////////////////////

ResourceManager.prototype = {

    /**
     * Return the string associated
     * 
     * @param label
     * @returns
     */
    getLabel : function(label) {

        locale = getLocale();

        switch (locale) {

        case "it":

            return it[label];
            break;

        // for include "english" language
        // define an associative array in a file (es: labels_en)...
        case "en":

            return en[label];
            break;

        default:

            return it[label];
            break;

        }

    }

};

/**
 * Query the browser to get current language
 * 
 * @returns
 */
function getLocale() {

    return locale = navigator.language;

}
