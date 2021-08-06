//Jagan pdf model
module.exports = (sequelize, Sequelize) => {
	const PdfTable = sequelize.define('pdftable', {
    
        pdf: {
      type: Sequelize.STRING
    }
	 
	});
	
	return PdfTable;
}