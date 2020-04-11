const objoracle = require('oracledb');
cns = {
    user: "alejandro",
    password: "1234",
    connectString: "172.17.0.2/ORCLCDB"
};

function error(err, rs, cn) {
    if (err) {
        console.log(err.message);
        rs.contentType('application/json').status(500);
        rs.send(err.message);

        if (cn != null) close(cn);
        return -1;
    }
    else
        return 0;

}
function close(cn) {
    cn.release(
        function (err) {
            if (err) {
                console.err(err.message);
            }
        }
    );
}

async function open(sql,binds, dml, rs) {
    let cn = await objoracle.getConnection(cns);
    if (error(cn.err, rs, null) == -1) return;
    let result = await cn.execute(sql, binds, { autoCommit: dml });
    if (error(result.err, rs, cn) == -1) return;
    close(cn);
    return result;
}

exports.open = open;
exports.close = close;
