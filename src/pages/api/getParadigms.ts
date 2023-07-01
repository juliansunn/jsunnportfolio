import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Paradigm } from "../../../typings";

const query = groq`
    *[_type == "paradigm"] {
        ...,
        skills[]->
    } | order(skills[].progress desc)
`;

type Data = {
  paradigms: Paradigm[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const paradigms: Paradigm[] = await sanityClient.fetch(query);
  res.status(200).json({ paradigms });
}
