---
path: '/basics/sql'
cate: 'ba'
date: '2018-10-24'
keywords: 'database, sql'
title: 'Basic SQL'
---

Basic SQL Queries:

Select all rows from a table:

```
SELECT * FROM Tablename
```

Select only certain columns:

```
SELECT column1, column2, ... FROM Tablename
```

WHERE/ WHERE NOT:
Can use "AND"/"OR" for multiple conditions.

```
SELECT * FROM Tablename WHERE (NOT) condition
```

ORDER BY:

```
SELECT * FROM Tablename ORDER BY column
```

Add row to a table:

```
INSERT INTO Tablename VALUES (value1, value2, ...)
```

IS NULL/ IS NOT NULL:
Optional table fields can be null which cannot be tested with comparison operators. Use IS NULL/IS NOT NULL.

### Resources:

1. W3schools: https://www.w3schools.com/sql/default.asp
