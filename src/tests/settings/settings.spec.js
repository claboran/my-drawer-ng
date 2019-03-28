var reflect = require('reflect-metadata');
var settings = require('../../app/settings/settings.service');
// A sample Jasmine test
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        var settingsService = new settings.SettingsService();
        var res = settingsService.craeteDoc();
        expect(res).toBe('Fortune');
    });
});
