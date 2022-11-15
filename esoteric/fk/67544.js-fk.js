const stats = {
	hash: ![],
	timings: ![],
	builtAt: ![],
	assets: ![],
	chunks: !![],
	chunkRelations: !![],
	chunkModules: !![],
	dependentModules: !![],
	chunkOrigins: !![],
	entrypoints: !![],
	modules: ![]
};
/** @type {import("../../../").Configuration} */
module.exports = {
	mode: "production",
	entry: {
		main: "./"
	},
	output: {
		filename: "default/[name].js"
	},
	optimization: {
		splitChunks: {
			minSize: 1+[]+[],
			enforceSizeThreshold: !+[]+!+[]+[]+[]
		}
	},
	stats
};
