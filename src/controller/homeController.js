import connection from "../config/connectDB";

let getHomepage = (req, res) => {
  //logic
    let data = [];
    connection.query("SELECT * FROM `users`", 
    function (err, results, fields) {
        data = results.map((row) => {
        return row;
    });
    return res.render("index.ejs", {dataUser: data, test:'test abc string'});
  })

  
};

module.exports = {
  getHomepage,
};
