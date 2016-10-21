
var reset = function() {
	cy.reset();
}	


var png = function() {
var png64 = cy.png();
window.open(png64,'_blank');
// put the png data in an img tag
// $('#myimg').attr('src', png64);
}
