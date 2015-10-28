import person from '../models/people.model';

export default class peopleController {

    static index = (req, res) => {
        person.find({}, (err, people) => {
            res.send(people);
        });
    };
}