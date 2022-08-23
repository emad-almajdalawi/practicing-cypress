/// <reference types="@shelex/cypress-allure-plugin" />
const { lighthouse, prepareAudit } = require('cypress-audit');

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
	// create new config settings
	const configOverride = {};
	if (config.userAgent === 'mobile') {
		configOverride.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 CriOS/92.0.4515.90 Mobile/15E148 Safari/604.1';
		configOverride.viewportWidth = 414;
		configOverride.viewportHeight = 736;
	} else if (config.userAgent === 'desktop') {
		configOverride.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 CriOS/92.0.4515.90 Safari/605.1.15';
		configOverride.viewportWidth = 1920;
		configOverride.viewportHeight = 800;
	}

	return { ...config, ...configOverride };
};
