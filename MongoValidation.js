db.createCollection("nonfiction",{
    validator:{
        $jsonSchema:{
            required:["name","price","author"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"must be a string and required"
                },
                price:{
                    bsonType:"number",
                    description:"must be a number and required"
                },
                author:{
                    bsonType:'array',
                    description:"must be an array and is required",
                    items:{
                        bsonType:'object',
                        required:["name","email"],
                        properties:{
                            name:{
                                bsonType:'string'
                            },
                            email:{
                                bsonType:"string"
                            }
                        }

                    }
                }
            }

        }

    },
    validationAction:"error"
})

db.runCommand({
    collMod:'nonfiction',
    validator:{
        $jsonSchema:{
            required:["name","price","author"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"must be a string and required"
                },
                price:{
                    bsonType:"number",
                    description:"must be a number and required"
                },
                author:{
                    bsonType:'array',
                    description:"must be an array and is required",
                    items:{
                        bsonType:'object',
                        required:["name","email"],
                        properties:{
                            name:{
                                bsonType:'string'
                            },
                            email:{
                                bsonType:"string"
                            }
                        }

                    }
                }
            }

        }

    },
    validationAction:"error"
})