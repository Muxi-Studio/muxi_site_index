module.exports = {
	template: "swig", // whatever template engine you like
	mock: "/mock/mock.json", // dir for mock data
	webpack: true, // flag for using webpack or not
	proxy: {
		route: "/ecard",
		origin: "http://console.ccnu.edu.cn"
	},
	staticDir: "/static",
	templateDir: "/template",
}
