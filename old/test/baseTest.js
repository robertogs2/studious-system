// to run: node node_modules/jasmine/bin/jasmine.js test/unitTest.js 

//Initializing variables
const mysqlTool = require('../src/tools/mysql-tool');
const dotenv = require('dotenv');
dotenv.config();
var m = 0;

// Test to execute
function executeQuery(query, done) {
    let pool = mysqlTool.getPool();
    pool.query(query, function (err, rows, fields) {
        if (err) throw err;
        m = rows[0].M
        done();
    });
}

// Test execution
describe('Data base connection', function(){

	beforeEach(function (done) {
        executeQuery('SELECT 2+2 AS M', done);
    });
    it('Should be working', function (done) {
	    expect(m).toEqual(4);
	    done();
    });
});
