/* @flow */

import RSSItem, { RSSCategory } from './RSSItem';
import ContentChild, { missingRequiredDataError } from './RSSCore';

import type moment from 'iflow-moment';

/**
 * Base RSS feed specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html
 */
export default class RSSFeed {
  constructor(
    title: ContentChild<string>,
    link: ContentChild<string>,
    description: ContentChild<string>,
    items?: Set<RSSItem> = new Set([]),
    version?: ?ContentChild<string>,
    language?: ?ContentChild<string>,
    copyright?: ?ContentChild<string>,
    managingEditor?: ?ContentChild<string>,
    webMaster?: ?ContentChild<string>,
    pubDate?: ?ContentChild<moment>,
    lastBuildDate?: ?ContentChild<moment>,
    category?: ?RSSCategory,
    generator?: ?ContentChild<string>,
    docs?: ?ContentChild<string>,
    cloud?: ?RSSCloud,
    ttl?: ?ContentChild<number>,
    image?: ?RSSImage,
    skipHours?: ?ContentChild<number>,
    skipDays?: ?ContentChild<string>
  ) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.items = items;
    this.version = version;
    this.language = language;
    this.copyright = copyright;
    this.managingEditor = managingEditor;
    this.webMaster = webMaster;
    this.pubDate = pubDate;
    this.lastBuildDate = lastBuildDate;
    this.category = category;
    this.generator = generator;
    this.docs = docs;
    this.cloud = cloud;
    this.ttl = ttl;
    this.image = image;
    this.skipHours = skipHours;
    this.skipDays = skipDays;

    if (! title || ! link || ! description) {
      throw missingRequiredDataError.call(this);
    }
  }

  static fromObject(data: any): RSSFeed {
    if (data) {
      return new RSSFeed(
        data.title,
        data.link,
        data.description,
        data.items,
        data.version,
        data.language,
        data.copyright,
        data.managingEditor,
        data.webMaster,
        data.pubDate,
        data.lastBuildDate,
        data.category,
        data.generator,
        data.docs,
        data.cloud,
        data.ttl,
        data.image,
        data.skipHours,
        data.skipDays
      );
    }
    throw missingRequiredDataError.call(this, data);
  }

  // Required
  title: ContentChild<string>;
  link: ContentChild<string>; // URL
  description: ContentChild<string>;

  // Optional
  items: Set<RSSItem>;
  version: ?ContentChild<string>;
  language: ?ContentChild<string>; // WC3 spec: en-us
  copyright: ?ContentChild<string>;
  managingEditor: ?ContentChild<string>; // Email
  webMaster: ?ContentChild<string>; // Email
  pubDate: ?ContentChild<moment>;
  lastBuildDate: ?ContentChild<moment>;
  category: ?RSSCategory;
  generator: ?ContentChild<string>;
  docs: ?ContentChild<string>; // URL
  cloud: ?RSSCloud;
  ttl: ?ContentChild<number>;
  image: ?RSSImage;
  skipHours: ?ContentChild<number>; // integer 0-23, 0 is midnight
  skipDays: ?ContentChild<string>; // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

  // rating: any; // Not supported
  // textInput: obj; // Not supported
}

export class RSSCloud {
  constructor(
    domain: string,
    port: string,
    path: string,
    registerProcedure: string,
    protocol: string
  ) {
    this.domain = domain;
    this.port = port;
    this.path = path;
    this.registerProcedure = registerProcedure;
    this.protocol = protocol;
  }

  static fromObject(data: any): RSSCloud {
    if (data && data.domain && data.port && data.path && data.registerProcedure && data.protocol) {
      return new RSSCloud(
        data.domain,
        data.port,
        data.path,
        data.registerProcedure,
        data.protocol
      );
    }
    throw new Error(`Missing required data to create a RSSCloud:[${JSON.stringify(data)}]`);
  }

  domain: string; // URL
  port: string;
  path: string; // URI path
  registerProcedure: string;
  protocol: string;
}

export class RSSImage {
  constructor(
    url: ContentChild<string>,
    title: ContentChild<string>,
    link: ContentChild<string>,
    width?: ?ContentChild<number>,
    height?: ?ContentChild<number>,
    description?: ?ContentChild<string>
  ) {
    this.url = url;
    this.title = title;
    this.link = link;
    this.width = width;
    this.height = height;
    this.description = description;

    if (! url || ! title || ! width) {
      throw missingRequiredDataError.call(this);
    }
  }

  static fromObject(data: any): RSSImage {
    if (data) {
      return new RSSImage(
        data.url,
        data.title,
        data.link,
        data.width,
        data.height,
        data.description
      );
    }
    throw missingRequiredDataError.call(this, data);
  }

  // Required
  url: ContentChild<string>; // URL of image to render (GIF, JPEG or PNG)
  title: ContentChild<string>;
  link: ContentChild<string>; // URL of website

  // Optional
  width: ?ContentChild<number>; // Max: 144, Default: 88
  height: ?ContentChild<number>; // Max: 400, Default: 31
  description: ?ContentChild<string>;
}
