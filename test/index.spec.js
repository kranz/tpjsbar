/* global describe, it, before */

import chai from 'chai';
import { TpJsBar } from '../lib/tpjsbar.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my TpSocket library', () => {
  before(() => {
    lib = new TpJsBar();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Barra-Tempest');
    });
  });
});

describe('Given an instance of my TpSocket library', () => {
  before(() => {
    lib = new TpJsBar();
  });
  describe('when I need the encoded name', () => {
    it('should return the base64 string', () => {
      expect(lib.encodedName).to.be.equal('QmFycmEtVGVtcGVzdA==');
    });
  });
});