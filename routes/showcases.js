module.exports = function () {
	var showcase = require('../schemas/showcase');
	var region = require('../schemas/region');
	var functions = {};

	//GET the index view of a showcases
	functions.index = function(req,res){
		res.render('showcase/index', { title: 'Organizations list' ,user:req.user});
	}

	//GET the list of showcases
	functions.list = function(req,res){
		showcase.find({},function (err, data) {
			   res.json(data);
		});		
	}

	//GET the list of showcases by Biin ID
	functions.listByBiin=function(req,res){
		var biinIdentifier = req.param("biin");
		region.findOne({"biins.identifier":biinIdentifier},{"biins.$.showcaseIdentifier":1},function (err, data) {
					   if(data){
					   		var showcaseParam=data.biins[0].showcaseIdentifier.toString();
					   		showcase.findOne({"identifier":showcaseParam},'',function(err,dataShowCase){
					   			res.json({data:dataShowCase});
					   		});
					   	}else
					   		res.json({data:null});	   
				});	
	}

	return functions;
}