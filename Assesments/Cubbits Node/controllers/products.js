exports.index = (req, res) => res.render('products',{title:"My Shop"})

exports.mens = (req, res) => res.render('mens',{title:"Menswear"})
exports.womens = (req, res) => res.render('womens',{title:"Womenswear"})