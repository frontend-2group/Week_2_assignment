const express = require('express');
const app = express();


// express body-parser
app.use(express.json());   // for parsing application/jason
app.use(express.urlencoded({ extended: true }));  // for parsing


// productList
let id = 2;
const productList = [{
    id: 1,
    thumbNail: null,
    brandName: '에이치덱스',
    discountRate: '40%',
    currentAmount: '500',
    maxAmount: '1000',
    discountBar: '50%',
    currentText: '500개 판매됨',
}];

// routing
app.get('/app/product', (req, res) => {
    res.json(productList);
})
app.post('/app/product', (req, res) => {
    const { thumbNail, brandName, currentAmount, maxAmount, discountRate, discountBar, currentText } = req.body;
    // data check
    console.log('req.body :', req.body);

    productList.push({
        id: id++,
        thumbNail,
        brandName,
        currentAmount,
        maxAmount,
        discountRate,
        discountBar,
        currentText,
    });
    return res.send('success');
})

// localhost: 4000
app.listen(4000, () => {
    console.log('server start!');
});