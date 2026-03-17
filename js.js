db.createCollection("nonFiction",{
    validator:{
        $jsonSchema:{
            required:["name","price"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"name should be a string"
                },
                price:{
                    bsonType:"number",
                    description:"price should be a number"
                }
            }
        }
    },
    validationAction:"error"
})

db.runCommand({
    collMod:"nonFiction",
    validator:{
        $jsonSchema:{
            required:["name","price","author"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"should be a string"
                },
                price:{
                    bsonType:"number",
                    description:"should be a number"
                },
                author:{
                    bsonType:"string",
                    description:"should be a string"
                }
            }
        }
    }
})




db.runCommand(
    {
        collMod:"random",
        validator:{
            $jsonSchema:{
                required:["name"],
                properties:{
                    bsonType:"string",
                    description:"should be a string"
                }
            }
        }
    }
)