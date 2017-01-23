ace.define("ace/theme/twilight",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-twilight";
exports.cssText = ".ace--facebook .ace_gutter {\
  background: #263238;\
  color: rgb(117,128,142)\
}\
.ace--facebook .ace_print-margin {\
  width: 1px;\
  background: #e8e8e8\
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
  background: #2F374D\
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
