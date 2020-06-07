const TestBugger = require('test-bugger');
const testBugger = new TestBugger({fileName: __filename});


/**
 * This class provides method which are responsible for
 * all the functions of application
 **/
class handler {

    /**
     * @async
     * Represents a alive.
     * @Function
     * @param {json} req - Request comming.
     * @param {json} res - Reponse.
     * @description - This function is for test aliveness of the api.
     */
    alive(req, res) {
        testBugger.informLog("Rest API...! alive ok");
        res.status(202).send(true)
    };

}
module.exports = handler;
