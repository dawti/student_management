module.exports = (sequelize, Sequelize) => {
	const Pdftable = sequelize.define('pdftable', {
    
        pdf: {
      type: Sequelize.STRING
    }
	 
	});
	
	return Pdftable;
}