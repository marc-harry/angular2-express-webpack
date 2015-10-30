import todo from '../models/todo.model';

export default class todosController {

    static index = (req, res) => {
        todo.find({}, (err, todos) => {
            res.send(todos);
        });
    };

    static post = (req, res) => {
        var newTodo = new todo(req.body);
        newTodo.save((err, result) => {
            if (err) console.log(err);
            res.sendStatus(204);
        });
    };
}