/* @flow */

import type moment from 'iflow-moment';

import ContentChild, { missingRequiredDataError } from './RSSCore';

/**
 * Base RSS feed item specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt
 * Validation Note: at least one of title or description must exist. All else optional.
 */
export default class RSSItem {
  constructor(
    title: ContentChild<string>,
    description: ContentChild<string>,
    link?: ?ContentChild<string>,
    author?: ?ContentChild<string>,
    category?: ?RSSCategory,
    comments?: ?ContentChild<string>,
    enclosure?: ?RSSEnclosure,
    guid?: ?RSSGuid,
    pubDate?: ?ContentChild<moment>,
    source?: ?RSSSource
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

    if (! title || ! description) {
      throw missingRequiredDataError.call(this);
    }
  }

  static fromObject(data: Object): RSSItem {
    if (data) {
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

    throw missingRequiredDataError.call(this, data);
  }

  title: ContentChild<string>;
  description: ContentChild<string>;
  link: ?ContentChild<string>; // URL
  author: ?ContentChild<string>; // Email
  category: ?RSSCategory;
  comments: ?ContentChild<string>; // URL
  enclosure: ?RSSEnclosure;
  guid: ?RSSGuid; // GUID
  pubDate: ?ContentChild<moment>;
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

    if (! url || ! length || ! type) {
      throw missingRequiredDataError.call(this);
    }
  }

  static fromObject(data: Object): RSSEnclosure {
    if (data) {
      return new RSSEnclosure(
        data.url,
        data.length,
        data.type
      );
    }
    throw missingRequiredDataError.call(this, data);
  }

  url: string; // URL
  length: number; // integer
  type: string; // mime-type
}

export class RSSCategory extends ContentChild<string> {
  constructor(
    content: string,
    domain?: ?string = null
  ) {
    super(content);
    this.domain = domain;
  }

  static fromObject(data: Object): RSSCategory {
    if (data) {
      return new RSSCategory(
        data.content,
        data.domain
      );
    }
    throw missingRequiredDataError.call(this, data);
  }

  domain: ?string; // URL
}

export class RSSGuid extends ContentChild<string> {
  constructor(
    content: string,
    isPermaLink?: ?boolean
  ) {
    super(content);
    this.isPermaLink = isPermaLink;
  }

  static fromObject(data: Object): RSSGuid {
    if (data) {
      return new RSSGuid(data.content, data.isPermaLink);
    }
    throw missingRequiredDataError.call(this, data);
  }

  isPermaLink: ?boolean;
}

export class RSSSource extends ContentChild<string> {
  constructor(
    content: string,
    url: string
  ) {
    super(content);
    this.url = url;

    if (! url) {
      throw missingRequiredDataError.call(this);
    }
  }

  static fromObject(data: Object): RSSSource {
    if (data) {
      return new RSSSource(data.content, data.url);
    }
    throw missingRequiredDataError.call(this, data);
  }

  url: string;
}
