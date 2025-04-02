import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

/*config file*/
export default [
	index("./routes/trailer.tsx"),
	layout("./routes/layout.tsx", [
		route("home", "./routes/home.tsx"),
	]),
] satisfies RouteConfig;
