const http = require('http');
const response = {
    "success": true,
    "data": [
        { "module_id": 1, "module_name": "OOP", "module_code": "CS2022", "documents": [{ "id": 1, "document_name": "oop 1", "description": "lecture 1 of oop", "date_created": "2019-09-28T18:30:00.000Z", "document_url": "https://drive.google.com/open?id=1riVOSi-AafNMhx6rB5cBYdGkIpgf7SYz", "module_id": 1, "deleted": 0, "module_code": "CS2022", "module_name": "OOP", "attrs": ["id", "document_name", "description", "date_created", "document_url", "module_id", "deleted", "module_code", "module_name"], "table": "document" }, { "id": 2, "document_name": "oop doc 2", "description": "lecture 2", "date_created": "2019-09-28T18:30:00.000Z", "document_url": "https://drive.google.com/open?id=1riVOSi-AafNMhx6rB5cBYdGkIpgf7SYz", "module_id": 1, "deleted": 0, "module_code": "CS2022", "module_name": "OOP", "attrs": ["id", "document_name", "description", "date_created", "document_url", "module_id", "deleted", "module_code", "module_name"], "table": "document" }] }, { "module_id": 2, "module_name": "Electronics", "module_code": "EN2040", "documents": [{ "id": 3, "document_name": "electronics 1", "description": "lecture 1", "date_created": "2019-09-28T18:30:00.000Z", "document_url": "www.google.lk", "module_id": 2, "deleted": 0, "module_code": "EN2040", "module_name": "Electronics", "attrs": ["id", "document_name", "description", "date_created", "document_url", "module_id", "deleted", "module_code", "module_name"], "table": "document" }, { "id": 16, "document_name": "remote1", "description": "document from remote", "date_created": "0000-00-00", "document_url": "google.lk", "module_id": 2, "deleted": 0, "module_code": "EN2040", "module_name": "Electronics", "attrs": ["id", "document_name", "description", "date_created", "document_url", "module_id", "deleted", "module_code", "module_name"], "table": "document" }] }, { "module_id": 3, "module_name": "OS", "module_code": "CS2030", "documents": [{ "id": 4, "document_name": "OS 1", "description": "OS 1st lecture", "date_created": "2019-10-07T18:30:00.000Z", "document_url": "abc.com", "module_id": 3, "deleted": 0, "module_code": "CS2030", "module_name": "OS", "attrs": ["id", "document_name", "description", "date_created", "document_url", "module_id", "deleted", "module_code", "module_name"], "table": "document" }] }
    ]
}

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', ['*']);
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
});

server.listen(
    port,
    hostname,
    () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    }
);

// https://docs.google.com/presentation/d/e/2PACX-1vSxsm65tT3ULM87pajua_SqDKIa056vnWdRkyhVqN9EP2cRGaGa8bE6ESyi55mYRJxWGHLrJHKHEp78/pub?start=false&loop=false&delayms=3000
// https://docs.google.com/presentation/d/e/2PACX-1vSxsm65tT3ULM87pajua_SqDKIa056vnWdRkyhVqN9EP2cRGaGa8bE6ESyi55mYRJxWGHLrJHKHEp78/embed?start=false&loop=false&delayms=3000
