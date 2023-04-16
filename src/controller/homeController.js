import connection from "../config/connectDB";

let getHomepage = (req, res) => {
  //logic
    let data = [];
    connection.query("SELECT * FROM `users`", 
    function (err, results, fields) {
        console.log("check my sql");
        console.log(results); // results contains rows returned by server
        data = results.map((row) => {
        return row;
    });
    return res.render("test/index.ejs", {dataUser: JSON.stringify(data)});
  })

  
};

module.exports = {
  getHomepage,
};
