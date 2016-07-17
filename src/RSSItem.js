/* @flow */

import type moment from 'iflow-moment';

/**
 * Base RSS feed item specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt
 * Validation Note: at least one of title or description must exist. All else optional.
 */
export default class RSSItem {
  constructor(
    title: string,
    description: string,
    link?: ?string = null,
    author?: ?string = null,
    category?: ?RSSCategory = null,
    comments?: ?string = null,
    enclosure?: ?RSSEnclosure = null,
    guid?: ?RSSGuid = null,
    pubDate?: ?moment = null,
    source?: ?RSSSource = null
  ) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.author = author;
    this.category = category;
    this.comments = comments;
    this.enclosure = enclosure;
    this.guid = guid;
    this.pubDate = pubDate;
    this.source = source;
  }

  static fromObject(data: Object): RSSItem {
    if (data && (data.title || data.description)) {
      return new RSSItem(
        data.title,
        data.description,
        data.link,
        data.author,
        data.category,
        data.comments,
        data.enclosure,
        data.guid,
        data.pubDate,
        data.source
      );
    }
    throw new Error(`Missing required data to create a ${RSSItem.name}:[${JSON.stringify(data)}]`);
  }

  title: string;
  description: string;
  link: ?string; // URL
  author: ?string; // Email
  category: ?RSSCategory;
  comments: ?string; // URL
  enclosure: ?RSSEnclosure;
  guid: ?RSSGuid; // GUID
  pubDate: ?moment;
  source: ?RSSSource; // url
}

export class RSSEnclosure {
  constructor(
    url: string,
    length: number,
    type: string
  ) {
    this.url = url;
    this.length = length;
    this.type = type;
  }

  static fromObject(data: Object): RSSEnclosure {
    if (data && data.url && data.length && data.type) {
      return new RSSEnclosure(
        data.url,
        data.length,
        data.type
      );
    }
    throw new Error(`Missing required data to create a ${RSSEnclosure.name}:[${JSON.stringify(data)}]`);
  }

  url: string; // URL
  length: number; // integer
  type: string; // mime-type
}

export class RSSCategory {
  constructor(
    content: string,
    domain?: ?string = null
  ) {
    this.content = content;
    this.domain = domain;
  }

  static fromObject(data: Object): RSSCategory {
    if (data && data.content) {
      return new RSSCategory(
        data.content,
        data.domain
      );
    }
    throw new Error(`Missing required data to create a ${RSSCategory.name}:[${JSON.stringify(data)}]`);
  }

  content: string;
  domain: ?string; // URL
}

export class RSSGuid {
  constructor(
    isPermaLink?: ?boolean
  ) {
    this.isPermaLink = isPermaLink;
  }

  static fromObject(data: Object): RSSGuid {
    if (data) {
      return new RSSGuid(data.isPermaLink);
    }
    throw new Error(`Missing required data to create a ${RSSGuid.name}:[${JSON.stringify(data)}]`);
  }

  isPermaLink: ?boolean;
}

export class RSSSource {
  constructor(
    url: string
  ) {
    this.url = url;
  }

  static fromObject(data: Object): RSSSource {
    if (data && data.url) {
      return new RSSSource(data.url);
    }
    throw new Error(`Missing required data to create a ${RSSSource.name}:[${JSON.stringify(data)}]`);
  }

  url: string;
}
