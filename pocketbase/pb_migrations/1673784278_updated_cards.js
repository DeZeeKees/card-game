migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oq2p01lf5wmibwh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aluvt25w",
    "name": "type",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "collectionId": "xgbrxtehfacc5qv",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oq2p01lf5wmibwh")

  // remove
  collection.schema.removeField("aluvt25w")

  return dao.saveCollection(collection)
})
