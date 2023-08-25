const { makeBadge, ValidationError } = require('badge-maker');
function MakeBadgeFormat(label, message, color) {
  this.label = label;
  this.message=message;
  this.color=color;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const format = new MakeBadgeFormat("License", license, "blue");
    return makeBadge(format);
  } else {
    return "";
  }
}

module.exports = renderLicenseBadge;