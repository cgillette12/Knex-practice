'use strict';
const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.request = supertest;

describe('Articles service object', function () {
  describe('getALLArticles()', () => {
    it('resolves all articles from \'blogful_articles\' table', () => {
      //test
    });
  });
});