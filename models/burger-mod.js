const model = require('../config/orm')

exports.burgMod = {
	all: function(callback) {
		model.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	create: function(cols, vals, callback) {
		model.insert("burgers", cols, vals, function(res) {
			callback(res);
		});
	},
	update: function(colVals, condition, callback) {
		model.update("burgers", colVals, condition, function(res) {
			callback(res);
		});
	}
};