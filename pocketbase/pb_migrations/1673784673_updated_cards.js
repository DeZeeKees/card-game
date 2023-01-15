migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oq2p01lf5wmibwh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjctfewk",
    "name": "cost",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fg0upmpn",
    "name": "attack",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7rwggsx",
    "name": "health",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 20
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oq2p01lf5wmibwh")

  // remove
  collection.schema.removeField("tjctfewk")

  // remove
  collection.schema.removeField("fg0upmpn")

  // remove
  collection.schema.removeField("o7rwggsx")

  return dao.saveCollection(collection)
})
