const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'report.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    // In CI we don't want to open a browser/tab automatically.
    launchReport: false,
    metadata: {}
};

reporter.generate(options);