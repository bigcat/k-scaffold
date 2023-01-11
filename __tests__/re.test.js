import { describe,it,expect } from 'vitest';
import { k } from './testFramework';

const unescapedString = 'Some string';
const escapedString = k.RE.escape(unescapedString);
const unescapedObject = {test:'data'};
const escapedObject = k.RE.escape(unescapedObject);

describe('RE.escape',()=>{
  it('Should base64 escape a string',()=>{
    expect(escapedString).toMatchInlineSnapshot('"KSTRINGU29tZSBzdHJpbmc="');
  });
  it('Should base64 escape an object',()=>{
    expect(escapedObject).toMatchInlineSnapshot('"KDATAeyJ0ZXN0IjoiZGF0YSJ9"');
  });
});
describe('RE.unescape',()=>{
  it('Should base64 escape a string',()=>{
    expect(k.RE.unescape(escapedString)).toStrictEqual(unescapedString);
  });
  it('Should base64 escape an object',()=>{
    expect(k.RE.unescape(escapedObject)).toStrictEqual(unescapedObject);
  });
});