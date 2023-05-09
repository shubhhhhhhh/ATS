const model = require('../model/Model')
module.exports = {
    async data(req, res) {
        const response = {};
        console.log(req.body)
        try {
            const find = await model.find({
                $and: [
                    { phone_number: req.body.phone_number },
                    { volunteer_no: req.body.volunteer_no },
                    { campaign_id: req.body.campaign_id },
                    { agent_id: req.body.agent_id },
                ]
            })
            const filter = find.filter((ele) => {
                var arr = ele.date;
                var a = arr.split("-");
                let newArr = [];
                for (let i = a.length - 1; i >= 0; i--) {
                    newArr.push(a[i])
                };
                let date = newArr.join('');
                console.log('ok')
                if (date >= req.body.call_date_from) {
                    console.log('ok2')
                    if (date <= req.body.call_date_to) {
                        console.log(date)
                        return ele
                    }
                }
            })
            console.log(filter)
            response.data = filter
        }
        catch (err) {
            response.error = err
        }
        res.json(response)
    }
}