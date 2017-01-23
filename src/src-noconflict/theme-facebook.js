/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define("ace/theme/facebook",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace--facebook";
exports.cssText = ".ace--facebook .ace_gutter {\
  background: #263238;\
  color: rgb(117,128,142)\
}\
.ace--facebook .ace_print-margin {\
}\
.ace--facebook {\
  background-color: #263238;\
  color: #C3CEE3\
}\
.ace--facebook .ace_cursor {\
  color: #979E86\
}\
.ace--facebook .ace_marker-layer .ace_selection {\
  background: #1a1f29\
}\
.ace--facebook.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px #263238;\
  border-radius: 2px\
}\
.ace--facebook .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174)\
}\
.ace--facebook .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #FF0000\
}\
.ace--facebook .ace_marker-layer .ace_active-line {\
}\
.ace--facebook .ace_gutter-active-line {\
  background-color: #2F374D\
}\
.ace--facebook .ace_marker-layer .ace_selected-word {\
  border: 1px solid #1a1f29\
}\
.ace--facebook .ace_fold {\
  background-color: #8be9ee;\
  border-color: #C3CEE3\
}\
.ace--facebook .ace_keyword {\
  color: #FFFFFF\
}\
.ace--facebook .ace_keyword.ace_operator {\
  color: #E4EAF0\
}\
.ace--facebook .ace_keyword.ace_other.ace_unit {\
  color: #18C9C9\
}\
.ace--facebook .ace_constant.ace_language {\
  color: #E4EAF0\
}\
.ace--facebook .ace_constant.ace_numeric {\
  color: #18C9C9\
}\
.ace--facebook .ace_constant.ace_character {\
  color: #D5D5CA\
}\
.ace--facebook .ace_constant.ace_character.ace_entity {\
  color: #d67c9b\
}\
.ace--facebook .ace_constant.ace_other {\
  color: #18C9C9\
}\
.ace--facebook .ace_support.ace_function {\
  color: #8be9ee\
}\
.ace--facebook .ace_support.ace_constant {\
  color: #E4EAF0\
}\
.ace--facebook .ace_support.ace_constant.ace_property-value {\
  color: #C3CEE3\
}\
.ace--facebook .ace_support.ace_class {\
  color: #E3C78A\
}\
.ace--facebook .ace_support.ace_type {\
  font-style: italic;\
  color: #d3afc5\
}\
.ace--facebook .ace_storage {\
  color: #FFFFFF\
}\
.ace--facebook .ace_storage.ace_type {\
  font-style: italic;\
  color: #d3afc5\
}\
.ace--facebook .ace_invalid.ace_illegal {\
  color: #E889B5;\
  background-color: #722C40\
}\
.ace--facebook .ace_string.ace_regexp {\
  color: #18C9C9\
}\
.ace--facebook .ace_comment {\
  color: #7081BE\
}\
.ace--facebook .ace_variable {\
  color: #8be9ee\
}\
.ace--facebook .ace_variable.ace_language {\
  color: #B3B2A2\
}\
.ace--facebook .ace_variable.ace_parameter {\
  font-style: italic;\
  color: #18C9C9\
}\
.ace--facebook .ace_entity.ace_other.ace_attribute-name {\
  color: #96fbff\
}\
.ace--facebook .ace_entity.ace_name.ace_function {\
  color: #8be9ee\
}\
.ace--facebook .ace_entity.ace_name.ace_tag {\
  color: #8db3ff\
}\
.ace--facebook .ace_markup.ace_heading {\
  color: #C97595\
}\
.ace--facebook .ace_markup.ace_heading.ace_1 {\
  color: #CC7093\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
