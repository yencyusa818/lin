const ContactUs= require('../model/contactUs')

exports.createContact= async (req,res, next) =>{
    try {
        // const {name, email, subject}= req.body
        const name= req.body.name
        const email= req.body.email
        const subject= req.body.subject
        // console.log(name, email, subject)
        const contactUs = await ContactUs.create({
            name,
            email,
            subject
        })
        // res.status(200).json({
        //     msg:'sucess true',
        //     name,
        //     email,
        //     subject
        // })
        res.redirect('/');
    } catch (err) {
        console.log(err)
    }
}

exports.getcontact= async (req, res, next) =>{
    try {
        const contacts= await ContactUs.find()
        // console.log(contacts)
        res.render('adminData', {
           contactsData:contacts
        })
    } catch (err) {
        console.log(err)
    }
}