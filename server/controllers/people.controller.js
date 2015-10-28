import person from '../models/people.model';

export default class peopleController {

    static index = (req, res) => {
        console.log('People endpoint');
        res.json('People');
    };


}