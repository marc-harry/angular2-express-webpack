var todosController = (function () {
    function todosController() {
    }
    todosController.index = function (req, res) {
        console.log('Todos endpoint');
        res.json('Todos');
    };
    return todosController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = todosController;
