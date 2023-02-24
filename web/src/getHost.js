import config from "./config.json";

export default function getHost() {
	const env = config["environment"];
	return config[`${env}-host`];
}
