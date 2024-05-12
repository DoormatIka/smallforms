/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p4w3ejio8wiyxby")

  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p4w3ejio8wiyxby")

  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
