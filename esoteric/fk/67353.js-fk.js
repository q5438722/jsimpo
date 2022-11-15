/** @type {import("../../../").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	stats: {
		ids: !![],
		reasons: ![],
		modules: ![],
		chunks: !![],
		chunkRelations: !![],
		chunkModules: !![],
		dependentModules: !![],
		chunkOrigins: !![]
	}
};
