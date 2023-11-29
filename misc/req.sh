#!/bin/sh

echo "create new"

curl -XPOST -H "Content-type: application/json" -d '{"name":"orange","description":"fresh orange","price":4000,"quantity":10}' 'http://localhost:3000/api/v1/products'

echo "get all"

curl -XGET 'http://localhost:3000/api/v1/products'

echo "get by ID"

curl -XGET 'http://localhost:3000/api/v1/products/1'

echo "update"

curl -XPUT -H "Content-type: application/json" -d '{"name":"banana","description":"fresh banana","price":10000,"quantity":100}' 'http://localhost:3000/api/v1/products/1'

echo "delete"

curl -XDELETE 'http://localhost:3000/api/v1/products/1'