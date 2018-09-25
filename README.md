# Line Segment Intersection

[![npm version](https://img.shields.io/npm/v/line-seg-intersect.svg)](https://www.npmjs.com/package/line-seg-intersect)
[![build status](https://travis-ci.org/flekschas/line-seg-intersect.svg?branch=master)](https://travis-ci.org/flekschas/line-seg-intersect)
[![code style prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Fast testing whether two line segments intersect

## Install

```
npm i line-seg-intersect
```

## API

### `const isIntersecting = lineSegIntersect(x1, x2, x3, x4, y1, y2, y3, y4)`

Checks if two line segments `(x1,y1)-(x2,y2)` and `(x3,y3)-(x4,y4)` are intersecting.

**Returns** `true` if the two line segments intersect.
