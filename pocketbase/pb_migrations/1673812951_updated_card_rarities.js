migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usd5jvnslv05qss")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("usd5jvnslv05qss")

  collection.listRule = null

  return dao.saveCollection(collection)
})
