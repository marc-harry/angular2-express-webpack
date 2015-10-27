
export class peopleController {
    static index(req, res) {
        console.log('People endpoint');
        res.json('People');
    }
}