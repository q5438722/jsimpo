import { toLower } from "lodash";
const getInputType = (e = "") => {
  switch (toLower(e)) {case "boolean":
      return "bool";case "biginteger":
      return "text";case "decimal":case "float":case "integer":
      return "number";case "date":case "datetime":case "time":
      return e;case "email":
      return "email";case "enumeration":
      return "select";case "password":
      return "password";case "string":
      return "text";case "text":
      return "textarea";case "media":case "file":case "files":
      return "media";case "json":
      return "json";case "wysiwyg":case "WYSIWYG":case "richtext":
      return "wysiwyg";case "uid":
      return "uid";default:
      return e || "text";}
};

export default getInputType;
