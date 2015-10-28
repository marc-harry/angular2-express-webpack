

export default class todosController {

    static index = (req, res) => {
        console.log('Todos endpoint');
        res.json('Todos');
    };


}