var people_model_1 = require('../models/people.model');
var peopleController = (function () {
    function peopleController() {
    }
    peopleController.index = function (req, res) {
        people_model_1.default.find({}, function (err, people) {
            res.send(people);
        });
    };
    return peopleController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = peopleController;
