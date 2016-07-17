import RSSItem, { RSSCategory } from './RSSItem';

import type moment from 'iflow-moment';

/**
 * Base RSS feed specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html
 */
export default class RSSFeed {
  constructor(
    title: string,
    link: string,
    description: string,
    version: ?string = null,
    items: Set<RSSItem> = [],
    language: ?string = null,
    copyright: ?string = null,
    managingEditor: ?string = null,
    webMaster: ?string = null,
    pubDate: ?moment = null,
    lastBuildDate: ?moment = null,
    category: ?RSSCategory = null,
    generator: ?string = null,
    docs: ?string = null,
    cloud: ?RSSCloud = null,
    ttl: ?number = null,
    image: ?RSSImage = null,
    skipHours: ?number = null,
    skipDays: ?string = null
  ) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.version = version;
    this.items = items;
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
  }

  static fromObject(data: any): RSSCategory {
    if (data && data.title && data.link && data.description) {
      return new RSSFeed(
        data.title,
        data.link,
        data.description,
        data.version,
        data.items,
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
    throw new Error(`Missing required data to create a RSSItem:[${JSON.stringify(data)}]`);
  }

  // Required
  title: string;
  link: string; // URL
  description: string;

  // Optional
  version: ?string;
  items: Set<RSSItem>;
  language: ?string; // WC3 spec: en-us
  copyright: ?string;
  managingEditor: ?string; // Email
  webMaster: ?string; // Email
  pubDate: ?moment;
  lastBuildDate: ?moment;
  category: ?RSSCategory;
  generator: ?string;
  docs: ?string; // URL
  cloud: ?RSSCloud;
  ttl: ?number;
  image: ?RSSImage;
  skipHours: ?number; // integer 0-23, 0 is midnight
  skipDays: ?string; // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

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

  static fromObject(data: any): RSSCategory {
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
    url: string,
    title: string,
    link: string,
    width: ?number = null,
    height: ?number = null,
    description: ?string = null
  ) {
    this.url = url;
    this.title = title;
    this.link = link;
    this.width = width;
    this.height = height;
    this.description = description;
  }

  static fromObject(data: any): RSSCategory {
    if (data && data.content) {
      return new RSSImage(
        data.url,
        data.title,
        data.link,
        data.width,
        data.height,
        data.description
      );
    }
    throw new Error(`Missing required data to create a RSSImage:[${JSON.stringify(data)}]`);
  }

  // Required
  url: string; // URL
  title: string;
  link: string; // URL

  // Optional
  width: ?number; // Max: 144, Default: 88
  height: ?number; // Max: 400, Default: 31
  description: ?string;
}
