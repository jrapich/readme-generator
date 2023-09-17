const { makeBadge, ValidationError } = require('badge-maker');
function MakeBadgeFormat(label, message, color) {
  this.label = label;
  this.message=message;
  this.color=color;
}

//renders a badge containing license information, function provided by badge-maker package
//otherwise returns an empty string if no license provided
function renderLicenseBadge(license) {
  if (license) {
    const format = new MakeBadgeFormat("License", license, "blue");
    return makeBadge(format);
  } else {
    return "";
  }
}

function renderOtherBadge(package, version){
  if (package && version) {
    const format = new MakeBadgeFormat(package, version, "blue");
    return makeBadge(format);
  } else {
    return "";
  }
}

//export it to the rest of the application
module.exports = {renderLicenseBadge, renderOtherBadge};