const{Schema,model}=require('mongoose')

const schema=new Schema({
    Adres: {type: String, required: true, unique: false},
    Price: {type: Number, required: true, unique: false},
    IMG: {type: String, required: true, unique: false},
    RommsCount:{type: Number, required: true, unique: false},
    Square:{type: Number, required: true, unique: false},
    Floor:{type: Number, required: true, unique: false},
    Description:{type: String, required: true, unique: false}
})

module.exports=model('Product',schema)