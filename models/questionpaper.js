module.exports = (sequelize, Sequelize) => {
	const Questionpaper = sequelize.define('questionpaper', {
    
        qstpaperpdf: {
      type: Sequelize.STRING
    },
	  datetime: {
		  type: Sequelize.STRING
	  },
	 
	});
	
	return Questionpaper;
}