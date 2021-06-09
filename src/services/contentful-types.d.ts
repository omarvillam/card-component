// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICardFields {
  /** title */
  title: string;

  /** slug */
  slug: string;

  /** description */
  description?: string | undefined;

  /** Price */
  price: number;

  /** duration */
  duration: number;

  /** image */
  image?: Asset | undefined;
}

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "card";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "card";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
