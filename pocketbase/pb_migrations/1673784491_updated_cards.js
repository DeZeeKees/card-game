migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oq2p01lf5wmibwh")

  // remove
  collection.schema.removeField("bnlqont4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2tkt4o0b",
    "name": "rarity",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "usd5jvnslv05qss",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aluvt25w",
    "name": "type",
    "type": "relation",
    "required": true,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnlqont4",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("2tkt4o0b")

  // update
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
})
