import { Paradigm } from "../typings";

export const fetchParadigms = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getParadigms`
  );
  const data = await res.json();
  const paradigms: Paradigm[] = data.paradigms;

  return paradigms;
};
